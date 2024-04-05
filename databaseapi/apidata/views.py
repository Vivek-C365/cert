# views.py
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import SubAdmin, LMSCourse, LMSAccess, Resource, course, client, onlineClasses
from .serializers import SubAdminSerializer, LMSCourseSerializer, LMSAccessSerializer, ResourceSerializer, CourseSerializer, ClientSerializer, OnlineClassesSerializer

from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import AllowAny

from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import SubAdmin, LMSCourse, LMSAccess, Resource, course, client, onlineClasses
from .serializers import SubAdminSerializer, LMSCourseSerializer, LMSAccessSerializer, ResourceSerializer, CourseSerializer, ClientSerializer, OnlineClassesSerializer

class SubAdminViewSet(viewsets.ModelViewSet):
    queryset = SubAdmin.objects.all()
    serializer_class = SubAdminSerializer
    permission_classes = [AllowAny]

class LMSCourseViewSet(viewsets.ModelViewSet):
    queryset = LMSCourse.objects.all()
    serializer_class = LMSCourseSerializer
    permission_classes = [AllowAny] 

class LMSAccessViewSet(viewsets.ModelViewSet):
    queryset = LMSAccess.objects.all()
    serializer_class = LMSAccessSerializer
    permission_classes = [AllowAny] 

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [AllowAny] 

class CourseViewSet(viewsets.ModelViewSet):
    queryset = course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [AllowAny] 

class ClientViewSet(viewsets.ModelViewSet):
    queryset = client.objects.all()
    serializer_class = ClientSerializer
    permission_classes = [AllowAny] 

class OnlineClassesViewSet(viewsets.ModelViewSet):
    queryset = onlineClasses.objects.all()
    serializer_class = OnlineClassesSerializer
    permission_classes = [AllowAny] 
