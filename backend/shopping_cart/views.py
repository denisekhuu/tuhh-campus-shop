from datetime import date
import imp
from itertools import product
from django.shortcuts import render
from django.db.models import Prefetch
from django.contrib import messages
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView

from .serializers import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.template import loader
from django.http import HttpResponse
from .models import UserShoppingcart, add_product, calculate_price, delete_product
from product_management.models import Product
from login.token import Token
import json

# Create your views here.
'''
@api_view(['POST'])                      # Andrei Julius
def ShoppingCart_display(request):   
    try: #anzeigen der shoppingcart
        userid = Token.get_user_from_token(request.data['token']).user_id
        print(userid)
        da = UserShoppingcart.shopping_cart_default_manager.using('user').filter(user_id = userid).values_list('product_id', flat=True)   # Alle Produkte sollen ausgegeben werden
        serializer = ShoppingCart_serializer(da, many=True)  
        return Response(serializer.data)
    except:
        return Response({'status': status.HTTP_403_FORBIDDEN})
'''

@api_view(['POST']) 
def get_shopping_cart_by(request):   #Denise
    try:
        userid = Token.get_user_from_token(request.data['token']).user_id
        products = []
        user_shopping_cart_set = UserShoppingcart.shopping_cart_default_manager.using('user').filter(user_id = userid).values_list('product_id', flat=True)
        for prod in user_shopping_cart_set:
            products.append(Product.product_default_manager.get(product_id = prod))
        serializer = Product_serializer(products, many=True)  
        return Response(serializer.data)
    except:
        return Response({'status': status.HTTP_403_FORBIDDEN})


@api_view(['POST']) 
def getPrice(request):   #Andrei
    try:
        userid = Token.get_user_from_token(request.data['token']).user_id
        price = calculate_price(userid)
        return Response(price)
    except:
        return 0


@api_view(['POST'])
def addToShoppingCart(request): #Julius
    try:
        userid = Token.get_user_from_token(request.data['token']).user_id
        productid = request.data['product_id']
        add_product(userid, productid)
        return Response({'status': status.HTTP_200_OK})
    except:
        return Response({'status': status.HTTP_403_FORBIDDEN})

@api_view(['POST'])
def deleteFromShoppingCart(request): #Julius
    try:
        userid = Token.get_user_from_token(request.data['token']).user_id
        productid = request.data['product_id']
        delete_product(userid, productid)
        return Response({'status': status.HTTP_200_OK})
    except:
        return Response({'status': status.HTTP_403_FORBIDDEN})