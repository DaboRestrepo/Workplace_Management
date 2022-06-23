from django.db import models
from ..authentication.users.models import UsersModel

# Create your models here.

class Desktop(models.Model):

    id = models.AutoField(
        primary_key=True
    )

    n_desktop = models.CharField(
        max_length=3
        #
    )

    # amenities = models.CharField(max_length=0)

    class Meta:
        verbose_name = 'Desktop'
        verbose_name_plural = 'Desktops'
        ordering = ['n_desktop']

    def __str__(self) -> str:
        return self.n_desktop

class Reservation(models.Model):

    id = models.AutoField(
        primary_key=True
    )

    user = models.ForeignKey(
        UsersModel,
        null=False,
        blank=False,
        on_delete=models.CASCADE
    )

    desktop = models.ForeignKey(
        Desktop,
        null=False,
        blank=False,
        on_delete=models.CASCADE
    )

    n_hours = models.SmallIntegerField(
        'Cantidad de horas a reservar',
        default=12
    )

    date_reservation = models.DateField(
        'Reservation date',
        blank=False,
        null=False
    )

    date = models.DateField(
        auto_now=True,
        auto_now_add=False
    )
    class Meta:
        verbose_name = 'Reservation'
        verbose_name_plural = 'Reservations'
        ordering = ['date_reservation']

    def __str__(self) -> str:
        return f'{self.user}. Booking date {self.date_reservation} on the desktop {self.desktop}'
