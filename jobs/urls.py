from django.urls import path, include
from rest_framework import routers
from jobs import views

# api 
router = routers.DefaultRouter()
router.register(r'jobs', views.JobView, 'jobs')

urlpatterns = [
    path("api/v1/", include(router.urls))
]