from django.shortcuts import render, HttpResponse, HttpResponseRedirect
# Create your views here.

from .models import Person


def index(request):
    return render(request, template_name="index.html")

def create_order(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        adresa = request.POST.get('strada')
        localitate = request.POST.get('localitate')
        judet = request.POST.get('judet')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        nr_pachete = request.POST.get('nr_pachete')

        order = Person(nume=name, adresa=adresa, localitate=localitate, judet=judet, telefon=phone, email=email, oferta=nr_pachete)
        order.save()

        context = 'COMANDA A FOST TRIMISA'
        return render(request, 'index.html', {'context': context})

    else:
        context = 'COMANDA NU A PUTUT FI TRIMISA'
        return render(request, 'index.html', {'context': context})


def termeni(request):
    return render(request, template_name="termeni.html")

def confidentialitate(request):
    return render(request, template_name="confidentialitate.html")

def retur(request):
    return render(request, template_name="retur.html")

def contact(request):
    return render(request, template_name="contact.html")
