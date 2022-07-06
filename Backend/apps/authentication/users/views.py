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

    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response("Email inválido")

    pwd_valid = check_password(password, user.password)

    if not pwd_valid:
        return Response("Contraseña inválida")

    token, created = Token.objects.get_or_create(user=user)
    return Response({"token":token.key, "user_id": user.id, 'email': user.email, 'full_name': user.full_name})
