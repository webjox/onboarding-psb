from django.urls import path, include
from .views import ListStep, DetailStep, SendAnswer


urlpatterns = [
    path('steps/', ListStep.as_view()),
    path('steps/<int:pk>/', DetailStep.as_view()),
    path('send-test/', SendAnswer.as_view())
]
