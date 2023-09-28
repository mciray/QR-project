from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect

from .serializer import *

from .models import *
# Create your views here.

@api_view(["POST"])
def kayit(request):
    
    print("Gelen veri",request.data)

    userModeli = Kullanici(data = request.data)
    user = User.objects.filter(username = request.data['username']).first()

    if userModeli.is_valid():
        if user:
            return Response({'message':'Böyle bir kullanıcı bulunmaktadır.'})
        userModeli.save()
        return redirect('http://localhost:3000/login')
    else:
        print("form errors:", userModeli.errors)
        return Response({"message": "bir hata meydana geldi"})


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


