from rest_framework import fields, serializers
from wishlist.models import UserWishlist
from product_management.models import Product

class Wishlist_Serializer(serializers.ModelSerializer):
    class Meta:
        model = UserWishlist
        fields = ["user_id", 'product_id']
        
        
class Product_serializer(serializers.ModelSerializer): #Denise
    class Meta:
        model = Product
        fields = '__all__'    