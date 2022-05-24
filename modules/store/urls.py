from django.urls import path, include
from rest_framework.routers import DefaultRouter
from modules.store.api import CategoryApi, ProductApi, NewsApi, CartApi

router = DefaultRouter()
router.register("categories", CategoryApi, basename="categories")
router.register("products", ProductApi, basename="products")
router.register("news", NewsApi, basename="news")
router.register("cart", CartApi, basename="cart")

urlpatterns = [
    path('', include(router.urls)),
]
