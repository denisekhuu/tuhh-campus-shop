from django.db import models
from django.db.models.base import Model
from django.db.models.fields import CharField
from django_mysql.models import ListTextField
from django.db.models import TextField, CharField


##### Andrei
class ProductQuerySet(models.QuerySet):

    def Get_Product(self, productID):             
        return self.filter(product_id=productID).first()      

    def Get_Price(self, productID):             
        return self.filter(product_id=productID).first().product_price         

    def Get_Product_Stock(self, productID):             
        return self.filter(product_id=productID).first().product_stock    
#####

##### Yossef
    def Get_Product_Description(self, productID):
        return self.filter(product_id=productID).first().product_description
        
    def Get_Product_Picture_Path(self, productID):
        return self.filter(product_id=productID).first().picture_path 
#####

##### Lea
   
    def Get_Product_name(self, productID):
        return self.filter(product_id=productID).first().product_name
    '''
    def Add_Product(self, productStock, productName, productDescription, productPrice ):
        self.create(product_stock=productStock, product_name=productName , product_description=productDescription, product_price = productPrice)
    '''
   
#####

# don't forget 
class ProductManager(models.Manager):
    def Add_Product(self, productStock, productName, productDescription, productSpecs, picturePath, productPrice):
        self.create(product_stock=productStock, product_name=productName , product_description=productDescription, product_specifications=productSpecs, picture_path= picturePath, product_price = productPrice)
        return self.filter(product_stock=productStock, product_name=productName , product_description=productDescription, product_specifications=productSpecs, picture_path= picturePath, product_price = productPrice).first().product_id

    def Delete_Product(self, productID):
        try:
            self.get(product_id=productID).delete()
            return True
        except:
            return False 



# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.



class Product(models.Model):
    product_id = models.AutoField(db_column='product_ID', primary_key=True)  # Field name made lowercase.   ###### changed from unique to primary_key
    product_stock = models.PositiveIntegerField(db_column='product_Stock', blank=True, null=True)  # Field name made lowercase.
    product_name = models.TextField(db_column='product_Name', blank=True, null=True)  # Field name made lowercase.
    product_description = models.TextField(db_column='product_Description', blank=True, null=True)  # Field name made lowercase.
    product_specifications = models.TextField(db_column='product_Specifications', blank=True, null=True)  # Field name made lowercase.
    picture_path = models.TextField(db_column='picture_Path', blank=True, null=True)  # Field name made lowercase.
    product_price = models.DecimalField(db_column='product_Price', max_digits=30, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    product_reviews = models.PositiveIntegerField(db_column='product_Reviews', blank=True, null=True)  # Field name made lowercase.

    product_default_manager = models.Manager()
    product_manager = ProductManager()
    productQueryManager = ProductQuerySet.as_manager()

    class Meta:
        db_table = 'PRODUCT'
        #app_label = 'Product'
	

# Create your models here.
