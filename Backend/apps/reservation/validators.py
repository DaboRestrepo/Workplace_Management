from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

from datetime import datetime



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


def validate_start_hour(value):
    current_date = datetime.now().day
    if current_date > value.day:
        raise ValidationError(_('The start date and the end date\
                                has to be in the future.'))
