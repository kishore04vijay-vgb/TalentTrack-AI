import { ChevronDown, Trophy, TrendingUp } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { PLAYER_NAV } from '../nav'
import { Card, SectionHead, Pill, ScoreChip } from '../../components/ui'
import { TIMELINE } from '../../data/mock'

export default function GrowthTimeline() {
  return (
    <Layout nav={PLAYER_NAV} title="My Growth" crumb="My Growth" portal="player" notifCount={2}>
      <SectionHead
        title="My Growth Timeline"
        sub="My AI score evolution, skill improvements, badges and milestones"
        action={<Pill color="pill-green"><TrendingUp size={12} /> +21 points in 4 months</Pill>}
      />

      <Card pad>
        <div className="timeline">
          {TIMELINE.map((t, i) => (
            <div key={t.month} className="t-item">
              <div className="t-dot">
                <div className="inner" />
              </div>
              <Card className="t-card" hover>
                <div className="flex between wrap gap-2">
                  <div className="t-month">
                    {t.month}
                    <ScoreChip value={t.score} />
                    <span className="pill pill-green">▲ +{i === 0 ? t.score - 0 : t.score - TIMELINE[i - 1].score} pts</span>
                  </div>
                  {t.badge && <Pill color="pill-amber">{t.badge}</Pill>}
                </div>
                <div className="tiny dim mt-1">{t.milestone}</div>
                <div className="flex gap-2 mt-2 wrap">
                  {t.skills.map((s) => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
                {i < TIMELINE.length - 1 && (
                  <div className="mt-2" style={{ display: 'flex', justifyContent: 'center', color: 'var(--text-dim)' }}>
                    <ChevronDown size={20} />
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </Card>

      <Card glow pad className="mt-4">
        <div className="flex between wrap gap-2">
          <div className="flex" style={{ gap: 10 }}>
            <div className="stat-icon"><Trophy /></div>
            <div>
              <div style={{ fontWeight: 700 }}>Next milestone</div>
              <div className="tiny dim">Reach AI score 90 to unlock <b>Consistency Champion</b> badge</div>
            </div>
          </div>
          <div className="bar" style={{ width: 240 }}>
            <div className="bar-fill" style={{ width: '78%' }} />
          </div>
          <span className="pill pill-purple">87 / 90</span>
        </div>
      </Card>
    </Layout>
  )
}
