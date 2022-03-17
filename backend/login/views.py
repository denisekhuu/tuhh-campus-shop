from django.contrib.auth.models import update_last_login
from django.shortcuts import redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework import status
from user_management.models import UserProfile
from rest_framework.decorators import api_view
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from django_filters import FilterSet, NumberFilter

class loginView(APIView): #Julius
    def post(self, request, *args, **kwargs):
        serializer = Login_serializer(data=request.data, context={'request':request})
        user= serializer.validate(data=request.data, request=request)
        return Response({'status': status.HTTP_200_OK, 'Token': user['token']})
