
from rest_framework import viewsets
from.serializer import JobSerializer
from .models import Job

# Create your views here.
class JobView(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    queryset = Job.objects.all()
