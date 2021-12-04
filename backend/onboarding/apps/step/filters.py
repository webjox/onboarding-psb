import django_filters
from .models import Step

class StepFilter(django_filters.FilterSet):
    is_passed = django_filters.BooleanFilter()

    class Meta:
        model = Step
        fields = ['is_passed',]
