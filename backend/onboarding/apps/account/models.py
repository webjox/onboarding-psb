from django.db import models

from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
    AbstractUser,
)

#from ..team.models import Team


class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, username, password, **extra_fields):
        """Create and save a User with the given username and password."""
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, password=None, **extra_fields):
        """Create and save a regular User with the given username and password."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self._create_user(username, password, **extra_fields)

    def create_superuser(self, username, password, **extra_fields):
        """Create and save a SuperUser with the given username and password."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(username, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    ROLES_IN_TEAM = (
        ('Аналитик', 'Аналитик'),
        ('Тестировщик', 'Тестировщик'),
        ('Тимлид', 'Тимлид'),
        ('Разработчик', 'Разработчик')
    )
    name = models.CharField(max_length=255, verbose_name="ФИО")
    username = models.CharField(max_length=30, unique=True, verbose_name="Логин")
    post = models.CharField(max_length=255, verbose_name="Должность")
    team = models.ForeignKey("team.Team", null=True, blank=True, on_delete=models.SET_NULL, verbose_name="Команда")
    completed_steps = None
    completed_tests = None
    role_in_team = models.CharField(max_length=50, choices=ROLES_IN_TEAM, verbose_name="Роль в команде")
    description = models.TextField(null=True, blank=True, verbose_name="Личное описание")
    photo = models.ImageField(
        upload_to="uploads/%Y/%m/%d/",
        blank=True,
        null=True,
        verbose_name="Фото",
    )
    stack = models.TextField(null=True, blank=True, verbose_name="Стэк")
    number_test_scores = models.PositiveIntegerField(null=True, blank=True, verbose_name="Количество баллов за тесты")
    achievements = None
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["password"]
    objects = UserManager()

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"
        ordering = ("name",)

    # Метод для отображения в админ панели

    def __str__(self):
        return self.username
