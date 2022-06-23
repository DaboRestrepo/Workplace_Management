from .base import *

DEBUG = False

BASE_URL = get_value('BASE_URL')

ALLOWED_HOSTS = get_value('ALLOWED_HOSTS')['production']

CORS_ALLOWED_ORIGINS = get_value('CORS_ALLOWED_ORIGINS')['production']

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases


DATABASES = {
    'default': {
        'CONN_MAX_AGE': get_value('DB_CONN_MAX_AGE'),
        'ENGINE': get_value('ENGINE'),
        'NAME': get_value('NAME'),
        'USER': get_value('USER'),
        'PASSWORD': get_value('PASSWORD'),
        'HOST': get_value('HOST'),
        'PORT': get_value('PORT'),
    }
}

EMAIL_BACKEND = get_value('EMAIL_BACKEND')

if bool(get_value('EMAIL_USE_TLS')):
    EMAIL_USE_TLS = True

elif bool(get_value('EMAIL_USE_SSL')):
    EMAIL_USE_SSL = True

EMAIL_HOST = get_value('EMAIL_HOST')

EMAIL_PORT = get_value('EMAIL_PORT')

EMAIL_HOST_USER = get_value('EMAIL_HOST_USER')

EMAIL_HOST_PASSWORD = get_value('EMAIL_HOST_PASSWORD')

DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
