from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import DocumentationReferenceSerializer
from .models import DocumentationReference
from rest_framework import filters

class ListDocumentationReference(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = DocumentationReferenceSerializer
    queryset = DocumentationReference.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'short_description']
    def get_queryset(self):
        team = self.request.user.team
        return DocumentationReference.objects.all()
        #if not team.project:
        #    return DocumentationReference.objects.all() 
        #else:
        #    return DocumentationReference.objects.filter(category=team.project.pk)

    
class DetailDocumentationReference(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = DocumentationReferenceSerializer
    queryset = DocumentationReference.objects.all()

