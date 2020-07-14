from django.db import models
from django.utils import timezone
from django.urls import reverse

class Message(models.Model):
    email = models.EmailField ()
    text = models.TextField(max_length=1000)
    created_date = models.DateTimeField(default=timezone.now)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.email
