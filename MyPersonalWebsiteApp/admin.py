from django.contrib import admin
from MyPersonalWebsiteApp.models import Message


class Admin (admin.ModelAdmin):
    model = Message
    list_display = ('email','text','created_date')
# Register your models here.
admin.site.register (Message,Admin)
