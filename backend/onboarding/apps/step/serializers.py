from rest_framework import serializers
from .models import Step

class StepSerializers(serializers.ModelSerializer):
    class Meta:
        model = Step
        fields = "__all__"



