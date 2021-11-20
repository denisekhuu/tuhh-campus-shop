from django.shortcuts import redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from rest_framework.parsers import JSONParser
from .serializers import Product_serializer
from rest_framework.response import Response
from .models import Product

import io
from rest_framework.decorators import api_view

""" Wird später evtl. noch benötigt
@api_view(['POST'])
def catalog_addproduct(request):                # Arne Julius
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    serializer = Catalog_request(data=python_data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
""" 
@api_view(['GET'])                      # Arne Julius
def catalog_display(request):   
    products= Product.product_manager.all()         # Alle Produkte sollen ausgegeben werden
    serializer = Product_serializer(products, many=True)  
    return Response(serializer.data)
