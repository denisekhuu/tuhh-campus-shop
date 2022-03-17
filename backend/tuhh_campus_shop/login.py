from django.conf import settings
from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from .models import UserProfile
from django.utils.crypto import constant_time_compare, salted_hmac


class SettingsBackend(BaseBackend): #julius
    def authenticate(username=None, password=None):
        userdata = UserProfile.user_manager.using('user').filter(user_email=username).first()
        #print(userdata)
        if userdata.user_password == password:
            return userdata
        else:
            return None

def checkPassword(user_email, password): #Julius
    refPasswd = UserProfile.user_manager.using('user').filter(user_email=user_email).first().user_password
    salt = "django.contrib.auth.tokens.PasswordResetTokenGenerator"
    password = str(salted_hmac(salt, str(password)).hexdigest())
    return password == refPasswd
    
def hash(password): #Julius
    salt = "django.contrib.auth.tokens.PasswordResetTokenGenerator"
    password = str(salted_hmac(salt, str(password)).hexdigest())
    return password