import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { User, Routine, ChatMessage, Reminder } from '../types'

interface AppContextType {
  user: User | null
  setUser: (user: User | null) => void
  routines: Routine[]
  addRoutine: (routine: Routine) => void
  updateRoutine: (id: string, routine: Partial<Routine>) => void
  deleteRoutine: (id: string) => void
  reminders: Reminder[]
  addReminder: (reminder: Reminder) => void
  updateReminder: (id: string, reminder: Partial<Reminder>) => void
  deleteReminder: (id: string) => void
  chatMessages: ChatMessage[]
  addChatMessage: (message: ChatMessage) => void
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [routines, setRoutines] = useState<Routine[]>([])
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const addRoutine = (routine: Routine) => {
    setRoutines([...routines, routine])
  }

  const updateRoutine = (id: string, updates: Partial<Routine>) => {
    setRoutines(routines.map(r => r.id === id ? { ...r, ...updates } : r))
  }

  const deleteRoutine = (id: string) => {
    setRoutines(routines.filter(r => r.id !== id))
  }

  const addReminder = (reminder: Reminder) => {
    setReminders([...reminders, reminder])
  }

  const updateReminder = (id: string, updates: Partial<Reminder>) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, ...updates } : r))
  }

  const deleteReminder = (id: string) => {
    setReminders(reminders.filter(r => r.id !== id))
  }

  const addChatMessage = (message: ChatMessage) => {
    setChatMessages([...chatMessages, message])
  }

  const value: AppContextType = {
    user,
    setUser,
    routines,
    addRoutine,
    updateRoutine,
    deleteRoutine,
    reminders,
    addReminder,
    updateReminder,
    deleteReminder,
    chatMessages,
    addChatMessage,
    theme,
    setTheme,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}
