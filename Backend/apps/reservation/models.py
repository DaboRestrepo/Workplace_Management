"""This module soport the models of Desktop and reservations"""

from django.db import models
from django.utils.timezone import now

from ..authentication.users.models import UsersModel
from ..reservation.validators import validate_maxValue, validate_minValue
from ..reservation.funtions import default_end

from datetime import datetime, timedelta


class Desktop(models.Model):
    """The tables and the features of the desktop model."""
    n_desktop = models.CharField(
        'Available desktops',
        max_length=3,
        help_text='Escritorios disponibles'
        #
    )
    # metting_room = models.CharField(
    #     'Sala de reuniones',
    #     max_length=3
    # )

    # amenities = models.CharField(max_length=0)

    class Meta:
        verbose_name = 'Desktop'
        verbose_name_plural = 'Desktops'
        ordering = ['n_desktop']

    def __str__(self) -> str:
        return self.n_desktop


class Reservation(models.Model):
    """The tables and the features of the reservation model."""
    user = models.ForeignKey(
        UsersModel,
        on_delete=models.CASCADE,
        db_column="email"
    )

    desktop = models.ForeignKey(
        Desktop,
        on_delete=models.CASCADE
    )

    date = models.DateField(
        'Current date',
        auto_now=True,
        auto_now_add=False,
        help_text="Fecha actual"
    )

    start_hour = models.DateTimeField(
        'Start time (YYYY-MM-DD, hh:mm:ss)',
        default=now,
        help_text="Hora de inicio de la reserva"
    )

    finish_hour = models.DateTimeField(
        'End time (YYYY-MM-DD, hh:mm:ss)',
        default=default_end,
        help_text="Hora de finalización de la reserva"
    )

    n_hours = models.DecimalField(
        'Reserve hours',
        default=12,
        max_digits=5,
        decimal_places=2,
        validators=[validate_maxValue, validate_minValue],
        help_text="Número de horas reservadas"
    )

    status = models.BooleanField(
        'Reserve status',
        default=False,
        help_text="Estado de la reserva"
    )

    class Meta:
        verbose_name = 'Reservation'
        verbose_name_plural = 'Reservations'
        ordering = ['start_hour']
        unique_together = ('desktop', 'start_hour', 'finish_hour')

    def save(self, *args, **kwargs):
        """This method set requirements to be save:
        * Measure the number of hours.
        * If the number of hours is greater than 12, raise error.
        * If the number of hours is less than 1, raise error.
        * If the start date is in the past, raise error."""
        time_start = timedelta(days=self.start_hour.day,
                               hours=self.start_hour.hour,
                               minutes=self.start_hour.minute,
                               seconds=self.start_hour.second).total_seconds()
        time_end = timedelta(days=self.finish_hour.day,
                             hours=self.finish_hour.hour,
                             minutes=self.finish_hour.minute,
                             seconds=self.finish_hour.second).total_seconds()
        self.n_hours = float(((time_end - time_start) / 60) / 60)

        if self.n_hours < 1 or self.n_hours > 12:
            raise Exception('Your reservation has to be less tha 12 hours and more than 1 hour.')
        current_date = datetime.now().day
        print(current_date)
        if current_date < self.start_hour.day:
            raise Exception('The start date and the end date has to be in the future.')

        super(Reservation, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return f'{self.user}. Booking date {self.start_hour} on the desktop {self.desktop}'
