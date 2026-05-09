import React from 'react'
import { Home, CheckSquare, MessageCircle, BarChart3, User } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

export const BottomNav: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const tabs = [
    { id: 'home', label: 'Inicio', icon: Home, path: '/' },
    { id: 'routines', label: 'Rutinas', icon: CheckSquare, path: '/routines' },
    { id: 'ai', label: 'IA', icon: MessageCircle, path: '/chat' },
    { id: 'stats', label: 'Estadísticas', icon: BarChart3, path: '/stats' },
    { id: 'profile', label: 'Perfil', icon: User, path: '/profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-lumi-gray-border dark:border-gray-700 z-50 max-w-md mx-auto">
      <div className="flex justify-around items-center h-20">
        {tabs.map(tab => {
          const Icon = tab.icon
          const isActive = location.pathname === tab.path

          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center justify-center py-2 px-3 flex-1 transition-colors ${
                isActive
                  ? 'text-lumi-blue'
                  : 'text-lumi-gray-text dark:text-gray-400'
              }`}
            >
              <Icon size={24} className="mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
              {isActive && (
                <div className="absolute bottom-0 w-1 h-1 bg-lumi-blue rounded-full mt-2" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
