# Generated by Django 3.2.9 on 2021-12-03 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='number_test_scores',
            field=models.PositiveIntegerField(blank=True, default=0, null=True, verbose_name='Количество баллов за тесты'),
        ),
    ]
