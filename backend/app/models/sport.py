from __future__ import annotations

from sqlalchemy import Boolean, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from .base import BaseModel, TimestampMixin


class Sport(BaseModel, TimestampMixin):
    """Database-driven sport catalog.

    The UI must NOT hardcode the sport list; it is fetched from this table.

    ai_analysis_available:
        - True  -> a sport-specific AI analysis module exists
        - False -> sport is in the system but AI analysis is "coming soon"

    This separation lets new sports (and new AI modules) be added later
    without touching frontend code.
    """
    __tablename__ = "sports"

    name: Mapped[str] = mapped_column(String(80), unique=True, nullable=False)
    slug: Mapped[str] = mapped_column(String(80), unique=True, index=True, nullable=False)
    category: Mapped[str] = mapped_column(String(50), nullable=False, index=True)
    description: Mapped[str | None] = mapped_column(Text)
    icon_key: Mapped[str | None] = mapped_column(String(50))
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    ai_analysis_available: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
