from rest_framework import serializers
from .models import NewTable

class SampleSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = NewTable
        fields = ('id', 'columnOne', 'columnTwo', 'columnThree', 'columnFour')