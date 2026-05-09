import React from 'react'
import { Plus } from 'lucide-react'

interface FloatingActionButtonProps {
  onClick: () => void
  icon?: React.ReactNode
  label?: string
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onClick,
  icon,
  label,
}) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-lumi-sky to-lumi-blue rounded-full shadow-card flex items-center justify-center text-white hover:shadow-lg active:scale-95 transition-all animate-pulse-soft z-40"
      title={label}
    >
      {icon || <Plus size={24} />}
    </button>
  )
}
