from django.shortcuts import render
from django.http import HttpResponse, Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics, permissions
from django.contrib.auth.models import User
from django.contrib.auth import login
from app_admin.serializers import *

def login_page(request):
    return render(request,'login.html')

def signup_page(request):
    return render(request,'register.html')


class userCreate(APIView):
    def post(self, request):
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)


# class userCreate(generics.CreateAPIView):
#     users = User.objects.all()
#     serializer_class = UserCreateSerializer
    
class UserLogin(APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserLoginSerializer
    
    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=Http404)