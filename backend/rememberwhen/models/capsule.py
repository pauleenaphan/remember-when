from django.db import models

class capsuleModel(models.Model):
    name = models.CharField(max_length=100, required=True)
    description = models.TextField(required=True)
    openDate = models.DateField(required=True)
    buryDate = models.DateField(required=True)
    openDate = models.BooleanField(default=False)
    image = models.ImageField(upload_to='capsuleImages/', blank=True)
    email = models.EmailField(required=True)