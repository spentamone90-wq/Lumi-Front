export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  preferences?: {
    theme: 'light' | 'dark'
    notifications: boolean
    language: 'es' | 'en'
  }
}

export interface Routine {
  id: string
  name: string
  description?: string
  icon: string
  time: string
  frequency: 'daily' | 'weekly' | 'custom'
  days?: string[]
  completed: boolean
  category: 'health' | 'productivity' | 'wellness' | 'learning'
  color: string
  progress?: number
}

export interface Reminder {
  id: string
  title: string
  time: string
  priority: 'low' | 'medium' | 'high'
  category?: string
  enabled: boolean
}

export interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
  typing?: boolean
}

export interface Stats {
  totalCompleted: number
  streak: number
  weekProgress: number
  completionRate: number
  categories: Record<string, number>
}

export interface OnboardingStep {
  id: string
  title: string
  description: string
  icon: string
}
