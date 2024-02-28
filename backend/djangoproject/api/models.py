from django.db import models

class Plan(models.Model):
    items = models.CharField(max_length=1000)
