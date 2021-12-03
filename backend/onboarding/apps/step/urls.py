from django.urls import path, include
from .views import ListStep, DetailStep, SendAnswer, DeteleUserStep, PassedUserSteps


urlpatterns = [
    path('steps/', ListStep.as_view()),
    path('steps/<int:pk>/', DetailStep.as_view()),
    path('send-step/', SendAnswer.as_view()),
    path('delete-user-step/', DeteleUserStep.as_view()),
    path('passed-user-step/', PassedUserSteps.as_view())
]
