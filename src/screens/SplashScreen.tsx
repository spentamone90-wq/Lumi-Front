import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sun } from 'lucide-react'

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding')
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="w-full h-screen bg-gradient-to-b from-lumi-sky-light to-white dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center animate-fadeInScale">
      <div className="flex flex-col items-center gap-6">
        <div className="animate-bounce">
          <Sun size={80} className="text-yellow-400 drop-shadow-lg" />
        </div>
        <h1 className="text-4xl font-bold text-center text-lumi-gray-text dark:text-white">
          Lumi
        </h1>
        <p className="text-sm text-lumi-gray-text dark:text-gray-400 text-center max-w-xs">
          Tu asistente personal para bienestar y productividad
        </p>
      </div>

      <div className="absolute bottom-12 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-lumi-sky animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-lumi-blue animate-pulse delay-100" />
        <div className="w-2 h-2 rounded-full bg-lumi-sky animate-pulse delay-200" />
      </div>
    </div>
  )
}
