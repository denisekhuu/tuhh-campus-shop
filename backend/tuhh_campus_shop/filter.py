from django_filters import FilterSet, NumberFilter, CharFilter
from .models import Product

class ProductFilter(FilterSet):
    product_price = NumberFilter()
    product_price__gte = NumberFilter(field_name='product_price', lookup_expr='gt')
    product_price__lte = NumberFilter(field_name='product_price', lookup_expr='lt')
    product_specification__contains = CharFilter(field_name='product_specifications', lookup_expr='contains')

    class Meta:
        model = Product
        fields = ['product_price', 'product_stock', 'product_specifications']
