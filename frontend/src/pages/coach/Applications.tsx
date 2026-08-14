import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { COACH_NAV } from '../nav'
import { Card, SectionHead, Pill, Avatar } from '../../components/ui'
import { APPLICATIONS, PLAYERS, SPORT_META } from '../../data/mock'

const STATUS_COLOR: Record<string, string> = {
  Pending: 'pill-amber',
  Shortlisted: 'pill-blue',
  Selected: 'pill-green',
  Rejected: 'pill-red',
}

export default function Applications() {
  const [tab, setTab] = useState('All')
  const tabs = ['All', 'Pending', 'Shortlisted', 'Selected', 'Rejected']
  const shown = tab === 'All' ? APPLICATIONS : APPLICATIONS.filter((a) => a.status === tab)

  return (
    <Layout nav={COACH_NAV} title="Applications" crumb="Trial Applications" portal="coach" notifCount={3}>
      <SectionHead
        title="Trial Applications"
        sub="Manage every applicant for your published trials"
        action={<Pill color="pill-blue">{APPLICATIONS.length} total applications</Pill>}
      />

      <div className="tabs mb-3">
        {tabs.map((t) => (
          <button key={t} className={tab === t ? 'tab active' : 'tab'} onClick={() => setTab(t)}>
            {t} {t !== 'All' && <span style={{ opacity: 0.6 }}>({APPLICATIONS.filter((a) => a.status === t).length})</span>}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {shown.map((a) => {
          const p = PLAYERS.find((x) => x.id === a.playerId)!
          const m = SPORT_META[a.sport]
          return (
            <Card key={a.id} hover className="notif" pad={false}>
              <Avatar name={p.name} index={p.id} size={46} />
              <div className="notif-body">
                <div className="flex between wrap gap-1">
                  <div className="notif-title">{p.name}</div>
                  <span className={`pill ${STATUS_COLOR[a.status]}`}>{a.status}</span>
                </div>
                <div className="flex gap-2 mt-1 wrap">
                  <span className="tiny dim">{m.icon} {m.label} · {a.position}</span>
                  <span className="tiny dim">AI Score: <b style={{ color: 'var(--text)' }}>{a.aiScore}</b></span>
                  <span className="tiny dim">Applied {a.date}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link to={`/coach/player/${a.playerId}`} className="btn btn-outline btn-sm"><Eye size={13} /> Profile</Link>
                {a.status === 'Pending' && (
                  <>
                    <button className="btn btn-primary btn-sm">Shortlist</button>
                    <button className="btn btn-danger btn-sm">Reject</button>
                  </>
                )}
              </div>
            </Card>
          )
        })}
      </div>
    </Layout>
  )
}
