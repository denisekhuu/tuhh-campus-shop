from django.contrib.auth.models import User
from rest_framework import fields, serializers
from .login import SettingsBackend
from user_management.models import UserProfile
from .token import Token

        

class Login_serializer(serializers.Serializer): #Julius+Andrei
    class Meta:
        model = UserProfile
        email = serializers.CharField(max_length=255, required=False)
        password = serializers.CharField(max_length=255, write_only=True, required=False)

    def validate(self, data, request):
        try:
            if data['token']:
                if Token.check_token(data['token']):
                    #print("\nWow!!!\n")
                    return data
        except:
            pass
        
        email = data['email']
        password = data['password']
        if email and password:
            #print(request)
            user = SettingsBackend.authenticate(username=email, password=password)
            #print("\n\n\nErfolg!\n\n\n")
            if not user:
                raise serializers.ValidationError('Login was not successfull', code='authentication')
        else:
            raise serializers.ValidationError('Login was not successfull', code='authentication')
        data['user'] = user
        token = Token.generate_token(userPassword=password, userEmail=email)
        UserProfile.user_manager.using('user').filter(user_email=email).update(user_token=token) #Token in Datenbank speichern/aktualisieren
        data['token'] = token
        return data
