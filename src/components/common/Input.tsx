import React from 'react'

interface InputProps {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  type?: 'text' | 'email' | 'password' | 'number' | 'time'
  disabled?: boolean
  className?: string
  icon?: React.ReactNode
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  onKeyPress,
  type = 'text',
  disabled = false,
  className = '',
  icon,
}) => {
  return (
    <div className={`relative ${className}`}>
      {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-lumi-gray-text">{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        disabled={disabled}
        className={`w-full px-4 py-3 ${icon ? 'pl-12' : ''} bg-lumi-gray-light dark:bg-gray-700 border border-lumi-gray-border dark:border-gray-600 rounded-xl font-base text-lumi-gray-text placeholder-gray-400 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lumi-sky focus:border-transparent transition-all disabled:opacity-50`}
      />
    </div>
  )
}
