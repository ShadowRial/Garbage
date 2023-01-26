from django.urls import path
from .views import *

urlpatterns = [
    path('', containers_list, name='containers_list'),
]