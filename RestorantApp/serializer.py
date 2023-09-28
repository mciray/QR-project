from django.contrib.auth.models import User
from .models import *
from rest_framework.serializers import ModelSerializer

class Kategoriler(ModelSerializer):

    class Meta:
        model = Kategori
        fields = "__all__"


class Urunler(ModelSerializer):

    class Meta:
        model = Menu
        fields = "__all__"


class Kullanici(ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'password', 'email']