from import_export import resources
from import_export.admin import ImportExportActionModelAdmin

from django.contrib import admin

from apps.reservation.models import Reservation, Desktop

# Register your models here.


class ReservationResource(resources.ModelResource):
    class Meta:
        model = Reservation
        fields = (
            "id",
            "user",
            "desktop",
            "n_hours",
        )
        export_order = fields


class DesktopResource(resources.ModelResource):
    class Meta:
        model = Desktop
        fields = (
            "id",
            "n_desktop",
        )
        export_order = fields


@admin.register(Reservation)
class ReservationAdmin(ImportExportActionModelAdmin, admin.ModelAdmin):
    resource_class = ReservationResource
    list_display = ('id', 'user', 'desktop', 'n_hours')
    list_display_links = ('id', 'user')


@admin.register(Desktop)
class DesktopAdmin(ImportExportActionModelAdmin, admin.ModelAdmin):
    resource_class = DesktopResource
    list_display = ('id', 'n_desktop')
    list_display_links = ('id', 'n_desktop')
