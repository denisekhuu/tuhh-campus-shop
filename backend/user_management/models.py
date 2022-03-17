from django.contrib import admin

# Register your models here.
from django.db import models
from django.db.models.base import Model
from django.db.models.fields import CharField
from django_mysql.models import ListTextField
from django.db.models import TextField, CharField
from product_management.models import Product



class UserManager(models.Manager): 
    
    # Andrei+Julius
    def Add_User(user_password, user_name, user_email, user_phone_number, user_bank_info):
        return UserProfile.user_manager.using('user').create(user_password=user_password, user_name=user_name, user_email=user_email, user_phone_number=user_phone_number, user_bank_info=user_bank_info)
    
    # Julius
    def Delete_User(self, user_email):
        try:
            self.using('user').get(user_email=user_email).delete()
            return True
        except:
            return False



class UserProfile(models.Model):
    user_id = models.AutoField(db_column='user_ID', primary_key=True)  # Field name made lowercase.
    user_is_admin = models.IntegerField(db_column='user_Is_Admin', blank=True, null=True)  # Field name made lowercase.
    user_password = models.TextField(db_column='user_Password', blank=True, null=True)  # Field name made lowercase.
    user_name = models.TextField(db_column='user_Name', blank=True, null=True)  # Field name made lowercase.
    user_address = models.TextField(db_column='user_Address', blank=True, null=True)  # Field name made lowercase.
    user_email = models.TextField(db_column='user_Email', blank=True, null=True)  # Field name made lowercase.
    user_phone_number = models.TextField(db_column='user_Phone_Number', blank=True, null=True)  # Field name made lowercase.
    user_bank_info = models.TextField(db_column='user_Bank_Info', blank=True, null=True)  # Field name made lowercase.
    #user_shopping_cart = models.TextField(db_column='user_Shopping_Cart', db_collation='utf8mb4_bin', blank=True, null=True)  # Field name made lowercase.
    #user_wishlist = models.TextField(db_column='user_Wishlist', db_collation='utf8mb4_bin', blank=True, null=True)  # Field name made lowercase.
    user_history = models.TextField(db_column='user_History', db_collation='utf8mb4_bin', blank=True, null=True)  # Field name made lowercase.
    user_reviews = models.TextField(db_column='user_Reviews', db_collation='utf8mb4_bin', blank=True, null=True)  # Field name made lowercase.
    user_token = models.TextField(db_column='user_Token', blank=True, null=True)  # Field name made lowercase.

    user_manager = models.Manager()

    class Meta:
        db_table = 'user_profile'
        #app_label = 'UserProfile'