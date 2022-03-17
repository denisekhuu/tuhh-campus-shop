from django.db import models
from user_management.models import UserProfile
from product_management.models import Product

def add_product(userID, productID):
    return UserWishlist.wishlist_default_manager.using('user').create(user = UserProfile.user_manager.using('user').filter(user_id = userID).first(), product = Product.product_default_manager.filter(product_id = productID).first())


class UserWishlist(models.Model):
    user = models.OneToOneField('user_management.UserProfile', models.DO_NOTHING, db_column='user_ID', primary_key=True)  # Field name made lowercase.
    product = models.ForeignKey('product_management.Product', models.DO_NOTHING, db_column='product_ID')  # Field name made lowercase.
    wishlist_default_manager = models.Manager()
    def Get_Price(self):
        return self.product
    class Meta:
        db_table = 'user_wishlist'
        unique_together = (('user', 'product'),)
#Original from Andrei and Denise, copied and adapted by Julius
def add_product(userID, productID):
    return UserWishlist.wishlist_default_manager.using('user').create(user = UserProfile.user_manager.using('user').filter(user_id = userID).first(), product = Product.product_default_manager.filter(product_id = productID).first())


def delete_product(userID, productID):
    return UserWishlist.wishlist_default_manager.using('user').filter(user = UserProfile.user_manager.using('user').filter(user_id = userID).first(), product = Product.product_default_manager.filter(product_id = productID).first()).delete()

def calculate_price(userID):

    user_wishlist_cart_set = UserWishlist.wishlist_default_manager.using('user').filter(user_id = userID).values_list('product_id', flat=True)

    sum = 0

    for prod in user_wishlist_cart_set:
        sum = sum + Product.product_default_manager.filter(product_id = prod).first().product_price

    return sum 