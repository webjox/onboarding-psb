# Generated by Django 3.2.9 on 2021-12-03 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('step', '0006_auto_20211203_2349'),
    ]

    operations = [
        migrations.AlterField(
            model_name='step',
            name='award',
            field=models.CharField(choices=[('fuel', 'fuel'), ('rocket', 'rocket')], default='fuel', max_length=20, verbose_name='Тип награды'),
        ),
    ]