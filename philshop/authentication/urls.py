from .views import *
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

urlpatterns = [
    path("register-user/", UserRegistrationView.as_view(), name="user-registration"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("logout/", LogoutView.as_view(), name="logout"),
]
