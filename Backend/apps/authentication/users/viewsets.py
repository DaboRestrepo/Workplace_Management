from ast import Is
from .models import UsersModel
from .serializers import UserTokenSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated


class UserViewset(ModelViewSet):
    queryset = UsersModel.objects.all()
    serializer_class = UserTokenSerializer
    permission_classes = [IsAuthenticated]
