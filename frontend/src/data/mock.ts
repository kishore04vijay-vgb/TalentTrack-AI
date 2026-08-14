export type Sport = 'cricket' | 'football' | 'basketball' | 'volleyball' | 'athletics'

export const SPORT_META: Record<Sport, { label: string; icon: string; color: string }> = {
  cricket: { label: 'Cricket', icon: '🏏', color: '#3d8bff' },
  football: { label: 'Football', icon: '⚽', color: '#34d399' },
  basketball: { label: 'Basketball', icon: '🏀', color: '#f59e0b' },
  volleyball: { label: 'Volleyball', icon: '🏐', color: '#fb7185' },
  athletics: { label: 'Athletics', icon: '🏃', color: '#a855f7' },
}

export const SPORTS: Sport[] = ['cricket', 'football', 'basketball', 'volleyball', 'athletics']

export const ATHLETE = {
  name: 'Arjun Sharma',
  email: 'arjun.sharma@gmail.com',
  password: '',
  dob: '2006-05-12',
  gender: 'Male',
  location: 'Chennai, Tamil Nadu',
  sport: 'cricket' as Sport,
  position: 'Fast Bowler',
  experience: 'Intermediate',
  level: 'District',
  overallScore: 87,
  improvement: 12,
  age: 20,
}

export type Metric = { label: string; value: number }

export const SPORT_METRICS: Record<Sport, Metric[]> = {
  cricket: [
    { label: 'Bowling Action', value: 90 },
    { label: 'Arm Angle', value: 84 },
    { label: 'Release Point', value: 88 },
    { label: 'Balance', value: 86 },
    { label: 'Follow Through', value: 82 },
    { label: 'Run-Up Speed', value: 79 },
  ],
  football: [
    { label: 'Speed', value: 88 },
    { label: 'Dribbling', value: 82 },
    { label: 'Ball Control', value: 85 },
    { label: 'Balance', value: 80 },
    { label: 'Passing', value: 86 },
  ],
  basketball: [
    { label: 'Shooting Form', value: 84 },
    { label: 'Jump Height', value: 78 },
    { label: 'Footwork', value: 82 },
    { label: 'Dribbling', value: 80 },
    { label: 'Defense', value: 76 },
  ],
  volleyball: [
    { label: 'Serve Accuracy', value: 85 },
    { label: 'Spike Power', value: 80 },
    { label: 'Setting', value: 88 },
    { label: 'Blocking', value: 77 },
    { label: 'Reaction Time', value: 86 },
  ],
  athletics: [
    { label: 'Speed', value: 89 },
    { label: 'Stamina', value: 84 },
    { label: 'Starting Explosion', value: 86 },
    { label: 'Form', value: 82 },
    { label: 'Endurance', value: 81 },
  ],
}

export const PERFORMANCE_OVERVIEW = {
  overall: 87,
  speed: 84,
  balance: 81,
  technique: 86,
  consistency: 83,
  injuryRisk: 72,
}

export const GROWTH = [
  { month: 'Jan', score: 68 },
  { month: 'Feb', score: 74 },
  { month: 'Mar', score: 81 },
  { month: 'Apr', score: 89 },
]

export type Recommendation = {
  id: number
  sport: Sport
  title: string
  desc: string
  tag: string
  icon: string
  cta: string
}

export const RECOMMENDATIONS: Recommendation[] = [
  { id: 1, sport: 'cricket', title: 'Professional Balance & Footwork Training', desc: 'Your balance score can improve. Strengthen your base before bowling delivery.', tag: 'Balance', icon: '⚖️', cta: 'Watch Now' },
  { id: 2, sport: 'cricket', title: 'Bowling Action Perfecting Drill', desc: 'Minor front-arm drift detected. Refine to add 4-5 km/h to your release speed.', tag: 'Technique', icon: '🎯', cta: 'Watch Now' },
  { id: 3, sport: 'cricket', title: 'Follow-Through Stability Routine', desc: 'Improve knee lift and follow-through to reduce injury risk and gain pace.', tag: 'Injury Prevention', icon: '🛡️', cta: 'Watch Now' },
  { id: 4, sport: 'football', title: 'Agility Ladder Dribbling Drills', desc: 'Improve your touch under pressure with ball mastery circuits.', tag: 'Dribbling', icon: '⚽', cta: 'Watch Now' },
  { id: 5, sport: 'basketball', title: 'Jump Mechanics Optimization', desc: 'Increase vertical with plyometric progression sessions.', tag: 'Vertical', icon: '🏀', cta: 'Watch Now' },
  { id: 6, sport: 'volleyball', title: 'Reaction & Dive Defense Drills', desc: 'Sharpen your dig reflex with quick-read drills.', tag: 'Defense', icon: '🏐', cta: 'Watch Now' },
  { id: 7, sport: 'athletics', title: 'Starting Block Explosive Power', desc: 'Improve first-step acceleration with resisted sprint work.', tag: 'Speed', icon: '🏃', cta: 'Watch Now' },
]

export const STRENGTHS = ['Excellent Balance', 'Good Speed', 'Strong Technique', 'Consistent Line & Length']

export const WEAKNESSES = [
  { name: 'Low Knee Lift', impact: 'Reduces pace generation by ~7%' },
  { name: 'Weak Footwork', impact: 'Slower front-arm follow through' },
  { name: 'Late Release Point', impact: 'Loses swing on deliveries' },
]

export type PlanDay = { day: string; focus: string; type: string; emoji: string; intensity: 'High' | 'Medium' | 'Low' }

export const TRAINING_PLAN: PlanDay[] = [
  { day: 'Monday', focus: 'Sprint Training', type: 'Speed', emoji: '🏃', intensity: 'High' },
  { day: 'Tuesday', focus: 'Balance & Footwork', type: 'Skill', emoji: '⚖️', intensity: 'Medium' },
  { day: 'Wednesday', focus: 'Recovery', type: 'Recovery', emoji: '🧘', intensity: 'Low' },
  { day: 'Thursday', focus: 'Technique Training', type: 'Skill', emoji: '🎯', intensity: 'High' },
  { day: 'Friday', focus: 'Strength Training', type: 'Strength', emoji: '🏋️', intensity: 'High' },
  { day: 'Saturday', focus: 'Practice Match', type: 'Match', emoji: '🏏', intensity: 'High' },
  { day: 'Sunday', focus: 'Recovery', type: 'Recovery', emoji: '😴', intensity: 'Low' },
]

export type LearnVideo = {
  id: number
  sport: Sport
  title: string
  skill: string
  difficulty: string
  duration: string
  why: string
  emoji: string
  gradient: string
  coach: string
}

export const LEARNING_VIDEOS: LearnVideo[] = [
  { id: 1, sport: 'cricket', title: 'Jasprit Bumrah Bowling Mechanics', skill: 'Bowling Action', difficulty: 'Advanced', duration: '12:40', why: 'Directly fixes your weak bowling action and adds deception.', emoji: '🎳', gradient: 'linear-gradient(135deg,#1e3a8a,#7c3aed)', coach: 'Jasprit Bumrah' },
  { id: 2, sport: 'cricket', title: 'Professional Bowling Follow Through', skill: 'Follow Through', difficulty: 'Intermediate', duration: '08:15', why: 'Your follow-through scores 82 – this drill pushes it past 90.', emoji: '🏃', gradient: 'linear-gradient(135deg,#0e7490,#3d8bff)', coach: 'Brett Lee Academy' },
  { id: 3, sport: 'cricket', title: 'Fast Bowling Technique Masterclass', skill: 'Release Point', difficulty: 'Advanced', duration: '15:22', why: 'Improves release point timing for extra swing and pace.', emoji: '⚡', gradient: 'linear-gradient(135deg,#4f46e5,#a855f7)', coach: 'Shane Bond' },
  { id: 4, sport: 'cricket', title: 'Balance & Footwork Foundation', skill: 'Balance', difficulty: 'Beginner', duration: '06:50', why: 'AI detected balance as your top improvement area.', emoji: '⚖️', gradient: 'linear-gradient(135deg,#059669,#22d3ee)', coach: 'TalentTrack AI' },
  { id: 5, sport: 'football', title: 'Cristiano Ronaldo Finishing Drills', skill: 'Finishing', difficulty: 'Advanced', duration: '11:30', why: 'Improves your finishing conversion rate.', emoji: '⚽', gradient: 'linear-gradient(135deg,#065f46,#34d399)', coach: 'Pro Academy' },
  { id: 6, sport: 'basketball', title: 'Stephen Curry Shooting Form', skill: 'Shooting', difficulty: 'Intermediate', duration: '10:05', why: 'Fixes shooting arc and wrist snap.', emoji: '🏀', gradient: 'linear-gradient(135deg,#b45309,#f59e0b)', coach: 'NBA Academy' },
  { id: 7, sport: 'volleyball', title: 'Pro Libero Defensive Reads', skill: 'Defense', difficulty: 'Advanced', duration: '13:18', why: 'Sharpens reaction and dive technique.', emoji: '🏐', gradient: 'linear-gradient(135deg,#be123c,#fb7185)', coach: 'FIVB Coaching' },
  { id: 8, sport: 'athletics', title: 'Usain Bolt Start Technique', skill: 'Explosion', difficulty: 'Advanced', duration: '09:44', why: 'Boosts your 0-30m acceleration.', emoji: '🏃', gradient: 'linear-gradient(135deg,#7e22ce,#a855f7)', coach: 'World Athletics' },
]

export type Badge = { icon: string; name: string; desc: string; earned: boolean; date?: string }

export const BADGES: Badge[] = [
  { icon: '🏆', name: 'Rising Star', desc: 'Crossed AI score 80', earned: true, date: 'Mar 2026' },
  { icon: '⚡', name: 'Speed Master', desc: 'Speed metric above 85', earned: true, date: 'Feb 2026' },
  { icon: '🎯', name: 'Precision Expert', desc: 'Technique above 85', earned: true, date: 'Apr 2026' },
  { icon: '💪', name: 'Balance Expert', desc: 'Balance score above 80', earned: false },
  { icon: '🔥', name: 'Consistency Champion', desc: '5 stable reports in a row', earned: false },
  { icon: '🚀', name: 'Level Pro', desc: 'Reach State level', earned: false },
]

export type TimelineItem = {
  month: string
  score: number
  skills: string[]
  badge?: string
  milestone: string
}

export const TIMELINE: TimelineItem[] = [
  { month: 'January', score: 68, skills: ['Bowling', 'Fitness'], milestone: 'Joined TalentTrack AI · First AI baseline report' },
  { month: 'February', score: 74, skills: ['Bowling', 'Footwork', 'Strength'], badge: '⚡ Speed Master', milestone: 'Finished footwork module · +6 AI score' },
  { month: 'March', score: 82, skills: ['Bowling', 'Balance', 'Match Play'], badge: '🏆 Rising Star', milestone: 'Selected for district trials · First match' },
  { month: 'April', score: 89, skills: ['Bowling', 'Balance', 'Consistency', 'Match Awareness'], badge: '🎯 Precision Expert', milestone: 'Best performance report · Coach shortlisted you' },
]

export const COMPARE = {
  videos: {
    previous: { date: 'January 2026', duration: '1:24', emoji: '🏏', gradient: 'linear-gradient(135deg,#1e3a8a,#334155)' },
    latest: { date: 'April 2026', duration: '1:36', emoji: '🏏', gradient: 'linear-gradient(135deg,#6d28d9,#3d8bff)' },
  },
  metrics: [
    { metric: 'Speed', prev: 72, current: 84 },
    { metric: 'Balance', prev: 68, current: 81 },
    { metric: 'Technique', prev: 70, current: 86 },
    { metric: 'Consistency', prev: 66, current: 83 },
  ],
}

export const CAREER_POTENTIAL = [
  { level: 'District', value: 92, color: '#34d399' },
  { level: 'State', value: 76, color: '#3d8bff' },
  { level: 'National', value: 48, color: '#a855f7' },
]

export const INJURY = {
  risk: 'Low',
  areas: [
    { name: 'Knee', level: 'Low', dot: '#34d399' },
    { name: 'Ankle', level: 'Moderate', dot: '#fbbf24' },
    { name: 'Shoulder', level: 'Low', dot: '#34d399' },
  ],
  tips: [
    'Strengthen quads & hamstrings twice a week to protect knees.',
    'Do 10 min of ankle mobility before every bowling spell.',
    'Add shoulder rotator-cuff exercises to your Friday strength block.',
    'Follow the Wednesday recovery plan – no high-intensity sessions.',
  ],
}

export type Scholarship = {
  id: number
  sport: Sport
  name: string
  org: string
  type: string
  amount: string
  eligibility: string
  deadline: string
}

export const SCHOLARSHIPS: Scholarship[] = [
  { id: 1, sport: 'cricket', name: 'State Sports Excellence Scholarship', org: 'Sports Authority of India', type: 'Government', amount: '₹50,000 / year', eligibility: 'U-19, District level or above', deadline: 'Aug 30, 2026' },
  { id: 2, sport: 'cricket', name: 'BCCI U-19 Talent Fund', org: 'BCCI', type: 'Private', amount: '₹1,20,000 / year', eligibility: 'Top 10% AI score in State', deadline: 'Sep 15, 2026' },
  { id: 3, sport: 'cricket', name: 'Academy Scholarship – Fast Bowlers', org: 'NCA Elite Academy', type: 'Academy', amount: 'Full fee waiver', eligibility: 'AI bowling score above 85', deadline: 'Oct 01, 2026' },
  { id: 4, sport: 'cricket', name: 'University Sports Quota', org: 'Anna University', type: 'Sports Quota', amount: 'Admission quota + stipend', eligibility: 'State-level participation', deadline: 'Nov 10, 2026' },
  { id: 5, sport: 'football', name: 'AIFF Grassroots Scholarship', org: 'AIFF', type: 'Government', amount: '₹40,000 / year', eligibility: 'U-17, District level', deadline: 'Sep 20, 2026' },
  { id: 6, sport: 'basketball', name: 'NBA Academy Scholarship', org: 'NBA India', type: 'Academy', amount: 'Full fee waiver', eligibility: 'Top 15% AI score', deadline: 'Oct 12, 2026' },
  { id: 7, sport: 'volleyball', name: 'FIVB Development Grant', org: 'FIVB', type: 'Private', amount: '₹60,000 / year', eligibility: 'State-level players', deadline: 'Nov 05, 2026' },
  { id: 8, sport: 'athletics', name: 'Run India Athlete Fund', org: 'AFI', type: 'Government', amount: '₹75,000 / year', eligibility: 'Under 20, sprint events', deadline: 'Sep 28, 2026' },
]

export type Trial = {
  id: number
  sport: Sport
  name: string
  ageGroup: string
  location: string
  date: string
  org: string
  eligibility: string
  positions: number
}

export const TRIALS: Trial[] = [
  { id: 1, sport: 'cricket', name: 'TNPL District Fast Bowler Trials', ageGroup: 'U-19', location: 'Chennai', date: 'Aug 22, 2026', org: 'TNCA', eligibility: 'District level, AI score 75+', positions: 12 },
  { id: 2, sport: 'cricket', name: 'U-19 State Camp – Pace Bowlers', ageGroup: 'U-19', location: 'Coimbatore', date: 'Sep 05, 2026', org: 'Sports Development Authority', eligibility: 'Any district, AI score 70+', positions: 20 },
  { id: 3, sport: 'cricket', name: 'NCA Net Bowlers Selection', ageGroup: 'U-19 / U-23', location: 'Bengaluru', date: 'Sep 18, 2026', org: 'NCA Elite Academy', eligibility: 'Bowling action score 85+', positions: 8 },
  { id: 4, sport: 'cricket', name: 'Club T20 Recruitment Drive', ageGroup: 'Open', location: 'Madurai', date: 'Oct 02, 2026', org: 'Madurai CC', eligibility: 'District level', positions: 15 },
  { id: 5, sport: 'football', name: 'ISL Reserve Team Trials', ageGroup: 'U-21', location: 'Kolkata', date: 'Sep 10, 2026', org: 'ISL Club', eligibility: 'State level, speed 85+', positions: 18 },
  { id: 6, sport: 'basketball', name: 'NBA India Hoop Camps', ageGroup: 'U-18', location: 'Mumbai', date: 'Oct 08, 2026', org: 'NBA India', eligibility: 'Top 20% AI score', positions: 24 },
  { id: 7, sport: 'volleyball', name: 'National Youth Selection', ageGroup: 'U-18', location: 'Hyderabad', date: 'Sep 25, 2026', org: 'VFI', eligibility: 'State level', positions: 16 },
  { id: 8, sport: 'athletics', name: 'Sprint Pro Combine', ageGroup: 'U-20', location: 'Patiala', date: 'Oct 20, 2026', org: 'AFI', eligibility: '100m under 11.2s', positions: 30 },
]

export type Notification = {
  id: number
  category: 'Report' | 'Progress' | 'Trial' | 'Learning' | 'Coach' | 'Badge'
  title: string
  desc: string
  time: string
  icon: string
  read: boolean
}

export const NOTIFICATIONS: Notification[] = [
  { id: 1, category: 'Report', title: 'Your AI report is ready', desc: 'New AI performance report for your latest video is available.', time: '2 hours ago', icon: '📊', read: false },
  { id: 2, category: 'Progress', title: 'Performance improved by 8%', desc: 'Your overall AI score jumped from 81 to 89. Great consistency!', time: '5 hours ago', icon: '🚀', read: false },
  { id: 3, category: 'Trial', title: 'New cricket trial near you', desc: 'TNPL District Fast Bowler Trials in Chennai · Aug 22.', time: 'Yesterday', icon: '🏏', read: false },
  { id: 4, category: 'Learning', title: 'New learning video recommended', desc: 'Jasprit Bumrah Bowling Mechanics added to your Learning Hub.', time: 'Yesterday', icon: '🎥', read: true },
  { id: 5, category: 'Coach', title: 'Coach viewed your profile', desc: 'A coach from TNCA viewed your athlete portfolio.', time: '2 days ago', icon: '👀', read: true },
  { id: 6, category: 'Badge', title: 'You earned a new badge', desc: 'Precision Expert unlocked for technique score 86.', time: '3 days ago', icon: '🏆', read: true },
]

/* ================= COACH ================= */

export const COACH = {
  name: 'Coach Ravi Kumar',
  role: 'Cricket & Football Scout',
  email: 'ravi@TalentTrack.ai',
  academy: 'Velocity Sports Academy',
  stats: [
    { label: 'Total Players', value: 142, icon: '👥' },
    { label: 'Players Viewed', value: 96, icon: '👀' },
    { label: 'Shortlisted', value: 38, icon: '⭐' },
    { label: 'Invitations Sent', value: 24, icon: '✉️' },
    { label: 'Selected Players', value: 12, icon: '✅' },
  ],
}

export type Player = {
  id: number
  name: string
  sport: Sport
  position: string
  age: number
  gender: string
  location: string
  aiScore: number
  skills: string[]
  improvement: number
  experience: string
  speed: number
  balance: number
  technique: number
  match: number
  trend: number[]
}

export const PLAYERS: Player[] = [
  { id: 1, name: 'Arjun Sharma', sport: 'cricket', position: 'Fast Bowler', age: 20, gender: 'Male', location: 'Chennai', aiScore: 89, skills: ['Pace 138km/h', 'Swing', 'Yorkers'], improvement: 12, experience: 'Intermediate', speed: 84, balance: 81, technique: 86, match: 98, trend: [68, 74, 81, 89] },
  { id: 2, name: 'Vikram Reddy', sport: 'cricket', position: 'Batsman (Top Order)', age: 19, gender: 'Male', location: 'Hyderabad', aiScore: 86, skills: ['Cover Drive', 'Strike Rate', 'Fielding'], improvement: 9, experience: 'Intermediate', speed: 74, balance: 88, technique: 87, match: 94, trend: [71, 75, 82, 86] },
  { id: 3, name: 'Kabir Nair', sport: 'cricket', position: 'Wicket-Keeper', age: 18, gender: 'Male', location: 'Kochi', aiScore: 82, skills: ['Gloves', 'Reflexes', 'Lower Order'], improvement: 14, experience: 'Intermediate', speed: 70, balance: 85, technique: 84, match: 91, trend: [60, 66, 76, 82] },
  { id: 4, name: 'Rohit Menon', sport: 'cricket', position: 'Spin Bowler', age: 21, gender: 'Male', location: 'Thiruvananthapuram', aiScore: 78, skills: ['Flight', 'Turn', 'Change-ups'], improvement: 6, experience: 'Intermediate', speed: 62, balance: 79, technique: 81, match: 85, trend: [70, 72, 75, 78] },
  { id: 5, name: 'Daniel Fernandes', sport: 'football', position: 'Winger', age: 17, gender: 'Male', location: 'Goa', aiScore: 92, skills: ['Dribbling', 'Crossing', 'Speed 9.4s'], improvement: 18, experience: 'Advanced', speed: 92, balance: 88, technique: 90, match: 98, trend: [70, 78, 86, 92] },
  { id: 6, name: 'Amanpreet Singh', sport: 'football', position: 'Central Midfielder', age: 18, gender: 'Male', location: 'Punjab', aiScore: 87, skills: ['Passing', 'Vision', 'Stamina'], improvement: 11, experience: 'Advanced', speed: 78, balance: 86, technique: 89, match: 95, trend: [72, 77, 84, 87] },
  { id: 7, name: 'Sanya Kapoor', sport: 'football', position: 'Striker', age: 16, gender: 'Female', location: 'Delhi', aiScore: 85, skills: ['Finishing', 'Positioning', 'First Touch'], improvement: 15, experience: 'Intermediate', speed: 86, balance: 82, technique: 85, match: 93, trend: [64, 72, 80, 85] },
  { id: 8, name: 'Leo D\'Souza', sport: 'football', position: 'Goalkeeper', age: 19, gender: 'Male', location: 'Mumbai', aiScore: 80, skills: ['Reflexes', 'Distribution', 'Aerial'], improvement: 8, experience: 'Intermediate', speed: 68, balance: 84, technique: 79, match: 86, trend: [70, 74, 78, 80] },
  { id: 9, name: 'Meera Iyer', sport: 'basketball', position: 'Point Guard', age: 18, gender: 'Female', location: 'Bengaluru', aiScore: 88, skills: ['Playmaking', 'Speed', 'Handles'], improvement: 13, experience: 'Advanced', speed: 84, balance: 90, technique: 87, match: 96, trend: [69, 76, 83, 88] },
  { id: 10, name: 'Arnav Bose', sport: 'basketball', position: 'Small Forward', age: 20, gender: 'Male', location: 'Kolkata', aiScore: 83, skills: ['Slashing', 'Rebounding', 'Vertical'], improvement: 10, experience: 'Intermediate', speed: 80, balance: 84, technique: 82, match: 90, trend: [68, 73, 79, 83] },
  { id: 11, name: 'Priya Venkatesh', sport: 'volleyball', position: 'Setter', age: 17, gender: 'Female', location: 'Chennai', aiScore: 84, skills: ['Setting', 'IQ', 'Serve'], improvement: 12, experience: 'Intermediate', speed: 76, balance: 85, technique: 88, match: 92, trend: [66, 72, 79, 84] },
  { id: 12, name: 'Sameer Khan', sport: 'athletics', position: 'Sprint 100m', age: 19, gender: 'Male', location: 'Lucknow', aiScore: 86, skills: ['Explosion', 'Blocks', 'Top Speed'], improvement: 9, experience: 'Advanced', speed: 94, balance: 80, technique: 83, match: 90, trend: [72, 77, 82, 86] },
]

export type Application = {
  id: number
  playerId: number
  sport: Sport
  position: string
  aiScore: number
  date: string
  status: 'Pending' | 'Shortlisted' | 'Selected' | 'Rejected'
}

export const APPLICATIONS: Application[] = [
  { id: 1, playerId: 1, sport: 'cricket', position: 'Fast Bowler', aiScore: 89, date: 'Aug 10, 2026', status: 'Shortlisted' },
  { id: 2, playerId: 3, sport: 'cricket', position: 'Wicket-Keeper', aiScore: 82, date: 'Aug 11, 2026', status: 'Pending' },
  { id: 3, playerId: 5, sport: 'football', position: 'Winger', aiScore: 92, date: 'Aug 09, 2026', status: 'Selected' },
  { id: 4, playerId: 6, sport: 'football', position: 'Central Midfielder', aiScore: 87, date: 'Aug 12, 2026', status: 'Pending' },
  { id: 5, playerId: 2, sport: 'cricket', position: 'Batsman (Top Order)', aiScore: 86, date: 'Aug 08, 2026', status: 'Selected' },
  { id: 6, playerId: 4, sport: 'cricket', position: 'Spin Bowler', aiScore: 78, date: 'Aug 13, 2026', status: 'Rejected' },
  { id: 7, playerId: 9, sport: 'basketball', position: 'Point Guard', aiScore: 88, date: 'Aug 14, 2026', status: 'Pending' },
  { id: 8, playerId: 11, sport: 'volleyball', position: 'Setter', aiScore: 84, date: 'Aug 12, 2026', status: 'Shortlisted' },
]

export const ANALYTICS = {
  funnel: [
    { stage: 'Players Viewed', value: 142 },
    { stage: 'Shortlisted', value: 38 },
    { stage: 'Invited', value: 24 },
    { stage: 'Accepted', value: 17 },
    { stage: 'Selected', value: 12 },
  ],
  sportWise: [
    { name: 'Cricket', value: 4 },
    { name: 'Football', value: 4 },
    { name: 'Basketball', value: 2 },
    { name: 'Volleyball', value: 1 },
    { name: 'Athletics', value: 1 },
  ],
  distribution: [
    { name: '80-100', value: 6 },
    { name: '70-79', value: 4 },
    { name: '60-69', value: 1 },
    { name: '<60', value: 1 },
  ],
  successRate: 71,
  monthly: [
    { month: 'Mar', viewed: 60, selected: 4 },
    { month: 'Apr', viewed: 88, selected: 6 },
    { month: 'May', viewed: 104, selected: 8 },
    { month: 'Jun', viewed: 128, selected: 10 },
    { month: 'Jul', viewed: 142, selected: 12 },
  ],
}

export const COACH_NOTIFICATIONS: Notification[] = [
  { id: 1, category: 'Trial', title: 'New trial application', desc: 'Arjun Sharma applied for Fast Bowler Trials.', time: '1 hour ago', icon: '📝', read: false },
  { id: 2, category: 'Coach', title: 'Player accepted invitation', desc: 'Daniel Fernandes accepted your trial invitation.', time: '3 hours ago', icon: '✅', read: false },
  { id: 3, category: 'Progress', title: 'New AI recommended player', desc: '2 high-match football players added to recommendations.', time: 'Yesterday', icon: '🤖', read: false },
  { id: 4, category: 'Trial', title: 'Trial reminder', desc: 'TNPL District Trials start in 3 days.', time: 'Yesterday', icon: '⏰', read: true },
  { id: 5, category: 'Coach', title: 'Player profile updated', desc: 'Vikram Reddy updated his performance videos.', time: '2 days ago', icon: '👤', read: true },
]
