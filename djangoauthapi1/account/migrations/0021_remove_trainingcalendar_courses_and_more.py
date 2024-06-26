# Generated by Django 4.0.3 on 2024-04-18 07:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0020_alter_trainingcalendar_time_zone'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trainingcalendar',
            name='courses',
        ),
        migrations.AddField(
            model_name='trainingcalendar',
            name='course_fk',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='training_calendars', to='account.course'),
        ),
        migrations.AlterField(
            model_name='trainingcalendar',
            name='certificate',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='training_calendars', to='account.certificate'),
        ),
    ]
