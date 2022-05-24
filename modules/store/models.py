from django.contrib.auth.models import User
from django.db import models


class Category(models.Model):
    title = models.CharField(
        max_length=255,
        verbose_name="Название",
    )
    image = models.ImageField(
        verbose_name="Картинка",
        null=True,
        blank=True
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class Product(models.Model):
    category = models.ForeignKey(
        to="store.Category",
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        verbose_name="Категория"
    )
    title = models.CharField(
        max_length=255,
        verbose_name="Название",
    )
    description = models.TextField(
        verbose_name="Описание"
    )
    count = models.PositiveIntegerField(
        default=0,
        verbose_name="Количество",
    )
    cost = models.PositiveIntegerField(
        verbose_name="Цена"
    )
    image = models.ImageField(
        verbose_name="Картинка",
        null=True,
        blank=True
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"


class News(models.Model):
    title = models.CharField(
        max_length=255,
        verbose_name="Название",
    )
    description = models.TextField(
        verbose_name="Описание"
    )
    image = models.ImageField(
        verbose_name="Картинка",
        null=True,
        blank=True
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"


class CartItem(models.Model):
    cart = models.ForeignKey(
        to="store.Cart",
        on_delete=models.CASCADE,
        verbose_name="Корзина",
        related_name="items"
    )
    product = models.ForeignKey(
        to="store.Product",
        on_delete=models.CASCADE,
        verbose_name="Продукт"
    )
    count = models.BigIntegerField(
        verbose_name="Количество"
    )

    def __str__(self):
        return f"{str(self.product)} | {str(self.cart)}"


class Cart(models.Model):
    user = models.OneToOneField(
        to=User,
        on_delete=models.CASCADE,
        related_name="cart",
        verbose_name="Пользователь"
    )

    def __str__(self):
        return str(self.user)

    class Meta:
        verbose_name = "Корзина пользователя"
        verbose_name_plural = "Корзины пользователей"
