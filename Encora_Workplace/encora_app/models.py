from operator import mod
from django.db import models

# Create your models here.

class User(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=35, blank=False, null=False)
    last_name = models.CharField(max_length=35, blank=False, null=False)
    email = models.EmailField(max_length=255, blank=False, null=False)
    password = models.CharField(max_length=255, blank=False, null=False )
    birth_date = models.DateField()
    sex = [
        ('F', 'Female'),
        ('M', 'Male'),
        ('None', 'None'),
    ]
    gender = models.CharField(max_length=5, choices=sex, default=None, null=True, blank=True)
    # is_staff = models.BooleanField(default=False)

    class Meta:
        ordering = ['last_name']
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def full_name(self):
        return f'{self.last_name} {self.name}'

    def __str__(self) -> str:
        return self.full_name()

class Desktop(models.Model):
    id = models.AutoField(primary_key=True)
    n_desktop = models.CharField('Desktop', max_length=3)
    # amenities = models.CharField(max_length=0)

    class Meta:
        ordering = ['n_desktop']
        verbose_name = 'Desktop'
        verbose_name_plural = 'Desktops'

    def __str__(self) -> str:
        return self.n_desktop

class Reservation(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    desktop = models.ForeignKey(Desktop, on_delete=models.CASCADE)
    n_hours = models.SmallIntegerField('Number of hours to reserve', default=12)
    date = models.DateField(auto_now=True, auto_now_add=False)
    date_reservation = models.DateField('Reservation date', blank=False, null=False)

    class Meta:
        ordering = ['date_reservation']
        verbose_name = 'Reservation'
        verbose_name_plural = 'Reservations'

    def __str__(self) -> str:
        return f'{self.user}. Booking date {self.date_reservation} on the desktop {self.desktop}'
