from django.db import models

class Employee(models.Model):
    firstname = models.TextField()
    lastname = models.TextField()
    emp_id = models.IntegerField()