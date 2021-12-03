from rest_framework import serializers
from .models import Team, Project
from ..account.serializers import UserSerializer

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class TeamSerializer(serializers.ModelSerializer):
    project = ProjectSerializer()
    users = UserSerializer(many=True)
    class Meta:
        model = Team
        fields = "__all__"
