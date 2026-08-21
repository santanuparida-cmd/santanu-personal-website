from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    ProfileViewSet,
    ResearchInterestViewSet,
    ResearchProjectViewSet,
    PublicationViewSet,
    TeachingResourceViewSet,
    AchievementViewSet,
    GalleryItemViewSet,
    NewsUpdateViewSet,
    AcademicLinkViewSet,
    CVDocumentViewSet,
    TeachingCourseListView,
)


router = DefaultRouter()

router.register("profile", ProfileViewSet)
router.register("research-interests", ResearchInterestViewSet)
router.register("research-projects", ResearchProjectViewSet)
router.register("publications", PublicationViewSet)
router.register("teaching-resources", TeachingResourceViewSet)
router.register("achievements", AchievementViewSet)
router.register("gallery", GalleryItemViewSet)
router.register("news", NewsUpdateViewSet)
router.register("academic-links", AcademicLinkViewSet)
router.register("cv", CVDocumentViewSet)


urlpatterns = router.urls + [
    path(
        "teaching/",
        TeachingCourseListView.as_view(),
        name="teaching-courses",
    ),
]
