from django.contrib import admin

from apps.reservation.models import Desktop, Reservation


# Register your models here.
class DesktopAdmin(admin.ModelAdmin):
    """
    Customize desktop admin panel.
    """
    list_display = ("n_desktop",)
    search_fields = ("n_desktop",)


class ReservationAdmin(admin.ModelAdmin):
    """
    Customize reservation admin panel.
    """
    list_display = ("user", "desktop", "n_hours",)
    search_fields = ("desktop",)


admin.site.register(Desktop, DesktopAdmin)
admin.site.register(Reservation, ReservationAdmin)
