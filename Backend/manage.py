#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os, json, sys
from django.core.exceptions import ImproperlyConfigured


def main():
    """Run administrative tasks."""

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

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
