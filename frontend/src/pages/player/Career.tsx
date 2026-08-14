import { Cpu, TrendingUp } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { PLAYER_NAV } from '../nav'
import { Card, SectionHead, Pill, Ring } from '../../components/ui'
import { CAREER_POTENTIAL } from '../../data/mock'

export default function CareerPotential() {
  return (
    <Layout nav={PLAYER_NAV} title="Career Potential" crumb="Career Potential" portal="player" notifCount={2}>
      <SectionHead
        title="Career Potential"
        sub="AI projection of the highest level you can compete at with your current performance"
        action={<Pill color="pill-blue"><TrendingUp size={12} /> Projection updated Apr 2026</Pill>}
      />

      <Card glow pad>
        <div className="flex wrap" style={{ gap: 36, justifyContent: 'center', alignItems: 'center' }}>
          {CAREER_POTENTIAL.map((c) => (
            <div key={c.level} className="center">
              <Ring value={c.value} size={150} stroke={11} label={`${c.value}%`} sub={c.level} color={c.color} />
              <div className="tiny dim mt-2">{c.level} Level</div>
            </div>
          ))}
        </div>
      </Card>

      <Card pad className="mt-4">
        <div className="ai-insight">
          <Cpu />
          <span>
            <b>AI Insight:</b> Your current performance indicates strong <b>district-level potential (92%)</b>. Focus on technique consistency and knee-lift improvement to raise your state-level readiness (76% → 85%+). National-level projection rises to 48% once you sustain an overall score of 90 across two consecutive reports.
          </span>
        </div>
        <div className="mt-3" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {CAREER_POTENTIAL.map((c, i) => (
            <div key={c.level}>
              <div className="flex between mb-1">
                <span className="tiny" style={{ fontWeight: 600 }}>{c.level} readiness</span>
                <span className="tiny dim">{c.value}%</span>
              </div>
              <div className="bar">
                <div className="bar-fill" style={{ width: `${c.value}%`, background: c.color, animationDelay: `${i * 0.15}s` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Pill color="pill-green">🎯 Recommended next: compete in District trials (Aug 22)</Pill>
        </div>
      </Card>
    </Layout>
  )
}
