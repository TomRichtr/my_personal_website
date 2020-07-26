from django.shortcuts import  render,get_object_or_404, redirect
from datetime import date
from django.views.generic import TemplateView,ListView,DetailView,CreateView,UpdateView,DeleteView
from django.http import HttpResponse,Http404,HttpResponseRedirect
from django.conf import settings
import os
from django.db.models import Q
from django.utils import timezone
from django.conf import settings
from . import forms
from .models import Message
from .forms import BoardMessage
from django.urls import reverse_lazy
from django.core.mail import send_mail

class Contacts (CreateView):

    model = Message
    form_class = BoardMessage
    success_url = 'reply/'
    template_name = "message/contacts.html"

class Index (TemplateView):

    template_name = "index.html"

class MessageListView(ListView):
    model = Message

    template_name = "message/message_list.html"

    ordering = ['-created_date']

class DeleteMessage(DeleteView):
    model = Message

    template_name = "message/delete.html"

    success_url = reverse_lazy("personal_website:list")

class Profile (TemplateView):

    template_name = "profile/profile.html"

class AboutMe (TemplateView):

    template_name = "about_me/about_me.html"

    def get(self, request, *args, **kwargs):
        born = date(1987, 6, 29)
        today = date.today()

        try:
            birthday = born.replace(year=today.year)
        except ValueError:
            birthday = born.replace(
                year=today.year, month=born.month + 1, day=1)

        if birthday > today:
            age = today.year - born.year - 1
        else:
            age = today.year - born.year

        context = {"age": age}

        return render(request, self.template_name, context)

class Projects (TemplateView):

    template_name = "projects/projects.html"

class Reply_on_message (TemplateView):

    template_name = "message/reply.html"

    send_mail(
    'A new message',
    'You got a new message on tomasr.pythonanywhere.com!' ,
    'web-inner <noreply@web-inner.cz>',
    ['t.richtr@email.cz'],
    fail_silently=False,
    )
