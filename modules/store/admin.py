from django.contrib import admin

from modules.store.models import Category, Product, News


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["title"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["title", "count", "cost"]
    list_filter = ["category"]


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ["title"]
