# Generated by Django 4.2 on 2023-04-18 12:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_room_curret_song'),
    ]

    operations = [
        migrations.RenameField(
            model_name='room',
            old_name='curret_song',
            new_name='current_song',
        ),
    ]
