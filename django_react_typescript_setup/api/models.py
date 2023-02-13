from django.db import models

# Create your models here.
class NewTable(models.Model): 
    columnOne = models.CharField(max_length=8)
    columnTwo = models.BooleanField(null=False)
    columnThree = models.IntegerField(default=False)
    columnFour = models.DateField(auto_now_add=True)
