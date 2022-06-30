from ast import Is
from math import perm
from .models import UsersModel
from .serializers import UserSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated


class UserViewset(ModelViewSet):
    queryset = UsersModel.objects.filter()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    print(permission_classes)
