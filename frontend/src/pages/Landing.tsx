import { Link } from 'react-router-dom'
import {
  Zap,
  TrendingUp,
  Cpu,
  Trophy,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Play,
  Target,
} from 'lucide-react'
import { Card } from '../components/ui'

const FEATURES = [
  { icon: <Cpu />, title: 'AI Video Analysis', desc: 'Upload practice videos. AI detects your sport and scores 20+ performance metrics in seconds.' },
  { icon: <TrendingUp />, title: 'Growth Tracking', desc: 'Watch your AI score climb across timeline, comparisons and milestone badges.' },
  { icon: <Play />, title: 'Learn From The Best', desc: 'Sport-specific learning videos recommended only for your exact weaknesses.' },
  { icon: <Trophy />, title: 'Get Recruited', desc: 'Coaches discover you through AI talent search and recruitment analytics.' },
]

const FLOW = ['Register', 'Upload Video', 'AI Analysis', 'Training Plan', 'Track Growth', 'Get Recruited']

export default function Landing() {
  return (
    <div className="landing">
      <div className="bg-orb" />
      <div className="land-nav">
        <Link to="/" className="brand-logo" style={{ width: 38, height: 38 }}>
          <Zap size={20} />
        </Link>
        <div style={{ fontWeight: 800, fontFamily: 'var(--font-display)' }}>TalentTrack AI</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#journey">Journey</a>
          <a href="#portals">Portals</a>
        </div>
        <Link to="/player/login" className="btn btn-ghost btn-sm">
          Login
        </Link>
        <Link to="/player/register" className="btn btn-primary btn-sm">
          Get Started
        </Link>
      </div>

      <section className="land-hero">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <Sparkles size={15} /> AI-Powered Sports Intelligence Platform
            </div>
            <h1 className="hero-title">
              Discover Your Potential.
              <br />
              Become the <span className="grad-text">Athlete</span> You Were Meant to Be.
            </h1>
            <p className="hero-sub">
              AI-powered performance analysis, personalized training and intelligent sports recruitment — all in one platform built for athletes and coaches.
            </p>
            <div className="hero-cta">
              <Link to="/player/register" className="btn btn-primary btn-lg">
                Get Started <ArrowRight size={18} />
              </Link>
              <a href="#features" className="btn btn-outline btn-lg">
                Explore Sports
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="n grad-text">10,000+</div>
                <div className="l">Athletes Analyzed</div>
              </div>
              <div className="hero-stat">
                <div className="n grad-text">5</div>
                <div className="l">Supported Sports</div>
              </div>
              <div className="hero-stat">
                <div className="n grad-text">87</div>
                <div className="l">Avg AI Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="center">
          <div className="section-tag">Why TalentTrack AI</div>
          <h2 className="sec-title mt-2" style={{ fontSize: 34 }}>
            One platform. <span className="grad-text">Analyze → Learn → Improve → Track → Showcase → Recruit</span>
          </h2>
          <p className="sec-sub" style={{ maxWidth: 560, margin: '10px auto 0' }}>
            Everything an athlete needs to go from practice footage to professional recruitment.
          </p>
        </div>
        <div className="features">
          {FEATURES.map((f) => (
            <Card key={f.title} hover pad className="feature-card">
              <div className="f-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="section" id="journey" style={{ paddingTop: 0 }}>
        <div className="center">
          <div className="section-tag">Athlete Journey</div>
          <h2 className="sec-title mt-2" style={{ fontSize: 30 }}>
            From first video to first selection
          </h2>
        </div>
        <div className="flow">
          {FLOW.map((s, i) => (
            <div key={s} style={{ display: 'contents' }}>
              <div className="flow-step">
                <div className="step-num">{i + 1}</div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{s}</div>
              </div>
              {i < FLOW.length - 1 && (
                <div className="flow-arrow">
                  <ChevronRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="portals" style={{ paddingTop: 0 }}>
        <div className="center">
          <div className="section-tag">Two Portals · One Ecosystem</div>
          <h2 className="sec-title mt-2" style={{ fontSize: 30 }}>
            Choose your world
          </h2>
        </div>
        <div className="portal-grid">
          <Link to="/player/register" className="portal-card card card-hover card-pad">
            <div className="pc-emoji">🏃</div>
            <h3>Player Portal</h3>
            <p>
              Upload videos, get AI reports, follow personalized training, build your portfolio, generate resumes and discover trials in your sport.
            </p>
            <div className="mt-3 btn btn-primary btn-sm">
              Enter Player Portal <ArrowRight size={15} />
            </div>
          </Link>
          <Link to="/coach/login" className="portal-card card card-hover card-pad">
            <div className="pc-emoji">🛡️</div>
            <h3>Coach & Academy Portal</h3>
            <p>
              Find AI-recommended athletes, filter talent by sport, manage trials, shortlist players and track recruitment analytics.
            </p>
            <div className="mt-3 btn btn-outline btn-sm">
              Enter Coach Portal <ArrowRight size={15} />
            </div>
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="flex center" style={{ justifyContent: 'center', gap: 8, marginBottom: 8 }}>
          <Target size={16} color="#3d8bff" />
          <span style={{ fontWeight: 700 }}>Analyze → Learn → Improve → Track → Showcase → Get Recruited</span>
        </div>
        © 2026 TalentTrack AI · Built for the future of sports technology
      </footer>
    </div>
  )
}
