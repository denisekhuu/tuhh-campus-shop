from django.utils.crypto import constant_time_compare, salted_hmac
from datetime import timedelta as td, datetime as dt
from user_management.models import UserProfile

class Token(): #Julius
    def generate_token(userPassword, userEmail, timeToLive = 15):
        salt = "django.contrib.auth.tokens.PasswordResetTokenGenerator"
        timeToLive = td(minutes = timeToLive)
        time = dt.now()+timeToLive
        token = str(salted_hmac(salt, str(userEmail+userPassword)).hexdigest()+dt.strftime(time, '%d/%b/%Y %H-%M'))
        return token

    def check_token(token):
        try:
            usertoken = UserProfile.user_manager.using('user').filter(user_token=token).first().user_token
        except:
            return False
        if dt.strptime(usertoken[-17:], '%d/%b/%Y %H-%M') < dt.now():
            return False
        return True

    def get_user_from_token(token):
        try:
            usertoken = UserProfile.user_manager.using('user').filter(user_token=token).first().user_token
        except:
            return None
        if dt.strptime(usertoken[-17:], '%d/%b/%Y %H-%M') < dt.now():
            return None
        return UserProfile.user_manager.using('user').filter(user_token=token).first()
