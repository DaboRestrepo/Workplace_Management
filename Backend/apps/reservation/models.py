from django.db import models
from ..authentication.users.models import UsersModel

# Create your models here.

class Desktop(models.Model):
    id = models.AutoField(primary_key=True)
    n_desktop = models.CharField(max_length=3)
    # amenities = models.CharField(max_length=0)

    class Meta:
        ordering = ['n_desktop']
        verbose_name = 'Desktop'
        verbose_name_plural = 'Desktops'

    def __str__(self) -> str:
        return self.n_desktop

class Reservation(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(UsersModel, null=False, blank=False, on_delete=models.CASCADE)
    desktop = models.ForeignKey(Desktop, null=False, blank=False, on_delete=models.CASCADE)
    # date_reservation = models.DateTimeField(auto_now_add=True) Organizar
    n_hours = models.SmallIntegerField('Cantidad de horas a reservar', default=8)

    class Meta:
        # ordering = ['date_reservation']
        verbose_name = 'Reservation'
        verbose_name_plural = 'Reservations'

    def __str__(self) -> str:
        return f'{self.user} for: {self.n_hours} hour(s) (Desk: {self.desktop})'