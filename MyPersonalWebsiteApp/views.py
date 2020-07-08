from django.shortcuts import render
from datetime import date
from django.views.generic import TemplateView
from django.http import HttpResponse, Http404
from django.conf import settings
import os
from django.db.models import Q

class Profile (TemplateView):

    template_name = "profile/profile.html"

    def get(self, request, *args, **kwargs):
        born = date(1987, 6, 29)
        today = date.today()

        try:
            birthday = born.replace(year = today.year)
        except ValueError:
            birthday = born.replace(year = today.year,month = born.month + 1, day = 1)

        if birthday > today:
            age = today.year - born.year - 1
        else:
            age = today.year - born.year

        context = {"age":age}

        return render (request,self.template_name,context)

class Abilities (TemplateView):

    template_name = "abilities/abilities.html"

class Projects (TemplateView):

    template_name = "projects/projects.html"

class Experiences (TemplateView):

    template_name = "experiences/experiences.html"
