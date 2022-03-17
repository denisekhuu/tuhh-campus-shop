from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product

class Product_serializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'                                  ##### Arne Julius

