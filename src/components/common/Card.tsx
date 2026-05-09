import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hoverable?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-soft ${hoverable ? 'hover:shadow-card cursor-pointer' : ''} transition-all ${className}`}
    >
      {children}
    </div>
  )
}
