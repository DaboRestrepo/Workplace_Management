from rest_framework import serializers
from ..models import Desktop, Reservation

class DesktopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Desktop
        fields = (
            'id',
            'n_desktop',
        )
        
class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = (
            'id',
            'user',
            'desktop',
            'n_hours',
        )