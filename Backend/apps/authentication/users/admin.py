from django.contrib import admin

from apps.authentication.users.models import UsersModel


# Register your models here.
class UserAdmin(admin.ModelAdmin):
    """
    Custumize admin panel.
    """
    list_display = ("first_name", "last_name", "email", "is_staff", "is_active")
    list_filter = ("is_staff", "is_active")
    search_fields = ("name", "lastname", "email")
    date_hierarchy = ("date_joined")


admin.site.register(UsersModel, UserAdmin)
