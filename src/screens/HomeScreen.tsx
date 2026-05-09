import React from 'react'
import { MainLayout } from '../components/layouts/MainLayout'
import { Header } from '../components/common/Header'
import { Card } from '../components/common/Card'
import { ProgressBar } from '../components/common/ProgressBar'
import { FloatingActionButton } from '../components/common/FloatingActionButton'
import { useAppContext } from '../context/AppContext'
import { Check, Clock } from 'lucide-react'

export const HomeScreen: React.FC = () => {
  const { routines } = useAppContext()

  const completedToday = routines.filter(r => r.completed).length
  const totalRoutines = routines.length || 3

  const sampleRoutines = [
    {
      id: '1',
      name: 'Ejercicio Matutino',
      time: '07:00',
      completed: true,
      icon: '🏃',
      color: 'from-green-400 to-green-600',
    },
    {
      id: '2',
      name: 'Meditación',
      time: '12:00',
      completed: false,
      icon: '🧘',
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: '3',
      name: 'Lectura',
      time: '20:00',
      completed: false,
      icon: '📚',
      color: 'from-blue-400 to-blue-600',
    },
  ]

  const displayRoutines = routines.length > 0 ? routines : sampleRoutines

  return (
    <MainLayout>
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <Header userName="María" greeting="Buenos días" />

        <Card className="bg-gradient-to-br from-lumi-sky to-lumi-blue text-white p-5 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            <div>
              <p className="text-xs sm:text-sm opacity-90">Progreso hoy</p>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1">
                {completedToday}/{totalRoutines}
              </h3>
            </div>
            <ProgressBar
              progress={(completedToday / totalRoutines) * 100}
              color="sky"
              showLabel={false}
            />
          </div>
        </Card>

        <div>
          <h2 className="text-base sm:text-lg font-semibold text-lumi-gray-text dark:text-white mb-3">
            Rutinas de Hoy
          </h2>
          <div className="space-y-3">
            {displayRoutines.map(routine => (
              <Card
                key={routine.id}
                hoverable
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4"
              >
                <div className="text-3xl sm:text-4xl flex-shrink-0">
                  {routine.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base text-lumi-gray-text dark:text-white truncate">
                    {routine.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-lumi-gray-text dark:text-gray-400">
                    <Clock size={12} className="sm:w-[14px] sm:h-[14px]" />
                    {routine.time}
                  </div>
                </div>
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    routine.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-lumi-gray-border dark:border-gray-600'
                  }`}
                >
                  {routine.completed && <Check size={12} className="text-white sm:w-[14px] sm:h-[14px]" />}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="border-2 border-dashed border-lumi-sky p-6 sm:p-8 text-center">
          <p className="text-xs sm:text-sm text-lumi-gray-text dark:text-gray-400">
            💡 Consistencia es la clave para el éxito
          </p>
        </Card>
      </div>

      <FloatingActionButton label="Agregar rutina" onClick={() => {}} />
    </MainLayout>
  )
}
