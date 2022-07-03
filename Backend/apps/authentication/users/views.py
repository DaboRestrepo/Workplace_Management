from http.client import HTTPResponse
from psycopg2 import IntegrityError
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
import json

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password
from django.forms import ValidationError
from django.contrib.auth import login, logout
from django.views.decorators.csrf import csrf_protect
from django.shortcuts import render

from apps.authentication.users.serializers import UserSerializer
from apps.authentication.users.models import UsersModel
# User = get_user_model()


@csrf_protect
@api_view(['POST'])
@permission_classes([AllowAny])
def Register(request):
    try:
        data = []
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.is_active = True
            user.save()
            token = Token.objects.get_or_create(user=user)[0].key
            data["message"] = "Usuario registrado correctamente"
            data["email"] = user.email
            data["username"] = user.username
            data["token"] = token
        else:
            data = serializer.errors
        return Response(data)
    except IntegrityError as err:
        user = UsersModel.objects.get(username='')
        user.delete()
        raise ValidationError({"400": f'{str(err)}'})
    except KeyError as err:
        print(err)
        raise ValidationError({"400": f'Field {str(err)} missing'})


@csrf_protect
@api_view(["POST"])
@permission_classes([AllowAny])
def login_user(request):

    data = {}
    body = json.loads(request.body)
    email1 = body['email']
    print(email1)
    password = body['password']
    try:

        user = UsersModel.objects.get(email=email1)
    except BaseException as err:
        raise ValidationError({"400": f'{str(err)}'})

    token = Token.objects.get_or_create(user=user)[0].key
    print(token)
    if not check_password(password, user.password):
        raise ValidationError({"message": "Credenciales incorrectas"})

    if user:
        print(user)
        if user.is_active:
            print(request.username)
            login(request, user)
            data["message"] = "user logged in"
            data["email_address"] = user.email

            Res = {"data": data, "token": token}

            return Response(Res)

        else:
            raise ValidationError({"400": f'El user no está activo'})

    else:
        raise ValidationError({"400": f'El usuario no existe'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def User_logout(request):
    request.user.auth_token.delete()
    logout(request)
    return HTTPResponse("Has cerrado la sesión")
