from django.db import models
from ..authentication.users.models import UsersModel

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

    n_hours = models.SmallIntegerField(
        'Cantidad de horas a reservar',
        default=12
    )

    date_reservation = models.DateField(
        'Reservation date',
    )

    date = models.DateField(
        auto_now=True,
        auto_now_add=False
    )

    status = models.BooleanField(
        'Estado de la reserva'
        default=True,
        verbose_name='Estado'
    )

    class Meta:
        verbose_name = 'Reservation'
        verbose_name_plural = 'Reservations'
        ordering = ['date_reservation']
        unique_together = ('desktop', 'date_reservation')

    def __str__(self) -> str:
        return f'{self.user}. Booking date {self.date_reservation} on the desktop {self.desktop}'
