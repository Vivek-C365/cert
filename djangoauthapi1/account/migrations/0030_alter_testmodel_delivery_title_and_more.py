# Generated by Django 4.0.3 on 2024-04-27 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0029_remove_testmodel_list_testmodel_delivery_title_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testmodel',
            name='delivery_title',
            field=models.CharField(blank=True, default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='description',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='faqs_list',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='faqs_title',
            field=models.CharField(blank=True, default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='know_more_title',
            field=models.CharField(blank=True, default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='learning_outcomes',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='learning_overview_desc',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='timeliness',
            field=models.CharField(blank=True, default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='title',
            field=models.CharField(blank=True, default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='view',
            field=models.CharField(blank=True, default='', max_length=200),
        ),
    ]
