import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Users } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { COACH_NAV } from '../nav'
import { Card, SectionHead, Pill, Avatar, ScoreChip } from '../../components/ui'
import { PLAYERS, SPORT_META } from '../../data/mock'

export default function AllPlayers() {
  return (
    <Layout nav={COACH_NAV} title="All Players" crumb="All Players" portal="coach" notifCount={3}>
      <SectionHead
        title="All Registered Players"
        sub={`${PLAYERS.length} athletes on TalentTrack AI · open any player's report`}
        action={<Pill color="pill-blue"><Users size={12} /> {PLAYERS.length} players</Pill>}
      />

      <div className="grid grid-4">
        {PLAYERS.map((p, i) => {
          const m = SPORT_META[p.sport]
          return (
            <Card key={p.id} hover pad className="athlete-card" style={{ animationDelay: `${i * 0.03}s` }}>
              <div className="ath-top">
                <Avatar name={p.name} index={p.id} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="ath-name">{p.name}</div>
                  <div className="ath-meta">{m.icon} {m.label}</div>
                </div>
                <ScoreChip value={p.aiScore} />
              </div>
              <div className="flex gap-1 wrap">
                <span className="pill">{p.position}</span>
                <span className="pill">{p.age} yrs</span>
                <span className="pill">📍 {p.location}</span>
              </div>
              <div className="flex gap-1 wrap">
                <span className="pill pill-blue">Speed {p.speed}</span>
                <span className="pill pill-green">Bal {p.balance}</span>
                <span className="pill pill-purple">Tech {p.technique}</span>
              </div>
              <div className="ath-foot">
                <span className="trend-up">▲ {p.improvement}% improvement</span>
              </div>
              <Link to={`/coach/player/${p.id}`} className="btn btn-primary btn-sm btn-block">
                View Report <FileText size={13} />
              </Link>
            </Card>
          )
        })}
      </div>

      <Card pad className="mt-4">
        <div className="flex between wrap gap-2">
          <div className="flex" style={{ gap: 10 }}>
            <div className="stat-icon"><ArrowRight /></div>
            <div>
              <div style={{ fontWeight: 700 }}>Looking for something specific?</div>
              <div className="tiny dim">Use filters for sport, age, location and AI metrics</div>
            </div>
          </div>
          <Link to="/coach/search" className="btn btn-primary btn-sm">Search Players</Link>
        </div>
      </Card>
    </Layout>
  )
}
