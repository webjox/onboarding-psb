from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import StepSerializers
from .models import Step, PasssedUserStep


class ListStep(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = StepSerializers
    queryset = Step.objects.all()

    
class DetailStep(RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = StepSerializers
    queryset = Step.objects.all()

class SendAnswer(APIView):
    def post(self, request, *args, **kwargs):
        data_req = request.data
        user = request.user
        id_step = data_req.get("id_step")
        step = Step.objects.filter(pk=id_step).first()
        
        PasssedUserStep.objects.create(user=user, step=step, score=step.test.count_score_success)

        data = {"OK":"OK"}
        status_code = status.HTTP_200_OK
        return Response(data=data, status=status_code)