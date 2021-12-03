from rest_framework import serializers
from .models import Test, Question, AnswerOption


class AnswerOptionSerializers(serializers.ModelSerializer):
    class Meta:
        model = AnswerOption
        fields = ("id", "answer")


class QuestionSerializers(serializers.ModelSerializer):
    answer_option = AnswerOptionSerializers(many=True)
    class Meta:
        model = Question
        fields = "__all__"


class TestSerializers(serializers.ModelSerializer):
    questions = QuestionSerializers(many=True)
    class Meta:
        model = Test
        fields = "__all__"
