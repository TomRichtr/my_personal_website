from django.contrib.auth import login, logout
from django.urls import reverse_lazy
from django.views.generic import CreateView
from .forms import UserCreateForm
from .models import User

# Create your views here.
class SignUp(CreateView):
    form_class = UserCreateForm
    success_url = reverse_lazy("login")
    template_name = "blog/signup.html"
    model = User