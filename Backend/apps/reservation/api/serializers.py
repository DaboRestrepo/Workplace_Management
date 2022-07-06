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

    def validate_start_hour(self, value):
        current_date = datetime.now().day
        if current_date > value.day:
            raise serializers.ValidationError(
                {'start_hour': 'The start date and the end date has to be in the future.'})
        return value

    def validate(self, data):
        desktop = data['desktop']
        case_1 = Reservation.objects.filter(desktop=desktop,
                                            start_hour__lte=data['start_hour'],
                                            finish_hour__gte=data['finish_hour'])
        case_2 = Reservation.objects.filter(desktop=desktop,
                                            start_hour__lte=data['finish_hour'],
                                            finish_hour__gte=data['finish_hour'])
        case_3 = Reservation.objects.filter(desktop=desktop,
                                            start_hour__gte=data['start_hour'],
                                            finish_hour__lte=data['finish_hour'])
        if case_1 or case_2 or case_3:
            raise serializers.ValidationError(
                {'Desktop': 'This desktop is unavailable'}
            )
        return data

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
