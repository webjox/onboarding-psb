from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    photo = serializers.ImageField(use_url=True)
    class Meta:
        model = User
        fields = (
            "id",
            "name",
            "username",
            "team",
            'fuels',
            'rockets',
            "post",
            "role_in_team",
            "description",
            "photo",
            "stack",
            "number_test_scores"
            )
