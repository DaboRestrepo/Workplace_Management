# Generated by Django 4.0.5 on 2022-07-05 23:42

import apps.reservation.funtions
import apps.reservation.validators
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Desktop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('n_desktop', models.CharField(help_text='Escritorios disponibles', max_length=3, verbose_name='Available desktops')),
            ],
            options={
                'verbose_name': 'Desktop',
                'verbose_name_plural': 'Desktops',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(auto_now=True, help_text='Fecha actual', verbose_name='Current date')),
                ('start_hour', models.DateTimeField(default=django.utils.timezone.now, help_text='Hora de inicio de la reserva', validators=[apps.reservation.validators.validate_start_hour], verbose_name='Start time (YYYY-MM-DD, hh:mm:ss)')),
                ('finish_hour', models.DateTimeField(default=apps.reservation.funtions.default_end, help_text='Hora de finalización de la reserva', verbose_name='End time (YYYY-MM-DD, hh:mm:ss)')),
                ('n_hours', models.DecimalField(decimal_places=2, default=12, help_text='Número de horas reservadas', max_digits=5, verbose_name='Reserved hours')),
                ('status', models.BooleanField(default=False, help_text='Estado de la reserva', verbose_name='Reserve status')),
                ('desktop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reservation.desktop')),
                ('user', models.ForeignKey(db_column='email', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Reservation',
                'verbose_name_plural': 'Reservations',
                'ordering': ['date'],
                'unique_together': {('desktop', 'start_hour', 'finish_hour')},
            },
        ),
    ]
