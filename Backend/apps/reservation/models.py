from django.db import models

from ..authentication.users.models import UsersModel

from datetime import datetime, timedelta

# Create your models here.


class Desktop(models.Model):

    n_desktop = models.CharField(
        max_length=3
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

    user = models.ForeignKey(
        UsersModel,
        on_delete=models.CASCADE,
        db_column="email"
    )

    desktop = models.ForeignKey(
        Desktop,
        on_delete=models.CASCADE
    )

    n_hours = models.DecimalField(
        'Reserve hours',
        default=0,
        max_digits=4,
        decimal_places=2,
        help_text="Número de horas reservadas"
    )

    date_reservation = models.DateField(
        'Reservation date',
        help_text="Fecha reservada"
    )

    date = models.DateField(
        'Current date',
        auto_now=True,
        auto_now_add=False,
        help_text="Fecha actual"
    )

    start_hour = models.TimeField(
        'Start time (hh:mm:ss)',
        default="00:00:00",
        help_text="Hora de inicio de la reserva"
    )

    finish_hour = models.TimeField(
        'End time (hh:mm:ss)',
        default="00:00:00",
        help_text="Hora de finalización de la reserva"
    )

    status = models.BooleanField(
        'Reserve status',
        default=True,
        help_text="Estado de la reserva"
    )

    class Meta:
        verbose_name = 'Reservation'
        verbose_name_plural = 'Reservations'
        ordering = ['date_reservation']
        unique_together = ('desktop', 'date_reservation')

    def save(self, *args, **kwargs):
        time_start = timedelta(hours=self.start_hour.hour,
                               minutes=self.start_hour.minute,
                               seconds=self.start_hour.second).total_seconds()
        time_end = timedelta(hours=self.finish_hour.hour,
                             minutes=self.finish_hour.minute,
                             seconds=self.finish_hour.second).total_seconds()
        self.n_hours = float(((time_end - time_start) / 60) / 60)

        super(Reservation, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return f'{self.user}. Booking date {self.date_reservation} on the desktop {self.desktop}'
