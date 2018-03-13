from django.shortcuts import render, HttpResponse, HttpResponseRedirect
# Create your views here.


from .models import Person
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def new_order(request):
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
        return HttpResponseRedirect('www.carbuneactivnatural.com')
    else:
        #context = 'COMANDA NU A PUTUT FI TRIMISA'
        #return render(request, 'index.html', {'context': context})
        return HttpResponseRedirect('www.carbuneactivnatural.com')


"""
general tamplate => thanks
def thanks(request, template_name='multumim.html'): 
    return render(request, template_name)
"""



"""

def index(request):
    return render(request, template_name="index.html")

@csrf_exempt
def create_order(request):
    if request.method == 'POST':
        alldata = request.POST

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
        #return render(request, 'index.html', {'context': context})
        HttpResponseRedirect("multumim.html")
    else:
        #context = 'COMANDA NU A PUTUT FI TRIMISA'
        #return render(request, 'index.html', {'context': context})
        HttpResponseRedirect("multumim.html")

def termeni(request):
    return render(request, template_name="termeni.html")

def confidentialitate(request):
    return render(request, template_name="confidentialitate.html")

def retur(request):
    return render(request, template_name="retur.html")

def contact(request):
    return render(request, template_name="contact.html")
"""
