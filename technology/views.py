from django.shortcuts import render
from django.http import HttpResponse
from .models import *

def main(request):
    return render(request, 'technology/html/index.html')

def buckets_list(request):
    buckets = Container.objects.all()
    return render(request, 'technology/html/buckets_list.html', {"buckets" : buckets})
