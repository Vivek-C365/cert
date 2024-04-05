from django.db import models

class SubAdmin(models.Model):
    id = models.AutoField(primary_key=True)
    Document = models.CharField(max_length=255)
    Terms_and_conditions = models.CharField(max_length=855)
    video_file = models.FileField(upload_to='videos/')

class LMSCourse(models.Model):
    id = models.AutoField(primary_key=True)
    Category = models.CharField(max_length=255)  # Corrected spelling of Category
    Value = models.CharField(max_length=255)
    Publication = models.CharField(max_length=255)
    subadmin = models.ForeignKey(SubAdmin, on_delete=models.CASCADE)

class LMSAccess(models.Model):
    id = models.AutoField(primary_key=True)
    Channel = models.CharField(max_length=255)  # Corrected spelling of Category
    type = models.CharField(max_length=255)
    info_LMS = models.CharField(max_length=255)
    Author = models.CharField(max_length=255)
    Created_date = models.DateField()
    Product_info = models.CharField(max_length=255)
    subadmin = models.ForeignKey(SubAdmin, on_delete=models.CASCADE)

class Resource(models.Model):
    id = models.AutoField(primary_key=True)
    Refrencecourse = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    Author = models.CharField(max_length=255)
    Summary_of_Resource = models.CharField(max_length=255)
    Banner = models.ImageField(upload_to='banners/')
    Type = models.CharField(max_length=255)
    Component = models.CharField(max_length=255)
    subadmin = models.ForeignKey(SubAdmin, on_delete=models.CASCADE)
 
class course(models.Model):
    id = models.AutoField(primary_key=True)
    Author = models.CharField(max_length=255)
    Key_features = models.CharField(max_length=255)
    Banner = models.ImageField(upload_to='banners/')
    subadmin = models.ForeignKey(SubAdmin, on_delete=models.CASCADE)    
    LMSAccesss = models.ForeignKey(LMSAccess, on_delete=models.CASCADE)     
    
class client(models.Model):
    id = models.AutoField(primary_key=True)
    payment = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    courses = models.ForeignKey(course, on_delete=models.CASCADE)

class onlineClasses(models.Model):
    id = models.AutoField(primary_key=True)
    Price = models.DecimalField(max_digits=10, decimal_places=2)
    product_info = models.TextField()
    training_info = models.TextField()
    channel = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    trainer = models.CharField(max_length=100)
    landing_page = models.URLField()
    Location = models.CharField(max_length=100)
    Schedule = models.CharField(max_length=100)
    LMSAccesss = models.ForeignKey(LMSAccess, on_delete=models.CASCADE) 
    subadmin = models.ForeignKey(SubAdmin, on_delete=models.CASCADE)