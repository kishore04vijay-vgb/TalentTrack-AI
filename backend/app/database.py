"""SQLAlchemy engine, session factory and declarative base.

Works with PostgreSQL in production and SQLite in local development
(the URL comes from DATABASE_URL). All models inherit from `Base`.
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker

from .config import settings


def _build_engine():
    url = settings.DATABASE_URL
    kwargs = {}
    if url.startswith("sqlite"):
        # SQLite requires this for FastAPI's threaded execution model.
        kwargs["connect_args"] = {"check_same_thread": False}
    return create_engine(url, pool_pre_ping=True, **kwargs)


engine = _build_engine()

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    """Shared declarative base for all ORM models."""


def get_db():
    """FastAPI dependency that yields a database session per request."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
