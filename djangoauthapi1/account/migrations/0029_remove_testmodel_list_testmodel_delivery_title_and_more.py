# Generated by Django 4.0.3 on 2024-04-27 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0028_rename_pmpdeliverymethod_testmodel'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='testmodel',
            name='list',
        ),
        migrations.AddField(
            model_name='testmodel',
            name='delivery_title',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='testmodel',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='testmodel',
            name='enterprise_solutions',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='testmodel',
            name='faqs_list',
            field=models.JSONField(null=True),
        ),
        migrations.AddField(
            model_name='testmodel',
            name='faqs_title',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='testmodel',
            name='know_more_title',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='testmodel',
            name='learning_outcomes',
            field=models.JSONField(null=True),
        ),
        migrations.AddField(
            model_name='testmodel',
            name='learning_overview_desc',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='testmodel',
            name='list_data',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='timeliness',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='title',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='testmodel',
            name='view',
            field=models.CharField(default='', max_length=200),
        ),
    ]
