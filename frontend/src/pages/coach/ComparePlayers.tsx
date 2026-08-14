import { useState } from 'react'
import { GitCompare, Trophy } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { COACH_NAV } from '../nav'
import { Card, SectionHead, Pill, Avatar } from '../../components/ui'
import { PLAYERS, SPORT_META } from '../../data/mock'

const METRICS = [
  { key: 'aiScore', label: 'AI Score' },
  { key: 'speed', label: 'Speed' },
  { key: 'balance', label: 'Balance' },
  { key: 'technique', label: 'Technique' },
  { key: 'improvement', label: 'Improvement %' },
] as const

export default function ComparePlayers() {
  const [ids, setIds] = useState<number[]>([1, 5])

  const toggle = (id: number) => {
    setIds((cur) =>
      cur.includes(id) ? cur.filter((x) => x !== id) : cur.length >= 4 ? cur : [...cur, id],
    )
  }

  const selected = PLAYERS.filter((p) => ids.includes(p.id))
  const maxOf = (key: (typeof METRICS)[number]['key']) =>
    Math.max(...selected.map((p) => p[key] as number))

  return (
    <Layout nav={COACH_NAV} title="Compare Players" crumb="Compare Players" portal="coach" notifCount={3}>
      <SectionHead
        title="Compare Players"
        sub="Select 2–4 athletes to compare their AI performance side by side"
        action={<Pill color="pill-blue"><GitCompare size={12} /> {selected.length}/4 selected</Pill>}
      />

      <Card glow pad className="mb-4">
        <SectionHead title="Step 1 · Select athletes" sub="Click to add or remove a player" />
        <div className="grid grid-4">
          {PLAYERS.map((p) => {
            const m = SPORT_META[p.sport]
            const on = ids.includes(p.id)
            return (
              <button
                key={p.id}
                onClick={() => toggle(p.id)}
                className="card"
                style={{
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: 14,
                  border: on ? '1px solid var(--grad-border)' : '1px solid var(--border)',
                  background: on ? 'var(--grad-soft)' : 'var(--panel)',
                }}
              >
                <div className="flex" style={{ gap: 10 }}>
                  <Avatar name={p.name} index={p.id} size={40} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13.5 }}>{p.name}</div>
                    <div className="tiny dim">{m.icon} {m.label} · {p.position}</div>
                  </div>
                </div>
                <div className="flex between mt-2">
                  <span className="pill pill-blue">AI {p.aiScore}</span>
                  {on ? <span className="pill pill-green">✓ Selected</span> : <span className="pill">+ Add</span>}
                </div>
              </button>
            )
          })}
        </div>
      </Card>

      <Card pad>
        <SectionHead title="Step 2 · Side-by-side comparison" sub="Best value per metric is highlighted" />
        {selected.length < 2 ? (
          <div className="empty">
            <div className="empty-ic">🆚</div>
            <h3>Select at least 2 players</h3>
            <p>Choose athletes above to build the comparison table.</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '12px 14px', color: 'var(--text-muted)', fontSize: 12, borderBottom: '1px solid var(--border)' }}>Metric</th>
                  {selected.map((p) => (
                    <th key={p.id} style={{ padding: '12px 14px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{p.name}</div>
                      <div className="tiny dim">{SPORT_META[p.sport].label} · {p.position}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {METRICS.map((m) => {
                  const best = maxOf(m.key)
                  return (
                    <tr key={m.key} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '13px 14px', fontWeight: 600, fontSize: 13.5 }}>{m.label}</td>
                      {selected.map((p) => {
                        const v = p[m.key] as number
                        const isBest = v === best
                        return (
                          <td key={p.id} style={{ padding: '13px 14px', textAlign: 'center' }}>
                            <span
                              className={isBest ? 'pill pill-green' : 'pill'}
                              style={{ fontWeight: 700 }}
                            >
                              {v}{isBest && ' 🏆'}
                            </span>
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {selected.length >= 2 && (
        <Card pad className="mt-4">
          <div className="flex between wrap gap-2">
            <div className="flex" style={{ gap: 10 }}>
              <div className="stat-icon"><Trophy /></div>
              <div>
                <div style={{ fontWeight: 700 }}>AI verdict</div>
                <div className="tiny dim">
                  {selected[0].aiScore >= selected[1].aiScore ? selected[0].name : selected[1].name} has the highest overall AI score among the selected players.
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-outline btn-sm">Shortlist best match</button>
              <button className="btn btn-primary btn-sm">Invite for trial</button>
            </div>
          </div>
        </Card>
      )}
    </Layout>
  )
}
