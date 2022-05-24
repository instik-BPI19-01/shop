from rest_framework import serializers

from modules.core.serializers import UserSerializer
from modules.store.models import Category, Product, News, Cart, CartItem


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = "__all__"


class ProductCartSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        exclude = ["count"]


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = "__all__"


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = CartItem
        fields = [
            "product",
            "count"
        ]


class CartSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    items = CartItemSerializer(many=True)
    full_cost = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        fields = [
            "user",
            "items",
            "full_cost",
        ]

    def get_full_cost(self, obj: Cart) -> int:
        full_cost = 0
        for item in obj.items.all():
            full_cost += item.product.cost * item.count

        return full_cost
