from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

from .serializer import *

from .models import *
# Create your views here.



@api_view(["GET"])
def urun_gonder(request):

    urunler = Menu.objects.all()
    serialize = Urunler(urunler, many = True)
    
    return Response(serialize.data)


@api_view(["GET"])
def kategori_gonder(request):

    kategoriler = Kategori.objects.all()
    serialize = Kategoriler(kategoriler, many = True)

    return Response(serialize.data)


