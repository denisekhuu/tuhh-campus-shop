from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserProfile

""" Auskommentiert, wird später evtl. noch benötigt
class Catalog_request(serializers.Serializer):              ##### Arne Julius
    class Meta:
        model = ProductQuerySet
        fields = '__all__'
""" 

class User_serializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'                                  ##### Arne Julius


class UserProfile_serializer(serializers.ModelSerializer):          #Arne
    class Meta:
        model=UserProfile
        fields = ['user_name','user_email','user_address','user_phone_number',
                  'user_bank_info']



'''
class Shoppin_cart__serializer(serializers.ModelSerializer):
    class Meta:
        model = UserManagementUserprofileUserShoppingCartTest
        fields = '__all__'                                  ##### Arne Julius
'''

class Login_serializer(serializers.Serializer):
    class Meta:
        model = UserProfile
        email = serializers.CharField(max_length=255)
        password = serializers.CharField(max_length=255, write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
         
        if email and password:
            user = authenticate(request=self.context.get('request'), username=email, password=password)
            if not user:
                raise serializers.ValidationError('Login was not successfull', code='authentication')
        else:
            raise serializers.ValidationError('Login was not successfull', code='authentication')
        data['user'] = user
        return data