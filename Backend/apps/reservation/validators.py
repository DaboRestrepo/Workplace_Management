from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_maxValue(value):
    """restring the max value."""
    if value > 12:
        raise ValidationError(
            _('You cannot exceed the 12 hours.')
        )


def validate_minValue(value):
    if value < 1:
        raise ValidationError(
            _('You cannot reserve less than 1 hour.')
        )
