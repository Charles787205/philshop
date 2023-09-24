from rest_framework import serializers
from .models import UserProfile
from django.contrib.auth.models import User

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta: 
        model = UserProfile
        
        fields = ['status']
        
class UserSerializer(serializers.ModelSerializer):
    
    profile = UserProfileSerializer(required=False)
    
    class Meta:
        model = User
        fields = ('id', 'username', 'password','email','profile')
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        profile_data = validated_data.pop('profile', None)
        user = User.objects.create_user(**validated_data)
        if profile_data:
            userprofile = UserProfile.objects.get(user=user)
            userprofile.status = profile_data.get('status')
            userprofile.save()
        
        return user
    
