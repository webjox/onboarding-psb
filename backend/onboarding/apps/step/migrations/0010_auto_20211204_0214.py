# Generated by Django 3.2.9 on 2021-12-03 23:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('step', '0009_alter_step_award'),
    ]

    operations = [
        migrations.AddField(
            model_name='step',
            name='drag_and_drop',
            field=models.BooleanField(default=False, verbose_name='Прикрепление файлов'),
        ),
        migrations.AddField(
            model_name='step',
            name='map',
            field=models.BooleanField(default=False, verbose_name='Карта'),
        ),
    ]
