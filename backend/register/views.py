from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from user_management.models import UserProfile
from rest_framework.decorators import api_view
from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from user_management.models import UserManager


# Create your views here.


class registerView(APIView): #Julius
    def post(self, request, *args, **kwargs):
        if UserProfile.user_manager.using('user').filter(user_email=request.data['email']).first() is not None:
            return Response({'status': status.HTTP_412_PRECONDITION_FAILED, 'message': "Email address is already taken!"}) #Wenn die Emailadresse schon vergeben wurde
        if len(request.data['password']) < 8:
            return Response({'status': status.HTTP_412_PRECONDITION_FAILED, 'message':"Password is to short!"}) #Wenn das password zu kurz ist.
        try:
            user = UserManager.Add_User(user_password=request.data['password'], user_name=request.data['username'], user_email=request.data['email'], user_bank_info=request.data['bank_info'], user_phone_number=request.data['phone_number'])
            return Response({'status': status.HTTP_200_OK})
        except:
            return Response({'status': status.HTTP_400_BAD_REQUEST, 'message':"User could not get created"})
