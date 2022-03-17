from django.urls import path
from .models import Product
from .views import catalog_productpage
from . import views

from . import views

urlpatterns = [
    # ex: /polls/

    path('', views.catalog_display, name='malsehentest'),
    path('catalog/<int:id>',views.detail,name='detail'),  
    path('catalog/', views.catalog_display, name='malsehentest'),
    #path('product/<str:pk>',views.catalog_productpage)

]