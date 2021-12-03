# Generated by Django 3.2.9 on 2021-12-03 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AnswerOption',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.CharField(max_length=255, verbose_name='Ответ')),
                ('correctness_status', models.BooleanField(verbose_name='Правильность ответа')),
            ],
            options={
                'verbose_name': 'Вариант ответа',
                'verbose_name_plural': 'Варианты ответа',
                'ordering': ('answer',),
            },
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.TextField(verbose_name='Вопрос')),
                ('many_answer', models.BooleanField(verbose_name='Множественный ответ')),
                ('answer_option', models.ManyToManyField(to='tests.AnswerOption', verbose_name='Варианты ответа')),
            ],
            options={
                'verbose_name': 'Вопрос',
                'verbose_name_plural': 'Вопросы',
                'ordering': ('question',),
            },
        ),
        migrations.CreateModel(
            name='Test',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название теста')),
                ('count_score_success', models.PositiveIntegerField(verbose_name='Кол-во очков за успешное прохождение')),
                ('count_question_for_access', models.PositiveIntegerField(verbose_name='Кол-во правильных ответов для успешной сдачи теста')),
                ('questions', models.ManyToManyField(to='tests.Question', verbose_name='Вопросы')),
            ],
            options={
                'verbose_name': 'Вопрос',
                'verbose_name_plural': 'Вопросы',
                'ordering': ('name',),
            },
        ),
    ]
