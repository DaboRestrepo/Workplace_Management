from rest_framework import serializers
from ..models import Desktop, Reservation

class DesktopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Desktop
        fields = ('__all__')
        
class ReservationSerializer(serializers.ModelSerializer):
       
    class Meta:
        model = Reservation
        fields = ('__all__')