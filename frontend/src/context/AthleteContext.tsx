import { createContext, useContext, useState, ReactNode } from 'react'
import { ATHLETE, Sport } from '../data/mock'

type AthleteCtx = {
  sport: Sport
  setSport: (s: Sport) => void
  athlete: typeof ATHLETE
}

const Ctx = createContext<AthleteCtx>({
  sport: 'cricket',
  setSport: () => {},
  athlete: ATHLETE,
})

export function AthleteProvider({ children }: { children: ReactNode }) {
  const [sport, setSport] = useState<Sport>(ATHLETE.sport)
  return <Ctx.Provider value={{ sport, setSport, athlete: ATHLETE }}>{children}</Ctx.Provider>
}

export const useAthlete = () => useContext(Ctx)
