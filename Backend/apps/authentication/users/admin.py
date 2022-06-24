from import_export import resources
from import_export.admin import ImportExportActionModelAdmin

from django.contrib import admin


from .models import UsersModel


# Register your models here.
class UsersResource(resources.ModelResource):
    class Meta:
        model = UsersModel
        fields = (
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "birth_date",
            "gender",
            "verification_code",
            "is_staff",
            "is_active",
            "date_joined",
            "updated"

        )
        export_order = fields


@admin.register(UsersModel)
class UsersAdmin(ImportExportActionModelAdmin, admin.ModelAdmin):
    resource_class = UsersResource
    list_display = ('username', 'email', 'first_name',
                    'last_name', 'is_staff', 'is_active', 'date_joined', 'order')
    list_display_links = ('username', 'email')