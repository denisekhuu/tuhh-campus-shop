from itertools import product
from django.db import models
from user_management.models import UserProfile
from product_management.models import Product
from django_filters import FilterSet, NumberFilter, CharFilter

# Create your models here.

'''class ShoppingCartQuerySet(models.QuerySet):

    def Get_Price(self, productID):             
        return self.filter(product_id=productID).first().product_price         

    def Get_Product_Stock(self, productID):             
        return self.filter(product_id=productID).first().product_stock    

    def Get_Product_Description(self, productID):
        return self.filter(product_id=productID).first().product_description
        
    def Get_Product_Picture_Path(self, productID):
        return self.filter(product_id=productID).first().picture_path 
   
    def Get_Product_name(self, productID):
        return self.filter(product_id=productID).first().product_name'''

class UserShoppingcart(models.Model):
    user = models.OneToOneField('user_management.UserProfile', models.DO_NOTHING, db_column='user_ID', primary_key = True)  # Field name made lowercase.
    product = models.ForeignKey('product_management.Product', models.DO_NOTHING, db_column='product_ID', related_name="products")  # Field name made lowercase.

    def Get_Price(self):
        return self.product

    shopping_cart_default_manager = models.Manager()

    class Meta:
        db_table = 'user_shoppingcart'
        unique_together = (('user', 'product'))

#Andrei

def add_product(userID, productID):
    return UserShoppingcart.shopping_cart_default_manager.using('user').create(user = UserProfile.user_manager.using('user').filter(user_id = userID).first(), product = Product.product_default_manager.filter(product_id = productID).first())


def delete_product(userID, productID):
    return UserShoppingcart.shopping_cart_default_manager.using('user').filter(user = UserProfile.user_manager.using('user').filter(user_id = userID).first(), product = Product.product_default_manager.filter(product_id = productID).first()).delete()

def calculate_price(userID):

    user_shopping_cart_set = UserShoppingcart.shopping_cart_default_manager.using('user').filter(user_id = userID).values_list('product_id', flat=True)

    sum = 0

    for prod in user_shopping_cart_set:
        sum = sum + Product.product_default_manager.filter(product_id = prod).first().product_price

    return sum 

	