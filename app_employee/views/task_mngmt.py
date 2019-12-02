from django.shortcuts import render
from django.http import HttpResponse, Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions, generics
from app_employee.models import *
from app_employee.serializers import *


def tasks_list(request):
    return render(request,'tasks.html')


def task_create(request):
    return render(request,'task-create.html')


def task_details(request, pk):
    return render(request,'task-details.html')


class taskListAPIView(APIView):
    queryset = Task.objects.all()
    serializer_class = TaskListSerializer

class taskDetailAPIView(generics.RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class taskUpdateAPIView(generics.UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class taskDestroyAPIView(generics.DestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class taskCreateAPIView(generics.CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer