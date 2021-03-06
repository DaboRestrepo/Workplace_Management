"""
ASGI config for encora_workplace project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""

import os, json
from django.core.exceptions import ImproperlyConfigured
from django.core.asgi import get_asgi_application

with open("config.json") as f:
    value = json.loads(f.read())

def get_value(value_title, values=value):
    try:
        return values[value_title]
    except:
        msg = f"The variable name {value_title} does not exist in the config.json file"
        raise ImproperlyConfigured(msg)

if get_value("ENVIRONMENT") == "local":
    print("Local environment")
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'encora_workplace.settings.local')

elif get_value("ENVIRONMENT") == "production":
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'encora_workplace.settings.production')

application = get_asgi_application()
