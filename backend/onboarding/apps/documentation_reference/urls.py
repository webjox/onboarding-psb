from django.urls import path, include
from .views import ListDocumentationReference, DetailDocumentationReference


urlpatterns = [
    path('documentations_reference/', ListDocumentationReference.as_view()),
    path('documentations_reference/<int:pk>/', DetailDocumentationReference.as_view()),
]
