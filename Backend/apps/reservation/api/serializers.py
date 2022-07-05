from rest_framework import serializers

from datetime import datetime
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

    # def validate_start_hour(self, value):
    #     current_date = datetime.now().day
    #     print(current_date)
    #     if current_date > self.start_hour.day:
    #         raise serializers.ValidationError('The start date and the end date\
    #                                           has to be in the future.')
    #     return value

    def to_representation(self, instance):
        """Represent the JSON with all the information."""
        return {
            'id': instance.id,
            'user': instance.user.email,
            'desktop': instance.desktop.n_desktop,
            'n_hours': instance.n_hours,
            'start_date': instance.start_hour,
            'end_date': instance.finish_hour,
            'date': instance.date,
        }
