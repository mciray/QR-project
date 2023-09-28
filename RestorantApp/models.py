from django.db import models

# Create your models here.

class Kategori(models.Model):
    isim = models.CharField(("Kategori Adı"), max_length=50)
    resim = models.ImageField(("Kategori Resmi"), upload_to="kategori", height_field=None, width_field=None, max_length=None)

    def __str__(self) -> str:
        return self.isim

class Menu(models.Model):
    isim = models.CharField(("Ürün İsmi"), max_length=50)
    aciklamasi = models.CharField(("Ürün Açıklaması"), max_length=50)
    fiyat = models.IntegerField(("Ürün Fiyatı"))
    urunResmi = models.ImageField(("Ürün İsmi"), upload_to="menu", height_field=None, width_field=None, max_length=None)
    kategori = models.ForeignKey(Kategori, verbose_name=("Ürün Kategorisi"), on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.isim