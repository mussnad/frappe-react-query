import { createContext } from 'react'
import { FrappeConfig } from '../types'

export const FrappeContext = createContext<null | FrappeConfig>(null)
