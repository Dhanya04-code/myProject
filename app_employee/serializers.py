from rest_framework import serializers
from django.core.exceptions import ValidationError
from app_employee.models import *

class EmployeeSerializer(serializers.ModelSerializer):
    is_active = True
    class Meta:
        model = Employee
        fields = '__all__'


class EmployeeCreateSerializer(serializers.ModelSerializer):
    is_active = True
    class Meta:
        model = Employee
        fields = ['id','firstname','lastname','emp_id','is_active']

    def validate(self, data):
        emp_id = data['emp_id']
        employee_qs = Employee.objects.filter(emp_id=emp_id)
        if employee_qs.exists():
            raise ValidationError("This Employee Id already exists.")
        return data


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