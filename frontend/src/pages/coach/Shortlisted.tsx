import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Eye, Send, UserPlus } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { COACH_NAV } from '../nav'
import { Card, SectionHead, Pill, Avatar, ScoreChip } from '../../components/ui'
import { PLAYERS, SPORT_META } from '../../data/mock'

export default function Shortlisted() {
  const ids = [1, 2, 5, 6]
  const list = PLAYERS.filter((p) => ids.includes(p.id))
  const [removed, setRemoved] = useState<number[]>([])

  return (
    <Layout nav={COACH_NAV} title="Shortlisted Players" crumb="Shortlisted Players" portal="coach" notifCount={3}>
      <SectionHead
        title="Shortlisted Players"
        sub={`${list.length - removed.length} players in your shortlist`}
        action={<button className="btn btn-outline btn-sm"><Send size={14} /> Invite all to next trial</button>}
      />

      <div className="grid grid-2">
        {list.filter((p) => !removed.includes(p.id)).map((p) => {
          const m = SPORT_META[p.sport]
          return (
            <Card key={p.id} hover pad>
              <div className="flex between gap-2">
                <div className="flex" style={{ gap: 13 }}>
                  <Avatar name={p.name} index={p.id} />
                  <div>
                    <div style={{ fontWeight: 700 }}>{p.name}</div>
                    <div className="tiny dim">{m.icon} {m.label} · {p.position} · {p.age} yrs</div>
                  </div>
                </div>
                <ScoreChip value={p.aiScore} />
              </div>
              <div className="flex gap-2 mt-3 wrap">
                <span className="pill pill-green">▲ {p.improvement}%</span>
                <span className="pill pill-blue">Speed {p.speed}</span>
                <span className="pill pill-purple">Balance {p.balance}</span>
              </div>
              <div className="flex gap-2 mt-3">
                <Link to={`/coach/player/${p.id}`} className="btn btn-outline btn-sm" style={{ flex: 1 }}><Eye size={13} /> View</Link>
                <button className="btn btn-primary btn-sm" style={{ flex: 1 }}><Send size={13} /> Invite</button>
                <button className="btn btn-ghost btn-sm" onClick={() => setRemoved([...removed, p.id])}><Star size={13} color="#fbbf24" /></button>
              </div>
            </Card>
          )
        })}
      </div>

      <Card pad className="mt-4">
        <div className="flex between wrap gap-2">
          <div className="flex" style={{ gap: 10 }}>
            <div className="stat-icon"><UserPlus /></div>
            <div>
              <div style={{ fontWeight: 700 }}>Shortlist tip</div>
              <div className="tiny dim">Players with 90%+ match are 3× more likely to accept a trial invitation</div>
            </div>
          </div>
          <Link to="/coach/recommendations" className="btn btn-outline btn-sm">Discover more AI matches</Link>
        </div>
      </Card>
    </Layout>
  )
}
