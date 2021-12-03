from rest_framework import serializers
from .models import DocumentationReference


class DocumentationReferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentationReference
        fields = "__all__"


