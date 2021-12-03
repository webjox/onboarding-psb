from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer
from .models import User


class ListUser(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.filter(is_superuser=False)

    
class DetailUser(RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()

class DetailMe(APIView):
    def get(self, request):
        user = request.user
        user_data = UserSerializer(user).data
        return Response(data=user_data, status=status.HTTP_200_OK)