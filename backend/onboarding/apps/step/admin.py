from django.contrib import admin
from django import forms
from ckeditor.widgets import CKEditorWidget
from django.db.models import fields
from .models import Step

class PostAdminForm(forms.ModelForm):
    training_data = forms.CharField(widget=CKEditorWidget(), help_text="Данные для обучения", required=False)
    class Meta:
        model = Step
        fields = "__all__"

class StepAdmin(admin.ModelAdmin):
    form = PostAdminForm

admin.site.register(Step, StepAdmin)