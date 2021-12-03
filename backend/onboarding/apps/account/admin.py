from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from .models import User


class UserAdmin(DjangoUserAdmin):
    list_display = ('username', 'name')
    search_fields = ('username', 'name')
    ordering = ('username',)
    list_filter = ("is_active", "is_staff", "is_superuser")
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Персональная информания', {'fields': ('name', 'fuels', 'rockets', 'post', 'role_in_team', 'team', "description",  "photo", "stack", "number_test_scores")}),
        ('Права доступа', {'fields': ('is_active', 'is_staff', 'is_superuser')}),)
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'username', 
                'name',
                'fuels',
                'rockets',  
                'post', 
                'role_in_team', 
                'team',
                "description", 
                "photo", 
                "stack", 
                "number_test_scores",
                'is_staff', 
                'is_active', 
                'is_superuser', 
                'password1', 
                'password2',
                ),
            }
        ),
    )




admin.site.register(User, UserAdmin)
