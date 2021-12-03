from django.urls import path, include
from .views import ListTeam, DetailTeam


urlpatterns = [
    path('teams/', ListTeam.as_view()),
    path('teams/<int:pk>/', DetailTeam.as_view()),
]
