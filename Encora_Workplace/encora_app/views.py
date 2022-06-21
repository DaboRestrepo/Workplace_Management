from .models import *
from rest_framework import status
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import HttpResponse
from django.contrib.auth.hashers import make_password, check_password


class ListUsers(APIView):
    """
    View to list all users in the system.
    """

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        """create a new user"""
        serializer = UserSerializer(data=request.data)
        # print(data)
        # email = request.POST['email']
        # encryptedpassword = make_password(request.POST['password'])
        # print(encryptedpassword)
        # checkpassword = check_password(request.POST['password'], encryptedpassword)
        # print(checkpassword)
        # data = User(email=email, password=encryptedpassword)
        # data.save()
        # # return HttpResponse('Done')
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
