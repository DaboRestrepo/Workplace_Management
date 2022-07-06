"""This module soport the models of Desktop and reservations"""

from django.db import models
from django.utils.timezone import now
from django.utils.translation import gettext_lazy as _

from ..authentication.users.models import UsersModel
from ..reservation.validators import validate_start_hour
from ..reservation.funtions import default_end

from datetime import timedelta


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
        ordering = ['id']

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
        validators=[validate_start_hour],
        help_text="Hora de inicio de la reserva"
    )

    finish_hour = models.DateTimeField(
        'End time (YYYY-MM-DD, hh:mm:ss)',
        default=default_end,
        help_text="Hora de finalización de la reserva"
    )

    n_hours = models.DecimalField(
        'Reserved hours',
        default=12,
        max_digits=5,
        decimal_places=2,
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
        ordering = ['date']
        unique_together = ('desktop', 'start_hour', 'finish_hour')

    def save(self, *args, **kwargs):
        """This method set requirements to be save:
        * Measure the number of hours."""
        time_start = timedelta(days=self.start_hour.day,
                               hours=self.start_hour.hour,
                               minutes=self.start_hour.minute,
                               seconds=self.start_hour.second).total_seconds()
        time_end = timedelta(days=self.finish_hour.day,
                             hours=self.finish_hour.hour,
                             minutes=self.finish_hour.minute,
                             seconds=self.finish_hour.second).total_seconds()
        self.n_hours = float(((time_end - time_start) / 60) / 60)

        super(Reservation, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return f'{self.user}. Booking date {self.start_hour} on the desktop {self.desktop}'
