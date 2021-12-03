from re import VERBOSE
from django.db import models
from ..account.models import User

class Project(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название")
    class Meta:
        verbose_name = "Проект"
        verbose_name_plural = "Проекты"
        ordering = ("name",)

    # Метод для отображения в админ панели

    def __str__(self):
        return self.name

class Team(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название команды")
    project = models.ForeignKey(Project, null=True, blank=True, on_delete=models.SET_NULL, verbose_name="Проект")
    name_project = models.CharField(max_length=255,  null=True, blank=True, verbose_name="Название проекта")
    description = models.TextField(null=True, blank=True, verbose_name="Описание команды")
    #steps
    class Meta:
        verbose_name = "Команда"
        verbose_name_plural = "Команды"
        ordering = ("name",)

    # Метод для отображения в админ панели

    def __str__(self):
        return self.name
    
    @property
    def users(self):
        users_list = User.objects.filter(team=self.pk)
        return users_list
