# serializers.py
from rest_framework import serializers
from .models import SubAdmin, LMSCourse, LMSAccess, Resource, course, client, onlineClasses
from rest_framework import serializers
from .models import SubAdmin, LMSCourse, LMSAccess, Resource, course, client, onlineClasses

class SubAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubAdmin
        fields = '__all__'


class LMSCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = LMSCourse
        fields = '__all__'

class LMSAccessSerializer(serializers.ModelSerializer):
    class Meta:
        model = LMSAccess
        fields = '__all__'

class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = course
        fields = '__all__'

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = client
        fields = '__all__'

class OnlineClassesSerializer(serializers.ModelSerializer):
    class Meta:
        model = onlineClasses
        fields = '__all__'
