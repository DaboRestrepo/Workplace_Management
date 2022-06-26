from rest_framework import serializers
from ..models import Desktop, Reservation


class DesktopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Desktop
        fields = (
            'n_desktop',
        )


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = (
            'user', 'desktop', 'n_hours', 'date_reservation', 'date'
        )

    def to_representation(self, instance):
        return {
            'user': instance.user.email,
            'desktop': instance.desktop.n_desktop,
            'n_hours': instance.n_hours,
            'date_reservation': instance.date_reservation,
            'date': instance.date,
        }
