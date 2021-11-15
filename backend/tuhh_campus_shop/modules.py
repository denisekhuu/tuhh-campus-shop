class ProductQuerySet(models.QuerySet):

#### Yossef
    def Get_Product_Description(self, product_ID):
        return self.filter(pk=product_ID).first().product_Description
        
    def Get_Product_Picture_Path(self, product_ID):
        return self.filter(pk=product_ID).first().picture_Path 
####
