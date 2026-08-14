import { Link } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ArrowRight, Zap, Shield, TrendingUp, Calendar } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { PLAYER_NAV } from '../nav'
import { Card, SectionHead, Progress, ScoreChip, Pill } from '../../components/ui'
import { useAthlete } from '../../context/AthleteContext'
import {
  PERFORMANCE_OVERVIEW,
  GROWTH,
  RECOMMENDATIONS,
  SPORT_META,
  ATHLETE,
  NOTIFICATIONS,
  BADGES,
  INJURY,
  TRAINING_PLAN,
} from '../../data/mock'

const greeting = () => {
  const h = new Date().getHours()
  if (h < 12) return 'Good Morning'
  if (h < 17) return 'Good Afternoon'
  return 'Good Evening'
}

export default function PlayerDashboard() {
  const { sport } = useAthlete()
  const meta = SPORT_META[sport]
  const recs = RECOMMENDATIONS.filter((r) => r.sport === sport).slice(0, 3)
  const unread = NOTIFICATIONS.filter((n) => !n.read).length
  const metricCards = [
    { l: 'Overall', v: PERFORMANCE_OVERVIEW.overall, color: 'grad' },
    { l: 'Speed', v: PERFORMANCE_OVERVIEW.speed, color: '#3d8bff' },
    { l: 'Balance', v: PERFORMANCE_OVERVIEW.balance, color: '#34d399' },
    { l: 'Technique', v: PERFORMANCE_OVERVIEW.technique, color: '#a855f7' },
    { l: 'Consistency', v: PERFORMANCE_OVERVIEW.consistency, color: '#f59e0b' },
  ]

  return (
    <Layout nav={PLAYER_NAV} title="My Dashboard" crumb="Dashboard" portal="player" notifCount={unread}>
      <Card glow className="welcome-banner mb-4">
        <div className="flex between wrap gap-3">
          <div>
            <div className="flex" style={{ gap: 10 }}>
              <span style={{ fontSize: 30 }}>👋</span>
              <div>
                <h2 className="sec-title">{greeting()}, {ATHLETE.name.split(' ')[0]} 👋</h2>
                <p className="sec-sub">
                  This is your personal performance space — only your data, your sport, your progress.
                </p>
              </div>
            </div>
            <div className="mt-3" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span className="pill pill-blue">My Sport: {meta.icon} {meta.label}</span>
              <span className="pill pill-purple">My Level: {ATHLETE.level}</span>
              <span className="pill pill-green">My AI Score: {ATHLETE.overallScore}</span>
              <span className="pill pill-cyan">My Improvement: +{ATHLETE.improvement}%</span>
            </div>
          </div>
          <div className="flex gap-2 wrap">
            <Link to="/player/upload" className="btn btn-primary">
              Upload My Video <ArrowRight size={16} />
            </Link>
            <Link to="/player/report" className="btn btn-outline">View My Analysis</Link>
          </div>
        </div>
      </Card>

      <div className="grid grid-4 mb-4">
        <Card hover pad className="stat" style={{ background: 'var(--grad-soft)', borderColor: 'var(--grad-border)' }}>
          <div className="stat-icon pulse-ring"><Zap /></div>
          <div>
            <div className="stat-value text-grad">{ATHLETE.overallScore}<span style={{ fontSize: 15, color: 'var(--text-muted)' }}>/100</span></div>
            <div className="stat-label">My Overall AI Score</div>
          </div>
          <div><Progress value={ATHLETE.overallScore} /></div>
        </Card>

        <Card hover pad className="stat">
          <div className="stat-icon"><TrendingUp /></div>
          <div>
            <div className="stat-value">{ATHLETE.improvement}%</div>
            <div className="stat-label">My Improvement</div>
          </div>
          <span className="stat-sub up">▲ +8 points this month</span>
        </Card>

        <Link to="/player/injury" className="card card-hover card-pad stat" style={{ textDecoration: 'none' }}>
          <div className="stat-icon"><Shield /></div>
          <div>
            <div className="stat-value" style={{ color: 'var(--green)' }}>{INJURY.risk}</div>
            <div className="stat-label">My Injury Risk</div>
          </div>
          <span className="stat-sub" style={{ color: 'var(--blue)' }}>View details →</span>
        </Link>

        <Link to="/player/training" className="card card-hover card-pad stat" style={{ textDecoration: 'none' }}>
          <div className="stat-icon"><Calendar /></div>
          <div>
            <div className="stat-value" style={{ fontSize: 22 }}>Week plan</div>
            <div className="stat-label">My Training Plan</div>
          </div>
          <span className="stat-sub" style={{ color: 'var(--blue)' }}>7 days · next: {TRAINING_PLAN[0].focus} →</span>
        </Link>
      </div>

      <div className="grid grid-2 mb-4">
        <Card glow pad>
          <SectionHead
            title="My Latest Analysis"
            sub={`${meta.icon} ${meta.label} · from my latest practice video`}
            action={<Link to="/player/report" className="btn btn-ghost btn-sm">Full report <ArrowRight size={14} /></Link>}
          />
          <div className="flex between wrap gap-3">
            <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {metricCards.map((m) => (
                <div key={m.l}>
                  <div className="flex between mb-1">
                    <span className="tiny" style={{ fontWeight: 600 }}>{m.l}</span>
                    <span className="tiny dim">{m.v}</span>
                  </div>
                  <Progress value={m.v} color={m.color} h={7} />
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="stat-value text-grad" style={{ fontSize: 44 }}>{PERFORMANCE_OVERVIEW.overall}</div>
              <div className="tiny dim">My AI Score</div>
              <div className="flex gap-1 mt-2" style={{ justifyContent: 'center' }}>
                <Pill color="pill-green">✓ Excellent Balance</Pill>
                <Pill color="pill-blue">✓ Strong Technique</Pill>
              </div>
            </div>
          </div>
        </Card>

        <Card pad>
          <SectionHead
            title="My AI Recommendations"
            sub={`Personalized for my ${meta.label.toLowerCase()} profile`}
            action={<Link to="/player/learn" className="link small">Learning Hub</Link>}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {recs.map((r) => (
              <Link key={r.id} to="/player/learn" className="card card-hover" style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 12 }}>
                <div className="stat-icon" style={{ width: 38, height: 38, flexShrink: 0 }}>{r.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 13.5 }}>{r.title}</div>
                  <div className="tiny dim">{r.desc}</div>
                </div>
                <ArrowRight size={15} color="var(--text-dim)" style={{ flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-2">
        <Card glow pad>
          <SectionHead title="My Performance Growth" sub="My AI score across the last 4 months" action={<Pill color="pill-green">▲ +21 points</Pill>} />
          <div className="chart-h">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={GROWTH} margin={{ top: 6, right: 8, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="grow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3d8bff" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3d8bff" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} domain={[60, 100]} />
                <Tooltip contentStyle={{ background: '#0e1526', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, color: '#e7eef8' }} labelStyle={{ color: '#9aa8bd' }} />
                <Area type="monotone" dataKey="score" stroke="url(#strokeGrad)" strokeWidth={3} fill="url(#grow)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card pad>
          <SectionHead title="My Recent Notifications" action={<Link to="/player/notifications" className="link small">View all</Link>} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {NOTIFICATIONS.slice(0, 4).map((n) => (
              <div key={n.id} className={n.read ? 'notif' : 'notif unread'}>
                <div className="notif-icon">{n.icon}</div>
                <div className="notif-body">
                  <div className="notif-title">{n.title}</div>
                  <div className="notif-desc">{n.desc}</div>
                </div>
                <div className="tiny dim" style={{ flexShrink: 0 }}>{n.time}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card pad>
          <SectionHead title="My Skill Badges" action={<Link to="/player/achievements" className="link small">All badges</Link>} />
          <div className="grid grid-3" style={{ gap: 12 }}>
            {BADGES.filter((b) => b.earned).map((b) => (
              <div key={b.name} className="flex gap-2" style={{ padding: 12, borderRadius: 12, background: 'var(--panel)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: 26 }}>{b.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{b.name}</div>
                  <div className="tiny dim">{b.date}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  )
}
