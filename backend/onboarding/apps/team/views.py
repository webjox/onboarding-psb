from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import TeamSerializer
from .models import Team


class ListTeam(ListCreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = TeamSerializer
    queryset = Team.objects.all()

    
class DetailTeam(RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    serializer_class = TeamSerializer
    queryset = Team.objects.all()

