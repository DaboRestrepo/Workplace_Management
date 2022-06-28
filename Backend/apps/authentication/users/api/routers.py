from rest_framework.routers import DefaultRouter
from .viewsets import UserViewset

router = DefaultRouter()

router.register(r'user', UserViewset, basename='user')

urlpatterns = router.urls
