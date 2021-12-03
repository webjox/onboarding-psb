from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .yasg import urlpatterns as doc_urls
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path(f"api/{settings.VERSION_API}/", include('apps.account.urls')),
    path(f"api/{settings.VERSION_API}/", include('apps.team.urls')),
    path(f"api/{settings.VERSION_API}/", include('apps.documentation_reference.urls')),
    path(f"api/{settings.VERSION_API}/", include('apps.step.urls')),
    path(f"api/{settings.VERSION_API}/", include('apps.tests.urls')),
    
    path(f'api/{settings.VERSION_API}/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path(f'api/{settings.VERSION_API}/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

#Ссылки на статику и медиа файлы
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
#Ссылки на документацию
urlpatterns += doc_urls
