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