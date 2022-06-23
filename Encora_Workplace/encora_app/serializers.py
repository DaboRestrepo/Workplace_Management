from .models import *
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    # password = serializers.ModelField(widget=serializers.PasswordInput)
    class Meta:
        model = User
        fields = ('id', 'name', 'last_name', 'email', 'password', 'birth_date', 'gender')
