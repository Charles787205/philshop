from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from .models import *


class ProductView(APIView):
    query_set = Product.objects.all()
    serializer_class = ProductSerializer
