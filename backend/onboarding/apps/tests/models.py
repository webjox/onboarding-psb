from django.db import models
from django_better_admin_arrayfield.models.fields import ArrayField



class Test(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название теста")
    questions = models.ManyToManyField('Question', verbose_name="Вопросы")
    count_score_success = models.PositiveIntegerField(verbose_name="Кол-во очков за успешное прохождение")
    count_question_for_access = models.PositiveIntegerField(verbose_name="Кол-во правильных ответов для успешной сдачи теста")
    class Meta:
        verbose_name = "Тест"
        verbose_name_plural = "Тесты"
        ordering = ("name",)

    # Метод для отображения в админ панели

    def __str__(self):
        return self.name

class Question(models.Model):
    question = models.TextField(verbose_name="Вопрос")
    answer_option = models.ManyToManyField('AnswerOption', verbose_name="Варианты ответа")
    many_answer = models.BooleanField(verbose_name="Множественный ответ")
    input_file = models.BooleanField(default=False, verbose_name="Загрузка документов")
    radio_button = models.BooleanField(default=False, verbose_name="radio button")
    treasure = models.BooleanField(default=False, verbose_name="Ценности поле")

    class Meta:
        verbose_name = "Вопрос"
        verbose_name_plural = "Вопросы"
        ordering = ("question",)

    # Метод для отображения в админ панели

    def __str__(self):
        return f"{self.question} {self.many_answer}"


class AnswerOption(models.Model):
    answer = models.CharField(max_length=255, verbose_name="Ответ")
    correctness_status = models.BooleanField(verbose_name="Правильность ответа")

    class Meta:
        verbose_name = "Вариант ответа"
        verbose_name_plural = "Варианты ответа"
        ordering = ("answer",)

    # Метод для отображения в админ панели

    def __str__(self):
        return f"{self.answer} {self.correctness_status}"

