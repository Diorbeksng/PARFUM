from django.http import HttpResponse
from django.shortcuts import render



def index(request):
    context = {
        'title': 'Home',
        'content' : 'Главная страница',

    }


    return render(request, 'main/index.html',context)

def about(request):
    return render(request, 'main/about.html')
# Create your views here.
