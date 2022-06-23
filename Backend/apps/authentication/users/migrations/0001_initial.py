# Generated by Django 4.0.5 on 2022-06-23 17:43

import django.contrib.auth.validators
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='UsersModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'único': 'Este nombre de usuario ya está en uso.'}, help_text='Nombre de usuario, Requerido. 150 caracteres o menos.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='User')),
                ('email', models.EmailField(error_messages={'único': 'Este correo electrónico ya está en uso.'}, help_text='Correo electrónico, Requerido. 254 caracteres o menos.', max_length=254, unique=True, verbose_name='E-mail address')),
                ('first_name', models.CharField(help_text='Nombres, Requerido. 35 caracteres o menos.', max_length=35, verbose_name='Names')),
                ('last_name', models.CharField(help_text='Apellidos, Requerido. 35 caracteres o menos.', max_length=35, verbose_name='Surname')),
                ('birth_date', models.DateField(verbose_name='Date of birth')),
                ('gender', models.CharField(choices=[('M', 'Hombre'), ('W', 'Mujer'), ('O', 'Otro')], default=None, max_length=1, verbose_name='Which gender do you identify with?')),
                ('verification_code', models.CharField(default='0000', error_messages={'requerido': 'Debe ingresar el código de verificación'}, help_text='Requerido. 4 carácteres o menos. Generado automáticamente y llega al correo', max_length=4, verbose_name='Verification code')),
                ('is_staff', models.BooleanField(default=False, help_text='Designa si el usuario puede acceder al administrador', verbose_name='Is an administrator')),
                ('is_active', models.BooleanField(default=False, help_text='Designa si el usuario está activo', verbose_name='Is an active user')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, help_text='Fecha de creación del usuario', verbose_name='Date of creation')),
                ('updated', models.DateTimeField(auto_now=True, help_text='Fecha de edición del usuario', verbose_name='Date of issue')),
                ('order', models.PositiveIntegerField(default=0, help_text='Orden de visualización', verbose_name='Order')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
                'db_table': 'apps_authentication_users',
                'ordering': ['order'],
                'unique_together': {('username', 'email')},
            },
        ),
    ]
