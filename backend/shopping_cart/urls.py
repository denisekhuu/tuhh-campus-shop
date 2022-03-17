from django.urls import path
from .models import *
from .serializers import *

from .views import *

urlpatterns = [
    # ex: /polls/
    path('shopping_cart/', get_shopping_cart_by),
    #path('shopping_cart/<int:id>', get_shopping_cart_by), #Denise
    path('shopping_cart/price/', getPrice), #Denise
    path('shopping_cart/add/', addToShoppingCart),
    path('shopping_cart/delete/', deleteFromShoppingCart),
]