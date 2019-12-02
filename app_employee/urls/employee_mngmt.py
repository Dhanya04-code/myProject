from django.conf.urls import url
from app_employee.views import employee_mngmt

urlpatterns = [
    url(r'^employees$', employee_mngmt.employees_list),
    url(r'^employee/create$', employee_mngmt.employee_create),
    url(r'^employee/details/(?P<pk>\d+)$', employee_mngmt.employee_details),
    url(r'^api/employees/list$', employee_mngmt.employeeListAPIView.as_view()),
    url(r'^api/employee/create$', employee_mngmt.employeeCreateAPIView.as_view()),
    url(r'^api/employee/delete/(?P<pk>\d+)$', employee_mngmt.employeeDestroyAPIView.as_view()),
    url(r'^api/employee/details/(?P<pk>\d+)$', employee_mngmt.employeeDetailAPIView.as_view()),
    url(r'^api/employee/edit/(?P<pk>\d+)$', employee_mngmt.employeeUpdateAPIView.as_view()),
]