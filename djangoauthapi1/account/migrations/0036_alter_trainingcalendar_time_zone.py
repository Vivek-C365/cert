# Generated by Django 4.0.3 on 2024-04-28 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0035_alter_testmodel_certificate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trainingcalendar',
            name='time_zone',
            field=models.CharField(default='', max_length=255),
        ),
    ]