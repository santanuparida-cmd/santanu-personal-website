from rest_framework import viewsets, generics

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

from .serializers import (
    ProfileSerializer,
    ResearchInterestSerializer,
    ResearchProjectSerializer,
    PublicationSerializer,
    TeachingResourceSerializer,
    TeachingCourseSerializer,
    AchievementSerializer,
    GalleryItemSerializer,
    NewsUpdateSerializer,
    AcademicLinkSerializer,
    CVDocumentSerializer,
)


class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ResearchInterestViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ResearchInterest.objects.all()
    serializer_class = ResearchInterestSerializer


class ResearchProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ResearchProject.objects.all()
    serializer_class = ResearchProjectSerializer


class PublicationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Publication.objects.all()
    serializer_class = PublicationSerializer


class TeachingResourceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeachingResource.objects.all()
    serializer_class = TeachingResourceSerializer


class AchievementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer


class GalleryItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryItem.objects.all()
    serializer_class = GalleryItemSerializer


class NewsUpdateViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = NewsUpdate.objects.all()
    serializer_class = NewsUpdateSerializer


class AcademicLinkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AcademicLink.objects.all()
    serializer_class = AcademicLinkSerializer


class CVDocumentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CVDocument.objects.all()
    serializer_class = CVDocumentSerializer


class TeachingCourseListView(generics.ListAPIView):
    queryset = TeachingCourse.objects.filter(active=True)
    serializer_class = TeachingCourseSerializer