from django.urls import path, include
from rest_framework.routers import DefaultRouter
from modules.store.api import CategoryApi, ProductApi, NewsApi

router = DefaultRouter()
router.register("categories", CategoryApi, basename="categories")
router.register("products", ProductApi, basename="products")
router.register("news", NewsApi, basename="news")

urlpatterns = [
    path('', include(router.urls)),
]
