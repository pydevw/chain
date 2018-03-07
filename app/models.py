from django.db import models

# Create your models here.


class Person(models.Model):
    OFFERS = (
        ('1', 'Vreau Un Set - 2 Perechi - 99 RON'),
        ('2', 'Vreau Două Seturi - 178 RON'),
        ('3', 'Vreau Trei Seturi - 257 RON'),
    )

    nume = models.CharField(max_length=30, null=True)
    adresa = models.CharField(max_length=30, null=True)
    localitate = models.CharField(max_length=30, null=True)
    judet = models.CharField(max_length=30, null=True)
    email = models.CharField(max_length=40, null=True)
    telefon = models.IntegerField(max_length=12, null=True)
    oferta = models.CharField(max_length=1, choices=OFFERS, null=True)
    created = models.DateTimeField('created date', null=True)
