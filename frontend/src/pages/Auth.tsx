import { FormEvent, ReactNode, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Zap, Mail, Lock, User, Calendar, MapPin, Target, BarChart3, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Card } from '../components/ui'
import { cx } from '../components/ui'

function AuthShell({ children, aside }: { children: ReactNode; aside: ReactNode }) {
  return (
    <div className="auth">
      <div className="bg-orb" />
      <div className="auth-side">
        <Link to="/" className="auth-brand">
          <div className="brand-logo">
            <Zap size={20} />
          </div>
          <div>
            <div className="brand-name">TalentTrack AI</div>
            <div className="brand-sub">Athlete Intelligence</div>
          </div>
        </Link>
        <Card pad className="auth-card">
          {children}
        </Card>
        <div className="auth-foot">
          {aside}
        </div>
      </div>
      <div className="auth-aside">
        <div className="auth-quote">
          Your practice footage already holds the answers.{' '}
          <span className="grad-text">We let the AI read it for you.</span>
        </div>
        <div className="auth-points">
          <div className="auth-point">
            <div className="ap-ic"><BarChart3 /></div>
            Sport-specific AI performance reports
          </div>
          <div className="auth-point">
            <div className="ap-ic"><Target /></div>
            Personalized training & learning plans
          </div>
          <div className="auth-point">
            <div className="ap-ic"><CheckCircle2 /></div>
            Discovered by coaches & academies
          </div>
        </div>
      </div>
    </div>
  )
}

function PasswordInput({ placeholder }: { placeholder: string }) {
  const [show, setShow] = useState(false)
  return (
    <div style={{ position: 'relative' }}>
      <input type={show ? 'text' : 'password'} className="input" placeholder={placeholder} required style={{ paddingRight: 44 }} />
      <button
        type="button"
        onClick={() => setShow(!show)}
        style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-dim)' }}
      >
        {show ? <EyeOff size={17} /> : <Eye size={17} />}
      </button>
    </div>
  )
}

export function PlayerLogin() {
  const navigate = useNavigate()
  const submit = (e: FormEvent) => {
    e.preventDefault()
    navigate('/player/dashboard')
  }
  return (
    <AuthShell
      aside={
        <>
          Don&apos;t have an account? <Link to="/player/register">Create Account</Link>
        </>
      }
    >
      <div className="flex" style={{ gap: 10, marginBottom: 6 }}>
        <span style={{ fontSize: 30 }}>🏃</span>
        <div>
          <div className="auth-title">Player Login</div>
          <div className="auth-sub" style={{ marginBottom: 0 }}>Welcome back, athlete</div>
        </div>
      </div>
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
        <div className="field">
          <label className="label">Email</label>
          <div style={{ position: 'relative' }}>
            <input type="email" className="input" placeholder="you@example.com" required style={{ paddingLeft: 42 }} />
            <Mail size={17} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <PasswordInput placeholder="Enter your password" />
        </div>
        <div className="flex between">
          <label className="flex" style={{ gap: 8, fontSize: 13, color: 'var(--text-muted)', cursor: 'pointer' }}>
            <input type="checkbox" style={{ accentColor: '#3d8bff' }} /> Remember me
          </label>
          <Link to="/player/login" className="link tiny">Forgot Password?</Link>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-lg">
          Login <ArrowRight size={17} />
        </button>
      </form>
      <div className="divider">OR</div>
      <Link to="/coach/login" className="btn btn-outline btn-block btn-sm">
        Login as Coach / Academy
      </Link>
    </AuthShell>
  )
}

export function PlayerRegister() {
  const navigate = useNavigate()
  const submit = (e: FormEvent) => {
    e.preventDefault()
    navigate('/player/dashboard')
  }
  const sports = ['Cricket', 'Football', 'Basketball', 'Volleyball', 'Athletics', 'Other']
  return (
    <AuthShell
      aside={
        <>
          Already have an account? <Link to="/player/login">Login</Link>
        </>
      }
    >
      <div className="flex" style={{ gap: 10, marginBottom: 6 }}>
        <span style={{ fontSize: 30 }}>🚀</span>
        <div>
          <div className="auth-title">Create Athlete Profile</div>
          <div className="auth-sub" style={{ marginBottom: 0 }}>Join TalentTrack AI in under 2 minutes</div>
        </div>
      </div>
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 22 }} className="auth-form">
        <div className="field">
          <label className="label">Full Name</label>
          <div style={{ position: 'relative' }}>
            <input className="input" placeholder="e.g. Arjun Sharma" required style={{ paddingLeft: 42 }} />
            <User size={17} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div style={{ position: 'relative' }}>
            <input type="email" className="input" placeholder="you@example.com" required style={{ paddingLeft: 42 }} />
            <Mail size={17} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <PasswordInput placeholder="Create a strong password" />
        </div>
        <div className="field-row">
          <div className="field">
            <label className="label">Date of Birth</label>
            <div style={{ position: 'relative' }}>
              <input type="date" className="input" required style={{ paddingLeft: 42 }} />
              <Calendar size={17} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <select className="select" defaultValue="">
              <option value="" disabled>Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Location</label>
          <div style={{ position: 'relative' }}>
            <input className="input" placeholder="City, State" required style={{ paddingLeft: 42 }} />
            <MapPin size={17} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
          </div>
        </div>
        <div className="field-row">
          <div className="field">
            <label className="label">Primary Sport</label>
            <select className="select" defaultValue="">
              <option value="" disabled>Select sport</option>
              {sports.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label className="label">Experience Level</label>
            <select className="select" defaultValue="">
              <option value="" disabled>Select experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Playing Position</label>
          <select className="select" defaultValue="">
            <option value="" disabled>Select position</option>
            <option>Fast Bowler</option>
            <option>Spin Bowler</option>
            <option>Batsman (Top Order)</option>
            <option>Wicket-Keeper</option>
            <option>All-Rounder</option>
            <option>Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-lg">
          Create Athlete Profile <ArrowRight size={17} />
        </button>
      </form>
    </AuthShell>
  )
}

export function CoachLogin() {
  const navigate = useNavigate()
  const [role, setRole] = useState('Coach')
  const submit = (e: FormEvent) => {
    e.preventDefault()
    navigate('/coach/dashboard')
  }
  return (
    <AuthShell
      aside={
        <>
          Are you an athlete? <Link to="/player/login">Player Login</Link>
        </>
      }
    >
      <div className="flex" style={{ gap: 10, marginBottom: 6 }}>
        <span style={{ fontSize: 30 }}>🛡️</span>
        <div>
          <div className="auth-title">Coach & Academy Login</div>
          <div className="auth-sub" style={{ marginBottom: 0 }}>Recruit your next star athlete</div>
        </div>
      </div>
      <div className="role-toggle mt-3">
        <button type="button" className={cx('role-opt', role === 'Coach' && 'active')} onClick={() => setRole('Coach')}>
          Coach
        </button>
        <button type="button" className={cx('role-opt', role === 'Academy' && 'active')} onClick={() => setRole('Academy')}>
          Academy
        </button>
      </div>
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 22 }}>
        <div className="field">
          <label className="label">Email</label>
          <div style={{ position: 'relative' }}>
            <input type="email" className="input" placeholder="coach@academy.com" required style={{ paddingLeft: 42 }} />
            <Mail size={17} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <PasswordInput placeholder="Enter your password" />
        </div>
        <div className="flex between">
          <span className="tiny dim">Signing in as: <b style={{ color: 'var(--text)' }}>{role}</b></span>
          <Link to="/coach/login" className="link tiny">Forgot Password?</Link>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-lg">
          Login as {role} <ArrowRight size={17} />
        </button>
      </form>
    </AuthShell>
  )
}
