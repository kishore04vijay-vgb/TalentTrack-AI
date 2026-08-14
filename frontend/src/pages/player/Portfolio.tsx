import { Link } from 'react-router-dom'
import { Share2, Download, MapPin, Target, Award, FileText, Film, TrendingUp, Star, MessageCircle } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { PLAYER_NAV } from '../nav'
import { Card, SectionHead, Pill, Ring, Avatar, ScoreChip } from '../../components/ui'
import { useAthlete } from '../../context/AthleteContext'
import { ATHLETE, SPORT_META, BADGES, GROWTH } from '../../data/mock'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function Portfolio() {
  const { sport } = useAthlete()
  const meta = SPORT_META[sport]

  return (
    <Layout nav={PLAYER_NAV} title="My Portfolio" crumb="My Portfolio" portal="player" notifCount={2}>
      <div className="grid grid-3">
        <Card glow pad style={{ gridColumn: '1 / -1' }}>
          <div className="flex between wrap gap-4">
            <div className="flex" style={{ gap: 20 }}>
              <Avatar name={ATHLETE.name} size={92} index={1} />
              <div>
                <div style={{ fontSize: 13, color: 'var(--text-dim)' }}>MY ATHLETE PORTFOLIO</div>
                <h2 className="sec-title" style={{ fontSize: 26 }}>{ATHLETE.name}</h2>
                <div className="flex gap-2 mt-1 wrap">
                  <Pill color="pill-blue">{meta.icon} {meta.label}</Pill>
                  <Pill>{ATHLETE.position}</Pill>
                  <Pill><MapPin size={11} /> {ATHLETE.location}</Pill>
                  <Pill>{ATHLETE.experience} Level</Pill>
                </div>
              </div>
            </div>
            <div className="flex" style={{ gap: 18, alignItems: 'center' }}>
              <Ring value={ATHLETE.overallScore} size={110} stroke={10} label="87" sub="AI Score" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button className="btn btn-primary"><Share2 size={15} /> Share Portfolio</button>
                <button className="btn btn-outline"><Download size={15} /> Download Portfolio</button>
              </div>
            </div>
          </div>
        </Card>

        <Card pad>
          <SectionHead title="Performance" action={<Link to="/player/report" className="link small">Full report</Link>} />
          <div className="chart-h" style={{ height: 180 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={GROWTH}>
                <XAxis dataKey="month" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis hide domain={[60, 100]} />
                <Tooltip contentStyle={{ background: '#0e1526', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12 }} />
                <Line type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-2 mt-2 wrap">
            <Pill color="pill-green">▲ +21 pts this year</Pill>
            <Pill color="pill-blue">Balance 81</Pill>
          </div>
        </Card>

        <Card pad>
          <SectionHead title="Achievements & Badges" action={<Link to="/player/achievements" className="link small">View all</Link>} />
          <div className="grid grid-2" style={{ gap: 10 }}>
            {BADGES.filter((b) => b.earned).map((b) => (
              <div key={b.name} className="flex" style={{ gap: 10, padding: 10, borderRadius: 12, background: 'var(--panel)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: 24 }}>{b.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 12.5 }}>{b.name}</div>
                  <div className="tiny dim">{b.date}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2">
            <Pill color="pill-amber"><Award size={12} /> 2 matches · 1 Player of the Match</Pill>
          </div>
        </Card>

        <Card pad>
          <SectionHead title="Videos" action={<Link to="/player/upload" className="link small">Upload</Link>} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { t: 'Bowling Session – Apr 2026', s: '1:36 · Analyzed', c: 'linear-gradient(135deg,#6d28d9,#3d8bff)' },
              { t: 'Match Spell – Mar 2026', s: '2:10 · Analyzed', c: 'linear-gradient(135deg,#0e7490,#22d3ee)' },
              { t: 'Net Session – Jan 2026', s: '1:24 · Analyzed', c: 'linear-gradient(135deg,#1e3a8a,#334155)' },
            ].map((v) => (
              <div key={v.t} className="flex" style={{ gap: 12 }}>
                <div style={{ width: 70, height: 46, borderRadius: 10, background: v.c, display: 'grid', placeItems: 'center', fontSize: 20, flexShrink: 0 }}>
                  🎬
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{v.t}</div>
                  <div className="tiny dim">{v.s}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card pad>
          <SectionHead title="Skill Badges" action={<Star size={16} color="#fbbf24" />} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Pace 138 km/h', 'Swing Bowling', 'Accurate Yorkers', 'Fitness 8.5/10', 'Fielding'].map((s) => (
              <span key={s} className="skill-chip" style={{ fontSize: 13 }}>{s}</span>
            ))}
          </div>
          <div className="mt-3">
            <ScoreChip value={87} />
            <span className="tiny dim"> · Top 12% of {meta.label.toLowerCase()} athletes on platform</span>
          </div>
        </Card>

        <Card pad style={{ gridColumn: '1 / -1' }}>
          <SectionHead title="Coach Feedback" action={<MessageCircle size={16} color="#3d8bff" />} />
          <div className="grid grid-2">
            <div className="ai-insight">
              <Star />
              <span>
                <b>TNCA Scout:</b> "Strong pace and good temperament. Needs to work on follow-through consistency to be state-ready."
              </span>
            </div>
            <div className="ai-insight">
              <FileText />
              <span>
                <b>NCA Analyst:</b> "AI action score of 90 is elite for this age group. Keep the weekly balance drills."
              </span>
            </div>
          </div>
          <div className="flex gap-2 mt-3 wrap">
            <button className="btn btn-primary btn-sm"><FileText size={14} /> AI Reports</button>
            <button className="btn btn-outline btn-sm"><TrendingUp size={14} /> Progress</button>
            <button className="btn btn-outline btn-sm"><Film size={14} /> Certificates</button>
          </div>
        </Card>
      </div>
    </Layout>
  )
}
