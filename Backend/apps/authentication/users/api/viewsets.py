from ..models import UsersModel
from rest_framework.viewsets import ModelViewSet
from .serializers import UserSerializer


class UserViewset(ModelViewSet):
    queryset = UsersModel.objects.all()
    serializer_class = UserSerializer
