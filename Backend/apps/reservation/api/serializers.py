from rest_framework import serializers
from ..models import Desktop, Reservation


class DesktopSerializer(serializers.ModelSerializer):
    """Serializer based in Desktop model."""
    class Meta:
        model = Desktop
        fields = '__all__'


class ReservationSerializer(serializers.ModelSerializer):
    """Serializer based in Reservation model."""
    class Meta:
        model = Reservation
        fields = '__all__'

    def to_representation(self, instance):
        """Represent the JSON with all the information."""
        return {
            'id': instance.id,
            'user': instance.user.email,
            'desktop': instance.desktop.n_desktop,
            'n_hours': instance.n_hours,
            'date_reservation': instance.date_reservation,
            'date': instance.date,
        }
