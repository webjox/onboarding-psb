# Generated by Django 3.2.9 on 2021-12-03 06:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Step',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название')),
                ('training_data', models.TextField(blank=True, null=True, verbose_name='Данные для обучения')),
                ('video_url', models.URLField(blank=True, null=True, verbose_name='Видео ссылка')),
                ('image', models.ImageField(blank=True, null=True, upload_to='uploads/%Y/%m/%d/', verbose_name='Фото')),
            ],
            options={
                'verbose_name': 'Шаг',
                'verbose_name_plural': 'Шаги',
                'ordering': ('name',),
            },
        ),
    ]
