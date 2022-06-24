from import_export.admin import ImportExportActionModelAdmin

from import_export import resources

from django.contrib import admin

from apps.reservation.models import Desktop, Reservation


class DesktopResource(resources.ModelResource):
    class Meta:
        model = Desktop
        fields = (
            "id",
            "n_desktop"
        )

@admin.register(Desktop)
class DesktopAdmin(ImportExportActionModelAdmin, admin.ModelAdmin):
    """
    Customize desktop admin panel.
    """
    resource_class = DesktopResource
    list_display = ("n_desktop",)
    search_fields = ("n_desktop",)


class ReservationAdmin(admin.ModelAdmin):
    """
    Customize reservation admin panel.
    """
    list_display = ("user", "desktop", "n_hours",)
    search_fields = ("desktop",)


admin.site.register(Reservation, ReservationAdmin)
