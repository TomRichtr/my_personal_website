from django.shortcuts import render

app_name = "personal_website"

def index (request):
    return render (request,"index/index.html")
