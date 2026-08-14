"""Seed data catalog for the database-driven sport system.

This is the single source of truth for the sport catalog. It is loaded into
the `sports` table by `backend/scripts/init_db.py`. The frontend never
hardcodes sports - it reads them from the API.
"""
from dataclasses import dataclass


@dataclass(frozen=True)
class SportSeed:
    slug: str
    name: str
    category: str
    description: str
    icon_key: str
    ai_analysis_available: bool


SPORTS: list[SportSeed] = [
    SportSeed("cricket", "Cricket", "team", "Batting, bowling and fielding analysis for the most popular sport in India.", "cricket", True),
    SportSeed("football", "Football", "team", "Speed, dribbling, ball control and shooting analysis.", "football", True),
    SportSeed("hockey", "Hockey", "team", "Stick skills, speed and game intelligence analysis.", "hockey", True),
    SportSeed("kabaddi", "Kabaddi", "team", "Agility, balance, footwork and raid movement analysis.", "kabaddi", True),
    SportSeed("kho-kho", "Kho-Kho", "team", "Chase, tagging and ring running skills analysis.", "kho-kho", False),
    SportSeed("athletics", "Athletics", "athletics", "Sprint speed, stride length, arm swing and posture analysis.", "athletics", True),
    SportSeed("badminton", "Badminton", "racquet", "Footwork, smash form and court movement analysis.", "badminton", True),
    SportSeed("basketball", "Basketball", "team", "Shooting form, jump height, footwork and dribbling analysis.", "basketball", True),
    SportSeed("volleyball", "Volleyball", "team", "Jump timing, spike angle, arm movement and balance analysis.", "volleyball", True),
    SportSeed("handball", "Handball", "team", "Throw mechanics, movement and game play analysis.", "handball", False),
    SportSeed("boxing", "Boxing", "combat", "Punch mechanics, footwork and defensive movement analysis.", "boxing", True),
    SportSeed("wrestling", "Wrestling", "combat", "Stance, takedown and mat movement analysis.", "wrestling", True),
    SportSeed("judo", "Judo", "combat", "Grip, kuzushi (balance breaking) and throw analysis.", "judo", False),
    SportSeed("karate", "Karate", "combat", "Kata technique, stance and strike form analysis.", "karate", False),
    SportSeed("taekwondo", "Taekwondo", "combat", "Kicking form, balance and stance analysis.", "taekwondo", False),
    SportSeed("wushu", "Wushu", "combat", "Routine form, balance and power analysis.", "wushu", False),
    SportSeed("archery", "Archery", "precision", "Draw, aim, release and follow-through analysis.", "archery", True),
    SportSeed("shooting", "Shooting", "precision", "Stance, trigger control and breath analysis.", "shooting", False),
    SportSeed("swimming", "Swimming", "aquatic", "Stroke technique and body alignment analysis.", "swimming", False),
    SportSeed("gymnastics", "Gymnastics", "gymnastics", "Routine, form and balance analysis.", "gymnastics", False),
    SportSeed("weightlifting", "Weightlifting", "strength", "Lift mechanics and bar path analysis.", "weightlifting", False),
    SportSeed("cycling", "Cycling", "endurance", "Cadence, posture and power output analysis.", "cycling", False),
    SportSeed("fencing", "Fencing", "combat", "Footwork, lunge and blade work analysis.", "fencing", False),
    SportSeed("table-tennis", "Table Tennis", "racquet", "Serve, stroke and footwork analysis.", "table-tennis", False),
    SportSeed("tennis", "Tennis", "racquet", "Serve, forehand, backhand and court movement analysis.", "tennis", False),
    SportSeed("squash", "Squash", "racquet", "Shot selection, movement and racket technique analysis.", "squash", False),
    SportSeed("rowing", "Rowing", "aquatic", "Stroke rate, technique and power analysis.", "rowing", False),
    SportSeed("kayaking", "Kayaking", "aquatic", "Paddle technique and body rotation analysis.", "kayaking", False),
    SportSeed("canoeing", "Canoeing", "aquatic", "Paddle stroke and balance analysis.", "canoeing", False),
    SportSeed("rugby", "Rugby", "team", "Tackle, handling and game play analysis.", "rugby", False),
    SportSeed("golf", "Golf", "precision", "Swing mechanics and stance analysis.", "golf", False),
    SportSeed("equestrian", "Equestrian", "precision", "Riding posture and control analysis.", "equestrian", False),
    SportSeed("billiards", "Billiards", "precision", "Cue action and stance analysis.", "billiards", False),
    SportSeed("snooker", "Snooker", "precision", "Cue action, cue ball control and shot analysis.", "snooker", False),
    SportSeed("baseball", "Baseball", "team", "Batting, pitching and fielding analysis.", "baseball", False),
    SportSeed("softball", "Softball", "team", "Batting, pitching and fielding analysis.", "softball", False),
    SportSeed("netball", "Netball", "team", "Passing, movement and shooting analysis.", "netball", False),
    SportSeed("sepak-takraw", "Sepak Takraw", "team", "Kicking, heading and agility analysis.", "sepak-takraw", False),
    SportSeed("roll-ball", "Roll Ball", "team", "Rolling and throwing technique analysis.", "roll-ball", False),
    SportSeed("roller-skating", "Roller Skating", "recreation", "Skating balance and technique analysis.", "roller-skating", False),
    SportSeed("tug-of-war", "Tug of War", "team", "Pulling mechanics and team coordination analysis.", "tug-of-war", False),
    SportSeed("tennikoit", "Tennikoit", "racquet", "Ring play, serve and court movement analysis.", "tennikoit", False),
    SportSeed("ball-badminton", "Ball Badminton", "racquet", "Serve, stroke and court movement analysis.", "ball-badminton", False),
    SportSeed("soft-tennis", "Soft Tennis", "racquet", "Serve, stroke and court movement analysis.", "soft-tennis", False),
    SportSeed("lawn-bowls", "Lawn Bowls", "precision", "Delivery and line-length analysis.", "lawn-bowls", False),
    SportSeed("triathlon", "Triathlon", "endurance", "Swim-bike-run pacing and transition analysis.", "triathlon", False),
    SportSeed("polo", "Polo", "team", "Riding, mallet control and team play analysis.", "polo", False),
    SportSeed("yogasana", "Yogasana", "wellness", "Posture, alignment and breathing analysis.", "yogasana", False),
    SportSeed("mallakhamb", "Mallakhamb", "indigenous", "Pole and rope balance and strength analysis.", "mallakhamb", False),
    SportSeed("kalaripayattu", "Kalaripayattu", "indigenous", "Martial movement and stance analysis.", "kalaripayattu", False),
    SportSeed("gatka", "Gatka", "indigenous", "Stick and shield combat movement analysis.", "gatka", False),
    SportSeed("thang-ta", "Thang-Ta", "indigenous", "Sword and spear combat movement analysis.", "thang-ta", False),
    SportSeed("atya-patya", "Atya Patya", "indigenous", "Chase and line game agility analysis.", "atya-patya", False),
]
