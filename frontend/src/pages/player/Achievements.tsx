import { Lock } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { PLAYER_NAV } from '../nav'
import { Card, SectionHead, Pill } from '../../components/ui'
import { BADGES } from '../../data/mock'

export default function Achievements() {
  const earned = BADGES.filter((b) => b.earned).length
  return (
    <Layout nav={PLAYER_NAV} title="My Achievements" crumb="Achievements" portal="player" notifCount={2}>
      <SectionHead
        title="AI Skill Badges"
        sub={`${earned} of ${BADGES.length} badges earned · badges appear automatically in your athlete portfolio`}
        action={<Pill color="pill-amber">Next: Balance Expert</Pill>}
      />

      <div className="grid grid-3">
        {BADGES.map((b) => (
          <Card key={b.name} hover className={b.earned ? 'badge-card' : 'badge-card badge-locked'} pad>
            <div className="badge-ic">
              {!b.earned && <Lock size={20} style={{ position: 'absolute', color: 'var(--text-dim)' }} />}
              <span>{b.icon}</span>
              <div className="glow" />
            </div>
            <div className="badge-name">{b.name}</div>
            <div className="badge-desc">{b.desc}</div>
            {b.earned ? (
              <Pill color="pill-green">Unlocked {b.date}</Pill>
            ) : (
              <Pill>Locked</Pill>
            )}
          </Card>
        ))}
      </div>

      <Card glow pad className="mt-4">
        <SectionHead title="Badge criteria" sub="How to unlock every badge" />
        <div style={{ display: 'grid', gap: 8 }}>
          {BADGES.map((b) => (
            <div key={b.name} className="flex between wrap gap-2" style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <div className="flex gap-2">
                <span>{b.icon}</span>
                <span style={{ fontWeight: 600, fontSize: 13.5 }}>{b.name}</span>
              </div>
              <span className="tiny dim">{b.desc}</span>
              {b.earned ? <span className="pill pill-green">✓ Earned</span> : <span className="pill">{b.desc.includes('80') ? 'Close!' : 'In progress'}</span>}
            </div>
          ))}
        </div>
      </Card>
    </Layout>
  )
}
