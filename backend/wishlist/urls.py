from django.urls import path
from django.urls.resolvers import URLPattern
from wishlist.views import *

urlpatterns = [
    path('', get_wishlist),
    path('price/', getPrice), #Denise
    path('add/', addToWishlist),
    path('delete/', deleteFromWishlist),
]