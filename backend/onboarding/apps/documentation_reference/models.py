from django.db import models
from ..team.models import Project

class DocumentationReference(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название")
    url = models.URLField(verbose_name="Ссылка")
    short_description = models.CharField(max_length=255, verbose_name="Краткое описание")
    category = models.ForeignKey(Project, null=True, blank=True, on_delete=models.SET_NULL, verbose_name="Категория")
    class Meta:
        verbose_name = "Справочник документации"
        verbose_name_plural = "Справочники документации"
        ordering = ("name",)

    # Метод для отображения в админ панели

    def __str__(self):
        return self.name