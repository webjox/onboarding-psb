from rest_framework import serializers
from .models import Step, PasssedUserStep

class StepSerializers(serializers.ModelSerializer):
    class Meta:
        model = Step
        fields = "__all__"


class PasssedUserStepSerializers(serializers.ModelSerializer):
    class Meta:
        model = PasssedUserStep
        fields = "__all__"