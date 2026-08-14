import { NavItem } from '../components/Layout'

export const PLAYER_NAV: NavItem[] = [
  { to: '/player/dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { to: '/player/upload', label: 'Upload Video', icon: 'Upload' },
  { to: '/player/report', label: 'My Analysis', icon: 'FileText' },
  { to: '/player/timeline', label: 'My Growth', icon: 'TrendingUp' },
  { to: '/player/compare', label: 'Video Comparison', icon: 'GitCompare' },
  { to: '/player/training', label: 'Training Plan', icon: 'Calendar' },
  { to: '/player/learn', label: 'Learning Hub', icon: 'GraduationCap' },
  { to: '/player/portfolio', label: 'My Portfolio', icon: 'User' },
  { to: '/player/resume', label: 'My Resume', icon: 'ScrollText' },
  { to: '/player/trials', label: 'Trials', icon: 'MapPin' },
  { to: '/player/notifications', label: 'Notifications', icon: 'Bell' },
  { to: '/player/settings', label: 'Settings', icon: 'Settings' },
]

export const COACH_NAV: NavItem[] = [
  { to: '/coach/dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { to: '/coach/players', label: 'All Players', icon: 'Users' },
  { to: '/coach/search', label: 'Search Players', icon: 'Search' },
  { to: '/coach/recommendations', label: 'AI Recommendations', icon: 'Cpu' },
  { to: '/coach/compare', label: 'Compare Players', icon: 'GitCompare' },
  { to: '/coach/shortlisted', label: 'Shortlisted Players', icon: 'Star' },
  { to: '/coach/invitations', label: 'Invitations', icon: 'Send' },
  { to: '/coach/analytics', label: 'Recruitment Analytics', icon: 'BarChart' },
  { to: '/coach/notifications', label: 'Notifications', icon: 'Bell' },
  { to: '/coach/profile', label: 'Profile', icon: 'User' },
  { to: '/coach/settings', label: 'Settings', icon: 'Settings' },
]
