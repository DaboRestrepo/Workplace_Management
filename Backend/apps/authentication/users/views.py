from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from apps.authentication.users.api.serializers import UserTokenSerializer


class login(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        """Username and password fields"""
        login_serializer = self.serializer_class(data=request.data,
                                                 context={'request': request})
        if login_serializer.is_valid():
            user = login_serializer.validated_data['user']
            if user.is_active:
                """Create the token."""
                token, created = Token.objects.get_or_create(user=user)
                user_serializer = UserTokenSerializer(user)
                if created:
                    return Response({
                        'token': token.key,
                        'user': user_serializer.data,
                        'message': 'Inicio de sesión exitoso'
                    }, status=status.HTTP_201_CREATED)
            else:
                return Response({'message':
                                 'Este usuario no puede iniciar sesión'},
                                status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'message':
                             'Nombre de usuario o contraseña incorrectos'},
                            status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'Hola desde response'},
                        status=status.HTTP_200_OK)
