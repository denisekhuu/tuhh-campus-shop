from django.shortcuts import render
from datetime import date
import imp
from itertools import product
from django.shortcuts import render
from django.db.models import Prefetch
from django.contrib import messages
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.template import loader
from django.http import HttpResponse

from shopping_cart.views import getPrice
from product_management.models import Product
from login.token import Token
import json
from shopping_cart.models import calculate_price
# Create your views here.
@api_view(['POST'])
def payment_display(request):
    print("Sylvester Stallone")
    try:
        userid = Token.get_user_from_token(request.data['token']).user_id
        price = calculate_price(userid)
        print("Price: ", price)
        return render(request,'tuhh_campus_shop/payment.html', {"price": price})
    except:
        return Response({'status': status.HTTP_410_GONE})
