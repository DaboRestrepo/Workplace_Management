from django.db import models

# Create your models here.

class User(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=35, blank=False, null=False)
    last_name = models.CharField(max_length=35, blank=False, null=False)
    birth_date = models.DateField()
    sex = [
        ('F', 'Female'),
        ('M', 'Male'),
        ('None', 'None'),
    ]
    gender = models.CharField(max_length=5, choices=sex, default=None, null=True, blank=True)

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
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE)
    desktop = models.ForeignKey(Desktop, null=False, blank=False, on_delete=models.CASCADE)
    # date_reservation = models.DateTimeField(auto_now_add=True) Organizar
    n_hours = models.SmallIntegerField('Cantidad de horas a reservar', default=8)

    class Meta:
        ordering = ['date_reservation']
        verbose_name = 'Reservation'
        verbose_name_plural = 'Reservations'

    def __str__(self) -> str:
        return f'{self.user} for: {self.n_hours} hour(s) (Desk: {self.desktop})'
