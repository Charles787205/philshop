from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=400)
    date_uploaded = models.DateField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="product_image/")
