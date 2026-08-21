from django.contrib import admin

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


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("name", "designation", "institution", "email")


@admin.register(ResearchInterest)
class ResearchInterestAdmin(admin.ModelAdmin):
    list_display = ("title", "display_order")
    ordering = ("display_order",)


@admin.register(ResearchProject)
class ResearchProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "status",
        "funding_agency",
        "start_date",
        "end_date",
        "featured",
    )
    list_filter = ("status", "featured")
    search_fields = ("title", "funding_agency", "description")


@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "publication_type",
        "journal",
        "year",
        "featured",
    )
    list_filter = ("publication_type", "year", "featured")
    search_fields = ("title", "authors", "journal", "doi")


@admin.register(TeachingResource)
class TeachingResourceAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "course",
        "semester",
        "uploaded_at",
    )
    list_filter = ("category", "semester")
    search_fields = ("title", "course", "description")


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ("title", "year", "featured")
    list_filter = ("year", "featured")
    search_fields = ("title", "description")


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "event_date",
        "uploaded_at",
    )
    list_filter = ("category",)
    search_fields = ("title", "caption")


@admin.register(NewsUpdate)
class NewsUpdateAdmin(admin.ModelAdmin):
    list_display = ("title", "date", "featured")
    list_filter = ("featured", "date")
    search_fields = ("title", "content")


@admin.register(AcademicLink)
class AcademicLinkAdmin(admin.ModelAdmin):
    list_display = ("name", "url", "display_order")
    ordering = ("display_order",)


@admin.register(CVDocument)
class CVDocumentAdmin(admin.ModelAdmin):
    list_display = ("title", "uploaded_at", "active")
    list_filter = ("active",)

@admin.register(TeachingCourse)
class TeachingCourseAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "level",
        "semester",
        "display_order",
        "active",
    )

    list_filter = (
        "level",
        "active",
    )

    search_fields = (
        "title",
        "description",
        "semester",
    )

    ordering = (
        "display_order",
        "title",
    )