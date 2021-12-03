from django.contrib import admin
from django.db import models
from .models import Question, Test, AnswerOption
from django import forms
from ckeditor.widgets import CKEditorWidget
from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin
    
class PostAdminForm(forms.ModelForm):
    question = forms.CharField(widget=CKEditorWidget(), help_text="Данные для обучения")
    class Meta:
        model = Question
        fields = "__all__"

class QuestionAdmin(admin.ModelAdmin):
    form = PostAdminForm
    filter_horizontal = ('answer_option',)
    fieldsets = (
        (None, {'fields': ('question', 'input_file', 'radio_button', 'treasure', 'many_answer', 'answer_option',)}),
        )
    add_fieldsets = (
        (None, {'fields': ('question', 'input_file', 'radio_button', 'treasure', 'many_answer', 'answer_option',)}),
        )

class TestAdmin(admin.ModelAdmin):
    filter_horizontal = ('questions',)
    fieldsets = (
        (None, {'fields': ('name', 'questions', 'count_score_success', 'count_question_for_access')}),
        )
    add_fieldsets = (
        (None, {'fields': ('name', 'questions', 'count_score_success', 'count_question_for_access')}),
        )





admin.site.register(Question, QuestionAdmin)
admin.site.register(Test, TestAdmin)
admin.site.register(AnswerOption)
