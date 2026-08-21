from django.db import models
from cloudinary_storage.storage import RawMediaCloudinaryStorage


class Profile(models.Model):
    name = models.CharField(max_length=200)
    designation = models.CharField(max_length=200)
    institution = models.CharField(max_length=300)
    short_bio = models.TextField(blank=True)
    full_bio = models.TextField(blank=True)

    profile_photo = models.ImageField(
        upload_to="profile/",
        blank=True,
        null=True
    )

    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=30, blank=True)
    address = models.TextField(blank=True)

    google_scholar = models.URLField(blank=True)
    orcid = models.URLField(blank=True)
    researchgate = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)

    def __str__(self):
        return self.name


class ResearchInterest(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order", "title"]

    def __str__(self):
        return self.title


class ResearchProject(models.Model):
    STATUS_CHOICES = [
        ("ongoing", "Ongoing"),
        ("completed", "Completed"),
    ]

    title = models.CharField(max_length=300)
    description = models.TextField()

    funding_agency = models.CharField(max_length=250, blank=True)

    grant_amount = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        blank=True,
        null=True
    )

    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="ongoing"
    )

    project_url = models.URLField(blank=True)
    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Publication(models.Model):
    PUBLICATION_TYPES = [
        ("journal", "Journal Article"),
        ("conference", "Conference Paper"),
        ("book", "Book"),
        ("chapter", "Book Chapter"),
        ("other", "Other"),
    ]

    title = models.CharField(max_length=500)
    authors = models.TextField()

    journal = models.CharField(max_length=300, blank=True)

    publication_type = models.CharField(
        max_length=20,
        choices=PUBLICATION_TYPES,
        default="journal"
    )

    year = models.PositiveIntegerField()

    volume = models.CharField(max_length=50, blank=True)
    issue = models.CharField(max_length=50, blank=True)
    pages = models.CharField(max_length=50, blank=True)

    doi = models.CharField(max_length=200, blank=True)
    url = models.URLField(blank=True)

    # PDFs/documents are stored as raw files in Cloudinary
    pdf = models.FileField(
        upload_to="publications/",
        storage=RawMediaCloudinaryStorage(),
        blank=True,
        null=True
    )

    featured = models.BooleanField(default=False)

    class Meta:
        ordering = ["-year", "title"]

    def __str__(self):
        return self.title


class TeachingResource(models.Model):
    CATEGORY_CHOICES = [
        ("notes", "Lecture Notes"),
        ("slides", "Presentation"),
        ("question", "Question Bank"),
        ("practical", "Practical"),
        ("other", "Other"),
    ]

    title = models.CharField(max_length=300)

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        default="notes"
    )

    course = models.CharField(max_length=200, blank=True)
    semester = models.CharField(max_length=100, blank=True)

    description = models.TextField(blank=True)

    # PDFs/documents are stored as raw files in Cloudinary
    file = models.FileField(
        upload_to="resources/",
        storage=RawMediaCloudinaryStorage(),
        blank=True,
        null=True
    )

    external_url = models.URLField(blank=True)

    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Achievement(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField(blank=True)

    year = models.PositiveIntegerField(
        blank=True,
        null=True
    )

    image = models.ImageField(
        upload_to="achievements/",
        blank=True,
        null=True
    )

    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class GalleryItem(models.Model):
    title = models.CharField(max_length=250)
    caption = models.TextField(blank=True)

    image = models.ImageField(
        upload_to="gallery/"
    )

    event_date = models.DateField(
        blank=True,
        null=True
    )

    category = models.CharField(
        max_length=150,
        blank=True
    )

    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class NewsUpdate(models.Model):
    title = models.CharField(max_length=300)
    content = models.TextField()

    date = models.DateField()

    link = models.URLField(blank=True)

    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class AcademicLink(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField()

    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order", "name"]

    def __str__(self):
        return self.name


class TeachingCourse(models.Model):
    LEVEL_CHOICES = [
        ("ug", "Undergraduate"),
        ("pg", "Postgraduate"),
        ("other", "Other"),
    ]

    title = models.CharField(max_length=250)

    level = models.CharField(
        max_length=20,
        choices=LEVEL_CHOICES,
        default="ug"
    )

    semester = models.CharField(
        max_length=100,
        blank=True
    )

    description = models.TextField(
        blank=True
    )

    display_order = models.PositiveIntegerField(
        default=0
    )

    active = models.BooleanField(
        default=True
    )

    class Meta:
        ordering = ["display_order", "title"]

    def __str__(self):
        return self.title


class CVDocument(models.Model):
    title = models.CharField(
        max_length=200,
        default="Curriculum Vitae"
    )

    # CV/PDF is stored as a raw file in Cloudinary
    file = models.FileField(
        upload_to="cv/",
        storage=RawMediaCloudinaryStorage()
    )

    uploaded_at = models.DateTimeField(auto_now_add=True)

    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title