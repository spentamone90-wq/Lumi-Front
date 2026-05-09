import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  className = '',
}) => {
  const baseStyles = 'font-medium rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-gradient-to-r from-lumi-sky to-lumi-blue text-white shadow-soft hover:shadow-card',
    secondary: 'bg-lumi-gray-light text-lumi-gray-text hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100',
    ghost: 'bg-transparent text-lumi-blue hover:bg-lumi-sky-light dark:text-blue-300',
    danger: 'bg-red-500 text-white shadow-soft hover:shadow-card',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {loading ? '...' : children}
    </button>
  )
}
