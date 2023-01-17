from django.conf import settings
from django.db import models


class Container(models.Model):
    address = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='photos/')
    fullness = models.PositiveSmallIntegerField(default=0)
    information = models.TextField(blank=True)
    is_open = models.BooleanField(default=True)

    def __str__(self):
        return self.address