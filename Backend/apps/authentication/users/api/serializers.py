from rest_framework import serializers
from ..models import UsersModel


class UserSerializer(serializers.ModelSerializer):
    """Serializer based in User model"""
    class Meta:
        model = UsersModel
        fields = '__all__'
