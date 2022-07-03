from rest_framework import serializers
from .models import UsersModel


# class UserTokenSerializer(serializers.ModelSerializer):
#     """Serializer to be used in the token"""
#     class Meta:
#         model = UsersModel
#         fields = ('id', 'email', 'full_name')


class UserSerializer(serializers.ModelSerializer):
    """Serializer based in User model"""
    class Meta:
        model = UsersModel
        fields = '__all__'

    def create(self, validated_data):
        user = UsersModel(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        updated_user = super().update(instance, validated_data)
        updated_user.set_password(validated_data['password'])
        updated_user.save()
        return updated_user
