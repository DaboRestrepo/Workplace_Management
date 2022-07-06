from email import message
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from .models import UsersModel

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password


User = get_user_model()
@api_view(['POST'])
def login(request):

    username = request.data.get('username')
    password = request.data.get('password')

    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response("Usuario inválido")

    pwd_valid = check_password(password, user.password)

    if not pwd_valid:
        return Response("Contraseña inválida")

    token, created = Token.objects.get_or_create(user=user)
    return Response({"token":token.key, "user_id": user.id, 'email': user.email, 'full_name': user.full_name})


@api_view(['GET'])
def get_user(request):
    user_id = request.query_params.get('user_id')
    print(user_id)
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response("Usuario inválido")
    return Response({message: "Success", "user": user})