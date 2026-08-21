from rest_framework import serializers

from .models import (
    Profile,
    ResearchInterest,
    ResearchProject,
    Publication,
    TeachingResource,
    TeachingCourse,
    Achievement,
    GalleryItem,
    NewsUpdate,
    AcademicLink,
    CVDocument,
)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class ResearchInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchInterest
        fields = "__all__"


class ResearchProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchProject
        fields = "__all__"


class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = "__all__"


class TeachingResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeachingResource
        fields = "__all__"


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = "__all__"


class GalleryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryItem
        fields = "__all__"


class NewsUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsUpdate
        fields = "__all__"


class AcademicLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicLink
        fields = "__all__"


class CVDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CVDocument
        fields = "__all__"

class TeachingCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeachingCourse
        fields = "__all__"