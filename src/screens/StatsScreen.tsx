import React from 'react'
import { MainLayout } from '../components/layouts/MainLayout'
import { Card } from '../components/common/Card'
import { ProgressBar } from '../components/common/ProgressBar'
import { Zap, Flame, TrendingUp, Award } from 'lucide-react'

export const StatsScreen: React.FC = () => {
  const stats = {
    streak: 12,
    totalCompleted: 145,
    weekProgress: 78,
    completionRate: 85,
  }

  const weekData = [
    { day: 'L', completed: 3, total: 4 },
    { day: 'M', completed: 4, total: 4 },
    { day: 'M', completed: 2, total: 4 },
    { day: 'J', completed: 3, total: 4 },
    { day: 'V', completed: 4, total: 4 },
    { day: 'S', completed: 3, total: 4 },
    { day: 'D', completed: 1, total: 3 },
  ]

  return (
    <MainLayout>
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <h1 className="text-xl sm:text-2xl font-bold text-lumi-gray-text dark:text-white">
          Tu Progreso
        </h1>

        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <Card className="text-center p-3 sm:p-4">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-100 dark:bg-red-900 rounded-full mx-auto mb-2">
              <Flame size={20} className="text-red-500 sm:w-6 sm:h-6" />
            </div>
            <p className="text-[10px] sm:text-xs text-lumi-gray-text dark:text-gray-400">Racha</p>
            <p className="text-2xl sm:text-3xl font-bold text-red-500">{stats.streak}</p>
            <p className="text-[10px] sm:text-xs text-lumi-gray-text dark:text-gray-400 mt-1">días seguidos</p>
          </Card>

          <Card className="text-center p-3 sm:p-4">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-2">
              <Award size={20} className="text-green-500 sm:w-6 sm:h-6" />
            </div>
            <p className="text-[10px] sm:text-xs text-lumi-gray-text dark:text-gray-400">Completadas</p>
            <p className="text-2xl sm:text-3xl font-bold text-green-500">{stats.totalCompleted}</p>
            <p className="text-[10px] sm:text-xs text-lumi-gray-text dark:text-gray-400 mt-1">en total</p>
          </Card>

          <Card className="text-center p-3 sm:p-4">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-2">
              <TrendingUp size={20} className="text-purple-500 sm:w-6 sm:h-6" />
            </div>
            <p className="text-[10px] sm:text-xs text-lumi-gray-text dark:text-gray-400">Semana</p>
            <p className="text-2xl sm:text-3xl font-bold text-purple-500">{stats.weekProgress}%</p>
            <p className="text-[10px] sm:text-xs text-lumi-gray-text dark:text-gray-400 mt-1">cumplimiento</p>
          </Card>

          <Card className="text-center p-3 sm:p-4">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-2">
              <Zap size={20} className="text-blue-500 sm:w-6 sm:h-6" />
            </div>
            <p className="text-[10px] sm:text-xs text-lumi-gray-text dark:text-gray-400">Tasa</p>
            <p className="text-2xl sm:text-3xl font-bold text-blue-500">{stats.completionRate}%</p>
            <p className="text-[10px] sm:text-xs text-lumi-gray-text dark:text-gray-400 mt-1">promedio</p>
          </Card>
        </div>

        <div>
          <h2 className="text-base sm:text-lg font-semibold text-lumi-gray-text dark:text-white mb-3 sm:mb-4">
            Actividad de la Semana
          </h2>
          <Card className="p-3 sm:p-6">
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {weekData.map((day, index) => (
                <div key={index} className="text-center">
                  <p className="text-[10px] sm:text-xs font-semibold text-lumi-gray-text dark:text-gray-400 mb-1 sm:mb-2">
                    {day.day}
                  </p>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-lumi-blue leading-none">
                      {day.completed}
                    </div>
                    <p className="text-[10px] sm:text-xs text-lumi-gray-text dark:text-gray-400">
                      /{day.total}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <h2 className="text-base sm:text-lg font-semibold text-lumi-gray-text dark:text-white mb-3 sm:mb-4">
            Desglose por Categoría
          </h2>
          <div className="space-y-2 sm:space-y-3">
            {[
              { label: 'Salud', progress: 88, color: 'red' },
              { label: 'Productividad', progress: 92, color: 'green' },
              { label: 'Bienestar', progress: 78, color: 'purple' },
              { label: 'Aprendizaje', progress: 85, color: 'blue' },
            ].map(cat => (
              <Card key={cat.label} className="space-y-2 p-3 sm:p-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm font-semibold text-lumi-gray-text dark:text-white">
                    {cat.label}
                  </span>
                  <span className="text-[10px] sm:text-sm text-lumi-gray-text dark:text-gray-400">
                    {cat.progress}%
                  </span>
                </div>
                <ProgressBar progress={cat.progress} showLabel={false} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
