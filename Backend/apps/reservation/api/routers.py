from rest_framework.routers import DefaultRouter

from .viewsets import DesktopViewset, ReservationViewset

router = DefaultRouter()

router.register(r'desktop', DesktopViewset, basename='desktop')
router.register(r'reservation', ReservationViewset, basename='reservation')

urlpatterns = router.urls