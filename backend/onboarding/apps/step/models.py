from django.db import models
from ..tests.models import Test
from ..account.models import User


class Step(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название")
    test = models.ForeignKey(Test, null=True, blank=True, on_delete=models.SET_NULL, verbose_name="Тест")
    training_data = models.TextField(null=True, blank=True, verbose_name="Данные для обучения")
    video_url = models.URLField(null=True, blank=True, verbose_name="Видео ссылка")
    image = models.ImageField(
        upload_to="uploads/%Y/%m/%d/",
        blank=True,
        null=True,
        verbose_name="Фото"
        )
    class Meta:
        verbose_name = "Шаг"
        verbose_name_plural = "Шаги"
        ordering = ("name",)

    # Метод для отображения в админ панели

    def __str__(self):
        return self.name


class PasssedUserStep(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL, verbose_name="Пользователь")
    step = models.ForeignKey(Step, null=True, blank=True, on_delete=models.SET_NULL, verbose_name="Шаг")
    score = models.PositiveIntegerField(verbose_name="Кол-во баллов за тест")

    class Meta:
        verbose_name = "Пройденные шаги пользователя"
        verbose_name_plural = "Пройденные шаги пользователя"
        ordering = ("score",)

    # Метод для отображения в админ панели

    def __str__(self):
        return f"{self.user} {self.step}"