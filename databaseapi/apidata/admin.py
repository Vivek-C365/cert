from django.contrib import admin

# Register your models here.
# admin.py

from django.contrib import admin
from .models import SubAdmin, LMSCourse, LMSAccess, Resource, course, client, onlineClasses

admin.site.register(SubAdmin)
admin.site.register(LMSCourse)
admin.site.register(LMSAccess)
admin.site.register(Resource)
admin.site.register(course)
admin.site.register(client)
admin.site.register(onlineClasses)
