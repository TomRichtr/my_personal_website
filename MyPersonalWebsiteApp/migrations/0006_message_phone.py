# Generated by Django 3.0.3 on 2020-07-21 07:28

from django.db import migrations
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('MyPersonalWebsiteApp', '0005_auto_20200714_1244'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='phone',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, null=True, region=None),
        ),
    ]
