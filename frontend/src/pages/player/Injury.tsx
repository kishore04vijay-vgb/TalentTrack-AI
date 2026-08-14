import { Shield, HeartPulse, Footprints } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { PLAYER_NAV } from '../nav'
import { Card, SectionHead, Pill } from '../../components/ui'
import { INJURY } from '../../data/mock'

export default function InjuryRisk() {
  return (
    <Layout nav={PLAYER_NAV} title="Injury Risk" crumb="Injury Risk" portal="player" notifCount={2}>
      <SectionHead
        title="Injury Risk Dashboard"
        sub="AI assessment of current load risk across key joints"
      />

      <div className="grid grid-3">
        <Card glow pad style={{ gridColumn: '1 / -1' }}>
          <div className="flex between wrap gap-4">
            <div className="flex" style={{ gap: 16, alignItems: 'center' }}>
              <div className="stat-icon pulse-ring" style={{ background: 'rgba(52,211,153,0.14)', borderColor: 'rgba(52,211,153,0.4)', color: 'var(--green)' }}>
                <Shield />
              </div>
              <div>
                <div className="tiny dim">Current Risk Level</div>
                <div className={`risk-pill ${INJURY.risk === 'Low' ? 'risk-low' : INJURY.risk === 'Moderate' ? 'risk-mid' : 'risk-high'} mt-1`}>
                  {INJURY.risk}
                </div>
              </div>
            </div>
            <div style={{ minWidth: 220, flex: 1 }}>
              <div className="flex between mb-1">
                <span className="tiny" style={{ fontWeight: 600 }}>Joint stress today</span>
                <span className="tiny dim">Safe zone</span>
              </div>
              <div className="bar">
                <div className="bar-fill" style={{ width: '28%' }} />
              </div>
              <div className="tiny dim mt-1">You can safely continue your normal training load.</div>
            </div>
          </div>
        </Card>

        <Card pad>
          <SectionHead title="Possible Areas" action={<HeartPulse size={16} color="#fb7185" />} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {INJURY.areas.map((a) => (
              <div key={a.name} className="flex between" style={{ padding: 12, borderRadius: 12, background: 'var(--panel)', border: '1px solid var(--border)' }}>
                <div className="flex" style={{ gap: 10 }}>
                  <Footprints size={17} color="var(--text-dim)" />
                  <span style={{ fontWeight: 600, fontSize: 14 }}>{a.name}</span>
                </div>
                <div className="flex" style={{ gap: 8 }}>
                  <span className={`area-dot`} style={{ background: a.dot, alignSelf: 'center' }} />
                  <span className={`pill ${a.level === 'Low' ? 'pill-green' : 'pill-amber'}`} style={{ fontSize: 11 }}>{a.level}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card pad>
          <SectionHead title="Training Safety Suggestions" action={<Pill color="pill-green">AI Generated</Pill>} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {INJURY.tips.map((t, i) => (
              <div key={i} className="flex" style={{ gap: 12, alignItems: 'flex-start' }}>
                <div className="step-num" style={{ width: 26, height: 26, margin: 0, flexShrink: 0, fontSize: 11 }}>{i + 1}</div>
                <span className="tiny muted">{t}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  )
}
