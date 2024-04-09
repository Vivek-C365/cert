from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
class UserManager(BaseUserManager):
    def create_user(self, email, name, tc,  bio=None, phone_number=None, social_media_links=None, website=None,linkedin=None,twitter=None, instagram=None,youtube=None,facebook=None,password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            tc=tc,
            bio=bio,
            phone_number=phone_number,
            social_media_links=social_media_links,
            website=website,
            linkedin=linkedin,
            twitter=twitter,
            instagram=instagram,
            youtube=youtube,
            facebook=facebook
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, tc, password):
        user = self.create_user(
            email=email,
            name=name,
            tc=tc,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    profile_image = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    email = models.EmailField(verbose_name='Email', max_length=255, unique=True)
    name = models.CharField(max_length=200)
    tc = models.BooleanField()
    bio = models.TextField(blank=True, null=True)  # New field
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    social_media_links = models.TextField(blank=True, null=True)
    website = models.TextField(blank=True, null=True)
    linkedin = models.TextField(blank=True, null=True)
    twitter = models.TextField(blank=True, null=True)
    instagram = models.TextField(blank=True, null=True)
    youtube = models.TextField(blank=True, null=True)
    facebook = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'tc']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin


class ProfileImage(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE , related_name='profile_images')
    image = models.ImageField(upload_to='user_image/', null=True, blank=True)

    def __str__(self):
        return self.image.url