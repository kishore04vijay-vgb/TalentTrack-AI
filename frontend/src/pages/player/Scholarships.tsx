import { Link } from 'react-router-dom'
import { Wallet, CalendarDays, Building2, ArrowRight } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { PLAYER_NAV } from '../nav'
import { Card, SectionHead, Pill } from '../../components/ui'
import { useAthlete } from '../../context/AthleteContext'
import { SCHOLARSHIPS, SPORT_META } from '../../data/mock'

export default function Scholarships() {
  const { sport } = useAthlete()
  const meta = SPORT_META[sport]
  const list = SCHOLARSHIPS.filter((s) => s.sport === sport)

  return (
    <Layout nav={PLAYER_NAV} title="Scholarships" crumb="Scholarships" portal="player" notifCount={2}>
      <SectionHead
        title="Opportunities For You"
        sub={`Only ${meta.label} scholarships · filtered by your sport and eligibility`}
        action={<Pill color="pill-blue">{meta.icon} {meta.label} only</Pill>}
      />

      <div className="grid grid-2">
        {list.map((s) => (
          <Card key={s.id} hover pad>
            <div className="flex between gap-2">
              <div className="flex" style={{ gap: 12 }}>
                <div className="stat-icon"><Wallet /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{s.name}</div>
                  <div className="tiny dim flex" style={{ gap: 5 }}><Building2 size={12} /> {s.org}</div>
                </div>
              </div>
              <span className={`pill ${s.type === 'Government' ? 'pill-green' : s.type === 'Academy' ? 'pill-purple' : s.type === 'Sports Quota' ? 'pill-cyan' : 'pill-amber'}`}>{s.type}</span>
            </div>
            <div className="trial-meta mt-3">
              <div className="trial-meta-row"><CalendarDays /> Deadline: {s.deadline}</div>
              <div className="trial-meta-row">💸 Amount: <b style={{ color: 'var(--text)' }}>{s.amount}</b></div>
              <div className="trial-meta-row">📌 Eligibility: {s.eligibility}</div>
            </div>
            <button className="btn btn-primary btn-sm btn-block mt-3">
              Apply Now <ArrowRight size={14} />
            </button>
          </Card>
        ))}
      </div>
    </Layout>
  )
}
