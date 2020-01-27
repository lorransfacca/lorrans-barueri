from django.urls import path, include
from website.views import pagina_inicial

urlpatterns = [
    path('', pagina_inicial),
]