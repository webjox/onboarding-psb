# Generated by Django 3.2.9 on 2021-12-03 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('step', '0003_passseduserstep'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='step',
            options={'ordering': ('id',), 'verbose_name': 'Шаг', 'verbose_name_plural': 'Шаги'},
        ),
        migrations.AddField(
            model_name='step',
            name='category',
            field=models.CharField(blank=True, choices=[('Оформление', 'Оформление'), ('Выход на рабочее место', 'Выход на рабочее место'), ('Тестирование', 'Тестирование')], max_length=255, null=True, verbose_name='Категория'),
        ),
    ]
