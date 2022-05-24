from django.contrib.auth.models import User
from django.db import transaction
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response

from modules.store.filters import ProductFilter
from modules.store.models import Category, Product, News, CartItem, Cart
from modules.store.serializers import CategorySerializer, ProductSerializer, NewsSerializer, CartSerializer


class CategoryApi(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CartApi(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def get_object(self, request: Request) -> Cart:
        try:
            cart = Cart.objects.get(user=request.user)
        except Cart.DoesNotExist:
            cart = Cart.objects.create(user=request.user)
        return cart

    def list(self, request: Request):
        return Response(CartSerializer(self.get_object(request)).data)

    @action(detail=False, methods=["get"])
    def clear(self, request: Request):
        cart = self.get_object(request)
        cart.items.all().delete()
        return Response(status=status.HTTP_200_OK)

    @action(detail=False, methods=["get"])
    def buy(self, request: Request):
        cart = self.get_object(request)
        for item in cart.items.all():
            if item.count > item.product.count:
                return Response(f"На складе не хватает товара {str(item.product)}", status=status.HTTP_400_BAD_REQUEST)

        for item in cart.items.all():
            item.product.count -= item.count
            item.product.save()
        cart.items.all().delete()
        return Response(status=status.HTTP_200_OK)


class ProductApi(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_class = ProductFilter

    @action(detail=True, methods=["post"], permission_classes=[IsAuthenticated], url_path="add-to-cart")
    def add_to_cart(self, request: Request, pk: int):
        count: int = request.data.get("count")
        try:
            product = Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            return Response(status=404)

        if count > product.count:
            return Response("На складе недостаточно товара", status=status.HTTP_400_BAD_REQUEST)

        user: User = request.user
        user.cart.items.add(
            CartItem(cart=user.cart, product=product, count=count), bulk=False
        )

        return Response(status=status.HTTP_201_CREATED)


class NewsApi(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = News.objects.all()
    serializer_class = NewsSerializer
