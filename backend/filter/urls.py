from django.contrib import admin
from django.urls import path
from django.urls.resolvers import URLPattern
from .views import *


urlpatterns = [
    path('', ProductView.as_view())
]   