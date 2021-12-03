from django.urls import path, include
from .views import (
    ListTest,
    ListQuestion,
    ListAnswerOption,
    DetailTest,
    DetailQuestion,
    DetailAnswerOption,

)


urlpatterns = [
    path('tests/', ListTest.as_view()),
    path('tests/<int:pk>/', DetailTest.as_view()),
    path('questions/', ListQuestion.as_view()),
    path('questions/<int:pk>/', DetailQuestion.as_view()),
    path('answer-options/', ListAnswerOption.as_view()),
    path('answer-options/<int:pk>/', DetailAnswerOption.as_view()),

]
