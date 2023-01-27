from django.shortcuts import render
from django.http import HttpResponse
from .models import *

def containers_list(request):
    return render(request, 'technology/html/portfolio.html')

def post_list(request):
    buckets = Containers.objects.all()
    return render(request, 'techology/html/buckets_list.html', {"bukets" : buckets})
