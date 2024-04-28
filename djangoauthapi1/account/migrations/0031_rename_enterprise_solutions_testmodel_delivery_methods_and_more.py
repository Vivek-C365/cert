# Generated by Django 4.0.3 on 2024-04-27 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0030_alter_testmodel_delivery_title_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='testmodel',
            old_name='enterprise_solutions',
            new_name='Delivery_Methods',
        ),
        migrations.RenameField(
            model_name='testmodel',
            old_name='faqs_list',
            new_name='Enterprise_Solutions',
        ),
        migrations.RenameField(
            model_name='testmodel',
            old_name='list_data',
            new_name='certificationSteps',
        ),
        migrations.RemoveField(
            model_name='testmodel',
            name='delivery_title',
        ),
        migrations.RemoveField(
            model_name='testmodel',
            name='description',
        ),
        migrations.RemoveField(
            model_name='testmodel',
            name='faqs_title',
        ),
        migrations.RemoveField(
            model_name='testmodel',
            name='timeliness',
        ),
        migrations.RemoveField(
            model_name='testmodel',
            name='title',
        ),
        migrations.RemoveField(
            model_name='testmodel',
            name='view',
        ),
        migrations.AddField(
            model_name='testmodel',
            name='certification_overview',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='testmodel',
            name='faqs',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='testmodel',
            name='heading',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='testmodel',
            name='resources_data',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='know_more_title',
            field=models.CharField(blank=True, default='', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='learning_overview_desc',
            field=models.TextField(blank=True, null=True),
        ),
    ]
