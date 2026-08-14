import { useState } from 'react'
import { CheckCheck, Trash2 } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { PLAYER_NAV } from '../nav'
import { Card, SectionHead, Pill } from '../../components/ui'
import { NOTIFICATIONS } from '../../data/mock'

const CATS = ['All', 'Report', 'Progress', 'Trial', 'Learning', 'Coach', 'Badge']
const CAT_COLOR: Record<string, string> = {
  Report: 'pill-blue',
  Progress: 'pill-green',
  Trial: 'pill-purple',
  Learning: 'pill-cyan',
  Coach: 'pill-amber',
  Badge: 'pill-red',
}

export default function Notifications() {
  const [cat, setCat] = useState('All')
  const [read, setRead] = useState<number[]>(NOTIFICATIONS.filter((n) => n.read).map((n) => n.id))
  const shown = cat === 'All' ? NOTIFICATIONS : NOTIFICATIONS.filter((n) => n.category === cat)
  const unread = NOTIFICATIONS.length - read.length

  return (
    <Layout nav={PLAYER_NAV} title="Notifications" crumb="Notifications" portal="player" notifCount={unread}>
      <SectionHead
        title="Notification Center"
        sub={`${unread} unread notifications`}
        action={
          <button className="btn btn-ghost btn-sm" onClick={() => setRead(NOTIFICATIONS.map((n) => n.id))}>
            <CheckCheck size={15} /> Mark all as read
          </button>
        }
      />

      <div className="tabs mb-3">
        {CATS.map((c) => (
          <button key={c} className={cat === c ? 'tab active' : 'tab'} onClick={() => setCat(c)}>
            {c} {c === 'All' && <span style={{ opacity: 0.6 }}>({NOTIFICATIONS.length})</span>}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {shown.map((n) => {
          const isRead = read.includes(n.id)
          return (
            <Card key={n.id} hover className={isRead ? 'notif' : 'notif unread'} pad={false}>
              <div className="notif-icon">{n.icon}</div>
              <div className="notif-body">
                <div className="flex between wrap gap-1">
                  <div className="notif-title">{n.title}</div>
                  <Pill color={CAT_COLOR[n.category]}>{n.category}</Pill>
                </div>
                <div className="notif-desc">{n.desc}</div>
                <div className="notif-time">{n.time}</div>
              </div>
              {!isRead && <div className="notif-dot-s" />}
              <button className="icon-btn" style={{ width: 32, height: 32 }} onClick={() => setRead(read.filter((id) => id !== n.id))}>
                <Trash2 size={14} />
              </button>
            </Card>
          )
        })}
      </div>
    </Layout>
  )
}
