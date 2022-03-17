from django.http.response import HttpResponseForbidden
from django.shortcuts import render
from wishlist.serializers import Wishlist_Serializer
from wishlist.models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
from login.token import Token
from rest_framework import status
from .serializers import *
#copied and adapted by Julius
@api_view(['POST']) 
def get_wishlist(request):   #Denise
    try:
        userid = Token.get_user_from_token(request.data['token']).user_id
        products = []
        user_wishlist_set = UserWishlist.wishlist_default_manager.using('user').filter(user_id = userid).values_list('product_id', flat=True)
        for prod in user_wishlist_set:
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
def addToWishlist(request): #Julius
    try:
        userid = Token.get_user_from_token(request.data['token']).user_id
        productid = request.data['product_id']
        add_product(userid, productid)
        return Response({'status': status.HTTP_200_OK})
    except:
        return Response({'status': status.HTTP_403_FORBIDDEN})

@api_view(['POST'])
def deleteFromWishlist(request): #Julius
    try:
        userid = Token.get_user_from_token(request.data['token']).user_id
        productid = request.data['product_id']
        delete_product(userid, productid)
        return Response({'status': status.HTTP_200_OK})
    except:
        return Response({'status': status.HTTP_403_FORBIDDEN})