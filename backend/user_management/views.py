from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView

from product_management.models import Product
from .serializers import *
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework import status
from .models import UserProfile
from rest_framework.decorators import api_view
from django.template import loader
from django.http import HttpResponse
from product_management.models import Product
from login.token import Token

# Create your views here.
@api_view(['GET'])                      # Arne Julius
def user_display(request):   
    users = UserProfile.user_manager.all().using('user')         # Alle Produkte sollen ausgegeben werden
    serializer = User_serializer(users, many=True)  
    return Response(serializer.data)




#userdata= UserProfile.user_manager.using('user').filter(user_id='1')
     


@api_view(['POST'])
def UserProfile_Update(request):
     user= Token.get_user_from_token(request.data['token'])
     serializer = UserProfile_serializer(instance=user,data=request.data)
     if serializer.is_valid():
         serializer.save()
   
     return Response(serializer.data)                   #Arne

 
 

@api_view(['POST'])                                      ### Arne
def UserProfile_Display(request):
     userdata= Token.get_user_from_token(request.data['token'])
     serializer = UserProfile_serializer(userdata)     
     return Response(serializer.data)



