from django.urls import path
from .views import *

urlpatterns = [
    path('', main, name='main'),
    path('containers/', buckets_list, name='containers'),
]