from rest_framework import serializers
from app_employee.models import *

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'


class EmployeeUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id','firstname','lastname']


class TaskListSerializer(serializers.ModelSerializer):
    assignee = serializers.CharField(source='assignee.firstname')

    class Meta:
        model = Task
        fields = ['id','taskname','assignee','start_date','end_date','status']


class TaskSerializer(serializers.ModelSerializer):
    start_date = serializers.DateTimeField(input_formats=["%d/%m/%Y"], required=True)
    end_date = serializers.DateTimeField(input_formats=["%d/%m/%Y"], required=True)

    class Meta:
        model = Task
        fields = '__all__'