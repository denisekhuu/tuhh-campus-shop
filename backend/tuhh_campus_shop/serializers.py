from rest_framework import serializers
from .models import *

""" Auskommentiert, wird später evtl. noch benötigt
class Catalog_request(serializers.Serializer):              ##### Arne Julius
    class Meta:
        model = ProductQuerySet
        fields = '__all__'
""" 
class Product_serializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'                                  ##### Arne Julius