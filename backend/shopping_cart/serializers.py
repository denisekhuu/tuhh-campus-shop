from rest_framework import serializers
from .models import UserShoppingcart
from product_management.models import Product


class Product_serializer(serializers.ModelSerializer): #Denise
    class Meta:
        model = Product
        fields = '__all__'    

class ShoppingCart_serializer(serializers.ModelSerializer):
    class Meta:
        model = UserShoppingcart
        fields = ["user_id", "product_id"]
        
