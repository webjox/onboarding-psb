from django.urls import path, include
from .views import ListUser, DetailUser, DetailMe


urlpatterns = [
    path('users/', ListUser.as_view()),
    path('users/<int:pk>/', DetailUser.as_view()),
    path('me/', DetailMe.as_view())
]
