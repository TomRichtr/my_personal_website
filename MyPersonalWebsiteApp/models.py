from django.db import models
from django.utils import timezone
from django.urls import reverse
from phonenumber_field.modelfields import PhoneNumberField

class Message(models.Model):
    email = models.EmailField ()
    phone = PhoneNumberField(null = True, blank = True)
    text = models.TextField(max_length=1000)
    created_date = models.DateTimeField(default=timezone.now)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.email
