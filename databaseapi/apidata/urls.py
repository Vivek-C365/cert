from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SubAdminViewSet, LMSCourseViewSet, LMSAccessViewSet, ResourceViewSet, CourseViewSet, ClientViewSet, OnlineClassesViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SubAdminViewSet, LMSCourseViewSet, LMSAccessViewSet, ResourceViewSet, CourseViewSet, ClientViewSet, OnlineClassesViewSet

router = DefaultRouter()
router.register(r'subadmins', SubAdminViewSet)
router.register(r'lmss', LMSCourseViewSet)
router.register(r'lmsaccess', LMSAccessViewSet)
router.register(r'resources', ResourceViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'clients', ClientViewSet)
router.register(r'onlineclasses', OnlineClassesViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
