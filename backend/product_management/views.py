
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework import status
from .models import Product
from rest_framework.decorators import api_view
from django.template import loader
from django.http import HttpResponse

# Create your views here.

@api_view(['GET'])                      # Arne Julius
def catalog_display(request):   
    products= Product.product_default_manager.all()    # Alle Produkte sollen ausgegeben werden
    serializer = Product_serializer(products, many=True)  
    return Response(serializer.data)


@api_view(['GET'])   #Denise
def detail(request, id):
    product=Product.product_default_manager.get(product_id=id)
    serializer = Product_serializer(product) 
    return Response(serializer.data)

@api_view(['Get'])                                             #Arne
def catalog_productpage(request,pk):
    product= Product.product_manager.filter(product_id=pk).first()
    serializer=Product_serializer(product)
    return Response (serializer.data)

