from datetime import date

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.utils import timezone

from .managers import UsersManager
# Create your models here.



class UsersModel(AbstractBaseUser, PermissionsMixin):
    username_validator = UnicodeUsernameValidator()

    MAN = 'M'
    WOMAN = 'W'
    OTHER = 'O'

    GENDER_IN_CHOICES = [
        (MAN, 'Hombre'),
        (WOMAN, 'Mujer'),
        (OTHER, 'Otro')
    ]

    username = models.CharField(
        "Usuario",
        max_length=150,
        unique=True,
        help_text="Nombre de usuario, Requerido. 150 caracteres o menos.",
        validators=[username_validator],
        error_messages={
            "único": "Este nombre de usuario ya está en uso.",
        }
    )

    email = models.EmailField(
        "Correo Electrónico",
        max_length=254,
        unique=True,
        help_text="Correo electrónico, Requerido. 254 caracteres o menos.",
        error_messages={
            "único": "Este correo electrónico ya está en uso.",
        }
    )

    first_name = models.CharField(
        "Nombres",
        max_length=35,
        help_text="Nombres, Requerido. 35 caracteres o menos."
        #
    )

    last_name = models.CharField(
        "Apellidos",
        max_length=35,
        help_text="Apellidos, Requerido. 35 caracteres o menos."
        #
    )

    birth_date = models.DateField(
        "Fecha de Nacimiento",
        #
    )

    gender = models.CharField(
        "¿Con cuál genero te identificas?",
        choices=GENDER_IN_CHOICES,
        max_length=1
    )

    verification_code = models.CharField(
        'Código de verificación',
        max_length=4,
        default='0000',
        help_text="Requerido. 4 carácteres o menos. Generado automáticamente y llega al correo",
        error_messages={
            "requerido": "Debe ingresar el código de verificación",
        }
    )

    is_staff = models.BooleanField(
        "Es un administrador",
        default=False,
        help_text="Designa si el usuario puede acceder al administrador",
    )

    is_active = models.BooleanField(
        'Es un usuario activo',
        default=False,
        help_text="Designa si el usuario está activo",
    )

    date_joined = models.DateTimeField(
        'Fecha de cración',
        default=timezone.now,
        help_text="Fecha de creación del usuario",
    )

    updated = models.DateTimeField(
        'Fecha de edición',
        auto_now=True,
        help_text="Fecha de edición del usuario",
    )

    order = models.PositiveIntegerField(
        'Orden',
        default=0,
        help_text="Orden de visualización",
    )

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username', 'birth_date']

    objects = UsersManager()

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        unique_together = ('username', 'email')
        db_table = 'apps_authentication_users'
        ordering = ['order']

    def __str__(self) -> str:
        return f"{self.id} - {self.username} - {self.email}"
    
