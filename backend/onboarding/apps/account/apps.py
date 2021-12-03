from django.apps import AppConfig


class AccountConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.account'
    verbose_name = "Пользователь"
    verbose_name_plural = "Пользователи"
