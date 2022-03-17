from django.shortcuts import render
from rest_framework.views import APIView
from product_management.serializers import *
from rest_framework.response import Response
from rest_framework import status
from product_management.models import Product
from rest_framework.decorators import api_view
from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from .filter import *


# Create your views here.
class ProductView(generics.ListCreateAPIView):
    queryset = Product.product_manager.all()
    serializer_class = Product_serializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_class = ProductFilter
    search_fields = ['$product_specifications', '$product_name']
