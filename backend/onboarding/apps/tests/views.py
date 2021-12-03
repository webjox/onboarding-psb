from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Test, Question, AnswerOption
from .serializers import TestSerializers, QuestionSerializers, AnswerOptionSerializers

class ListTest(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = TestSerializers
    queryset = Test.objects.all()

    
class DetailTest(RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = TestSerializers
    queryset = Test.objects.all()


class ListQuestion(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = QuestionSerializers
    queryset = Question.objects.all()

    
class DetailQuestion(RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = QuestionSerializers
    queryset = Question.objects.all()


class ListAnswerOption(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = AnswerOptionSerializers
    queryset = AnswerOption.objects.all()

    
class DetailAnswerOption(RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = AnswerOptionSerializers
    queryset = AnswerOption.objects.all()


