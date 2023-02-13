from django.urls import path 
from .views import apiView 

urlpatterns = [
    path('hello', apiView.as_view())
]