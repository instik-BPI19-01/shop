from rest_framework import viewsets

from modules.store.filters import ProductFilter
from modules.store.models import Category, Product, News
from modules.store.serializers import CategorySerializer, ProductSerializer, NewsSerializer


class CategoryApi(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductApi(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_class = ProductFilter


class NewsApi(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
