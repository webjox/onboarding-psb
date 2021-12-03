from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import DestroyAPIView, ListAPIView, GenericAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import StepSerializers, PasssedUserStepSerializers
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
        print(user.number_test_scores)
        user.number_test_scores += step.test.count_score_success
        user.save()
        data = {"OK":"OK"}
        status_code = status.HTTP_200_OK
        return Response(data=data, status=status_code)

class DeteleUserStep(APIView):
    def post(self, request, *args, **kwagrs):
        data_req = request.data
        user = request.user
        id = data_req.get("id")
        passed_user_step = PasssedUserStep.objects.filter(pk=id).first()
        score = passed_user_step.score
        passed_user_step.delete()
        user.number_test_scores -= score
        user.save()
        return Response()



class PassedUserSteps(ListAPIView):
    serializer_class = PasssedUserStepSerializers
    def get_queryset(self):
        queryset = PasssedUserStep.objects.filter(user=self.request.user)
        return queryset