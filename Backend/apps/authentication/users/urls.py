from django.urls import path
from rest_framework import routers
from .viewsets import UserViewset
from . import views

route = routers.SimpleRouter()

route.register('user', UserViewset)

urlpatterns = route.urls
urlpatterns += path('login', views.login),
# urlpatterns += path('get_user/int:user_id>/', views.get_user),
# urlpatterns += path('logout', views.logout),
