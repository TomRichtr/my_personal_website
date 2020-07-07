from django.urls import path
from . import views

app_name = "personal_website"

urlpatterns = [
    path ("abilities/",views.Abilities.as_view(),name="abilities"),
    path ("profile/",views.Profile.as_view(),name="profile"),
    path ("experiences/",views.Experiences.as_view(),name="experiences"),
    path ("projects/",views.Projects.as_view(),name="projects"),
]
