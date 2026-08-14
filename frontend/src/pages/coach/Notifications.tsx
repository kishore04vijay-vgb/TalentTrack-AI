import { useState } from 'react'
import { CheckCheck } from 'lucide-react'
import { Layout } from '../../components/Layout'
import { COACH_NAV } from '../nav'
import { Card, SectionHead, Pill } from '../../components/ui'
import { COACH_NOTIFICATIONS } from '../../data/mock'

export default function CoachNotifications() {
  const [read, setRead] = useState<number[]>(COACH_NOTIFICATIONS.filter((n) => n.read).map((n) => n.id))
  const unread = COACH_NOTIFICATIONS.length - read.length

  return (
    <Layout nav={COACH_NAV} title="Notifications" crumb="Notifications" portal="coach" notifCount={unread}>
      <SectionHead
        title="Coach Notifications"
        sub={`${unread} unread notifications`}
        action={
          <button className="btn btn-ghost btn-sm" onClick={() => setRead(COACH_NOTIFICATIONS.map((n) => n.id))}>
            <CheckCheck size={15} /> Mark all read
          </button>
        }
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {COACH_NOTIFICATIONS.map((n) => {
          const isRead = read.includes(n.id)
          return (
            <Card key={n.id} hover className={isRead ? 'notif' : 'notif unread'} pad={false}>
              <div className="notif-icon">{n.icon}</div>
              <div className="notif-body">
                <div className="flex between wrap gap-1">
                  <div className="notif-title">{n.title}</div>
                  <Pill color={n.category === 'Trial' ? 'pill-purple' : n.category === 'Coach' ? 'pill-blue' : 'pill-green'}>{n.category}</Pill>
                </div>
                <div className="notif-desc">{n.desc}</div>
                <div className="notif-time">{n.time}</div>
              </div>
              {!isRead && <div className="notif-dot-s" />}
            </Card>
          )
        })}
      </div>
    </Layout>
  )
}
