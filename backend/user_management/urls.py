from django.urls import path
from .models import *
from .serializers import *

from .views import *

urlpatterns = [
    # ex: /polls/
    path('users/', user_display),
    path('profile/update/', UserProfile_Update),
    path('profile/', UserProfile_Display),

]