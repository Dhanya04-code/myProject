from django.conf.urls import url
from app_admin.views import user_mngmt

urlpatterns = [
    url(r'^login$', user_mngmt.login_page),
    url(r'^register$', user_mngmt.signup_page),
    url(r'^api/register$', user_mngmt.userCreate.as_view()),
    url(r'^api/login$', user_mngmt.UserLogin.as_view()),
]