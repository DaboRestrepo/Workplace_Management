# Generated by Django 4.0.5 on 2022-06-29 16:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Desktop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('n_desktop', models.CharField(max_length=3)),
            ],
            options={
                'verbose_name': 'Desktop',
                'verbose_name_plural': 'Desktops',
                'ordering': ['n_desktop'],
            },
        ),
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('n_hours', models.DecimalField(decimal_places=2, default=0, help_text='Número de horas reservadas', max_digits=4, verbose_name='Reserve hours')),
                ('date_reservation', models.DateField(help_text='Fecha reservada', verbose_name='Reservation date')),
                ('date', models.DateField(auto_now=True, help_text='Fecha actual', verbose_name='Current date')),
                ('start_hour', models.TimeField(default='00:00:00', help_text='Hora de inicio de la reserva', verbose_name='Start time (hh:mm:ss)')),
                ('finish_hour', models.TimeField(default='00:00:00', help_text='Hora de finalización de la reserva', verbose_name='End time (hh:mm:ss)')),
                ('status', models.BooleanField(default=True, help_text='Estado de la reserva', verbose_name='Reserve status')),
                ('desktop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reservation.desktop')),
            ],
            options={
                'verbose_name': 'Reservation',
                'verbose_name_plural': 'Reservations',
                'ordering': ['date_reservation'],
            },
        ),
    ]
