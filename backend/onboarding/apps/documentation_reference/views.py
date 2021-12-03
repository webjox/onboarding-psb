from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import DocumentationReferenceSerializer
from .models import DocumentationReference


class ListDocumentationReference(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = DocumentationReferenceSerializer
    queryset = DocumentationReference.objects.all()
    def get_queryset(self):
        team = self.request.user.team
        if not team.project:
            return DocumentationReference.objects.all() 
        else:
            return DocumentationReference.objects.filter(category=team.project.pk)

    
class DetailDocumentationReference(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = DocumentationReferenceSerializer
    queryset = DocumentationReference.objects.all()

