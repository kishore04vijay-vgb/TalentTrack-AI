"""Initialize the database schema and seed demo data.

Idempotent - safe to run multiple times.

Usage (from backend/):
    python scripts/init_db.py
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from sqlalchemy.orm import Session

from app.database import Base, SessionLocal, engine
from app.data.sports import SPORTS
from app.models import Role, RoleName, Sport


def seed_roles(db: Session) -> None:
    for role in RoleName:
        existing = db.query(Role).filter(Role.name == role.value).first()
        if not existing:
            db.add(Role(name=role.value, description=f"{role.value} role"))
    db.commit()


def seed_sports(db: Session) -> None:
    count = 0
    for s in SPORTS:
        existing = db.query(Sport).filter(Sport.slug == s.slug).first()
        if not existing:
            db.add(
                Sport(
                    name=s.name,
                    slug=s.slug,
                    category=s.category,
                    description=s.description,
                    icon_key=s.icon_key,
                    ai_analysis_available=s.ai_analysis_available,
                )
            )
            count += 1
    db.commit()
    print(f"Sports seeded: {count} new, {len(SPORTS)} in catalog.")


def main() -> None:
    print("Creating tables...")
    Base.metadata.create_all(bind=engine)
    print("Tables created (or already present).")

    db: Session = SessionLocal()
    try:
        seed_roles(db)
        seed_sports(db)
    finally:
        db.close()

    print("Database initialization complete.")


if __name__ == "__main__":
    main()
