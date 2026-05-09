import React from 'react'

interface ProgressBarProps {
  progress: number
  color?: 'sky' | 'blue' | 'green'
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = 'sky',
  showLabel = true,
  size = 'md',
}) => {
  const colors = {
    sky: 'bg-gradient-to-r from-lumi-sky to-lumi-blue',
    blue: 'bg-lumi-blue',
    green: 'bg-green-500',
  }

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  }

  const clampedProgress = Math.min(Math.max(progress, 0), 100)

  return (
    <div className="w-full">
      <div className={`w-full bg-lumi-gray-light dark:bg-gray-700 rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className={`${colors[color]} rounded-full transition-all duration-300 ease-out ${sizes[size]}`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {showLabel && (
        <div className="text-xs text-lumi-gray-text dark:text-gray-400 mt-1">
          {Math.round(clampedProgress)}%
        </div>
      )}
    </div>
  )
}
