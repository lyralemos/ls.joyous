# Generated by Django 2.0.8 on 2018-09-20 19:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('joyous', '0010_auto_20180920_1210'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grouppage',
            name='page_ptr',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, related_name='joyous_grouppage', serialize=False, to='wagtailcore.Page'),
        ),
    ]
