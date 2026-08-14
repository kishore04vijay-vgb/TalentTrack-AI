import { useState } from 'react'
import { MapPin, CalendarDays, Users, CheckCircle2, ArrowRight } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { PLAYER_NAV } from '../nav'
import { Card, SectionHead, Pill } from '../../components/ui'
import { useAthlete } from '../../context/AthleteContext'
import { TRIALS, SPORT_META } from '../../data/mock'

export default function Trials() {
  const { sport } = useAthlete()
  const meta = SPORT_META[sport]
  const list = TRIALS.filter((t) => t.sport === sport)
  const [applied, setApplied] = useState<number[]>([])

  return (
    <Layout nav={PLAYER_NAV} title="My Trials" crumb="Trials" portal="player" notifCount={2}>
      <SectionHead
        title="Find My Next Opportunity"
        sub={`Live ${meta.label} trials matched to my profile (U-19 · ${meta.label})`}
        action={<Pill color="pill-blue">{meta.icon} {meta.label} trials only</Pill>}
      />

      <div className="grid grid-2">
        {list.map((t) => {
          const done = applied.includes(t.id)
          return (
            <Card key={t.id} hover pad>
              <div className="trial-head">
                <div>
                  <div className="trial-title">{t.name}</div>
                  <div className="trial-org">{t.org}</div>
                </div>
                <span className="pill pill-purple">{t.ageGroup}</span>
              </div>
              <div className="trial-meta mt-2">
                <div className="trial-meta-row"><MapPin /> {t.location}</div>
                <div className="trial-meta-row"><CalendarDays /> {t.date}</div>
                <div className="trial-meta-row"><Users /> {t.positions} positions open</div>
                <div className="trial-meta-row">📌 Eligibility: {t.eligibility}</div>
              </div>
              <div className="flex gap-2 mt-3">
                {done ? (
                  <span className="btn btn-sm btn-block" style={{ background: 'rgba(52,211,153,0.14)', color: 'var(--green)', borderColor: 'rgba(52,211,153,0.35)', pointerEvents: 'none' }}>
                    <CheckCircle2 size={15} /> Applied
                  </span>
                ) : (
                  <button className="btn btn-primary btn-sm btn-block" onClick={() => setApplied([...applied, t.id])}>
                    Apply <ArrowRight size={14} />
                  </button>
                )}
                <button className="btn btn-outline btn-sm">Details</button>
              </div>
            </Card>
          )
        })}
      </div>
    </Layout>
  )
}
