import React, { useState } from 'react'
import { MainLayout } from '../components/layouts/MainLayout'
import { Card } from '../components/common/Card'
import { FloatingActionButton } from '../components/common/FloatingActionButton'
import { useAppContext } from '../context/AppContext'
import { Clock, Trash2 } from 'lucide-react'

export const RoutinesScreen: React.FC = () => {
  const { routines, deleteRoutine, updateRoutine } = useAppContext()
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all')

  const sampleRoutines = [
    {
      id: '1',
      name: 'Ejercicio Matutino',
      time: '07:00',
      completed: true,
      frequency: 'daily' as const,
      icon: '🏃',
      category: 'health' as const,
      color: 'from-green-400 to-green-600',
    },
    {
      id: '2',
      name: 'Meditación',
      time: '12:00',
      completed: false,
      frequency: 'daily' as const,
      icon: '🧘',
      category: 'wellness' as const,
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: '3',
      name: 'Lectura',
      time: '20:00',
      completed: false,
      frequency: 'daily' as const,
      icon: '📚',
      category: 'learning' as const,
      color: 'from-blue-400 to-blue-600',
    },
  ]

  const displayRoutines = routines.length > 0 ? routines : sampleRoutines

  const filteredRoutines = displayRoutines.filter(routine => {
    if (filter === 'completed') return routine.completed
    if (filter === 'pending') return !routine.completed
    return true
  })

  const handleToggle = (id: string, completed: boolean) => {
    updateRoutine(id, { completed: !completed })
  }

  return (
    <MainLayout>
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-lumi-gray-text dark:text-white mb-3 sm:mb-4">
            Mis Rutinas
          </h1>

          <div className="flex gap-2 mb-4 sm:mb-6 overflow-x-auto pb-1 no-scrollbar">
            {(['all', 'pending', 'completed'] as const).map(filterType => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  filter === filterType
                    ? 'bg-lumi-blue text-white shadow-soft'
                    : 'bg-lumi-gray-light dark:bg-gray-700 text-lumi-gray-text dark:text-gray-300'
                }`}
              >
                {filterType === 'all'
                  ? 'Todas'
                  : filterType === 'completed'
                    ? 'Completadas'
                    : 'Pendientes'}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filteredRoutines.map(routine => (
            <Card
              key={routine.id}
              className="flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:scale-102 transition-transform p-3 sm:p-4"
              onClick={() => handleToggle(routine.id, routine.completed)}
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="text-2xl sm:text-3xl flex-shrink-0">{routine.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-sm sm:text-base truncate ${
                    routine.completed
                      ? 'line-through text-lumi-gray-text dark:text-gray-400'
                      : 'text-lumi-gray-text dark:text-white'
                  }`}>
                    {routine.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-lumi-gray-text dark:text-gray-400 mt-0.5 sm:mt-1">
                    <Clock size={10} className="sm:w-3 sm:h-3" />
                    {routine.time}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm ${
                    routine.completed
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-lumi-gray-border dark:border-gray-600'
                  }`}
                >
                  {routine.completed && '✓'}
                </div>
                <button
                  className="p-1.5 sm:p-2 hover:bg-lumi-gray-light dark:hover:bg-gray-700 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteRoutine(routine.id)
                  }}
                >
                  <Trash2 size={14} className="text-red-500 sm:w-4 sm:h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {filteredRoutines.length === 0 && (
          <Card className="text-center py-6 sm:py-8 p-4 sm:p-6">
            <p className="text-xs sm:text-sm text-lumi-gray-text dark:text-gray-400">
              No hay rutinas {filter !== 'all' ? 'en esta categoría' : 'aún'}
            </p>
          </Card>
        )}
      </div>

      <FloatingActionButton label="Agregar rutina" onClick={() => {}} />
    </MainLayout>
  )
}
