from django.shortcuts import render
from rest_framework import generics 
from .models import NewTable
from .serializers import SampleSerializer

# Create your views here.
class apiView(generics.ListAPIView): 
    queryset = NewTable.objects.all()
    serializer_class = SampleSerializer