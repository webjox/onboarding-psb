# Generated by Django 3.2.9 on 2021-12-03 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('step', '0007_alter_step_award'),
    ]

    operations = [
        migrations.AlterField(
            model_name='step',
            name='award',
            field=models.CharField(blank=True, choices=[('fuel', 'fuel'), ('rocket', 'rocket')], default='fuel', max_length=20, null=True, verbose_name='Тип награды'),
        ),
    ]
