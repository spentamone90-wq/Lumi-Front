import React from 'react'
import { Sun } from 'lucide-react'

interface HeaderProps {
  userName?: string
  greeting?: string
  avatarUrl?: string
}

export const Header: React.FC<HeaderProps> = ({
  userName = 'Usuario',
  greeting = 'Buen día',
  avatarUrl,
}) => {
  return (
    <div className="bg-gradient-to-r from-lumi-sky-light to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 w-full">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 sm:mb-2">
            <Sun size={18} className="text-yellow-500" />
            <span className="text-xs sm:text-sm text-lumi-gray-text dark:text-gray-400">{greeting}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-lumi-gray-text dark:text-white leading-tight">
            ¡Hola, {userName}!
          </h1>
          <p className="text-xs sm:text-sm text-lumi-gray-text dark:text-gray-400 mt-0.5 sm:mt-1">
            Hoy es un gran día para cumplir tus metas
          </p>
        </div>
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={userName}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-lumi-sky to-lumi-blue flex items-center justify-center text-white text-lg sm:text-xl font-semibold flex-shrink-0">
            {userName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
    </div>
  )
}
