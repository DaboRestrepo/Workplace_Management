from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password

User = get_user_model()


@api_view(['POST'])
def login(request):

    username = request.POST.get('username')
    password = request.POST.get('password')

    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response("Usuario inválido")

    pwd_valid = check_password(password, user.password)

    if not pwd_valid:
        return Response("Contraseña inválida")

    token, created = Token.objects.get_or_create(user=user)
    return Response(token.key)


@api_view(['GET'])
def logout(request, format=None):
    # Query para identificar el id del usuario
    # Identificar el user id en la BD de tokens
    # delete() ese token
    user_id = User.objects.all().first().id
    token = request.query_params
    print(token)
    return Response(status=status.HTTP_200_OK)
