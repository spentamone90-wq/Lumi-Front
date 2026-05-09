import React, { useState } from 'react'
import { MainLayout } from '../components/layouts/MainLayout'
import { Card } from '../components/common/Card'
import { Toggle } from '../components/common/Toggle'
import { Button } from '../components/common/Button'
import { useAppContext } from '../context/AppContext'
import { LogOut, Moon, Bell, Settings } from 'lucide-react'

export const ProfileScreen: React.FC = () => {
  const { theme, setTheme } = useAppContext()
  const [notifications, setNotifications] = useState(true)

  const user = {
    name: 'María García',
    email: 'maria.garcia@email.com',
    avatar: '👩‍🦰',
  }

  return (
    <MainLayout>
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <h1 className="text-xl sm:text-2xl font-bold text-lumi-gray-text dark:text-white">
          Mi Perfil
        </h1>

        <Card className="text-center py-6 sm:py-8 p-4 sm:p-6">
          <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">{user.avatar}</div>
          <h2 className="text-lg sm:text-xl font-bold text-lumi-gray-text dark:text-white mb-0.5 sm:mb-1">
            {user.name}
          </h2>
          <p className="text-xs sm:text-sm text-lumi-gray-text dark:text-gray-400">
            {user.email}
          </p>
        </Card>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-lumi-gray-text dark:text-white mb-3 sm:mb-4">
            Preferencias
          </h3>
          <div className="space-y-2 sm:space-y-3">
            <Card className="p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Moon size={18} className="text-lumi-blue sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base text-lumi-gray-text dark:text-gray-300">
                    Tema Oscuro
                  </span>
                </div>
                <Toggle
                  enabled={theme === 'dark'}
                  onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
              </div>
            </Card>

            <Card className="p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell size={18} className="text-lumi-blue sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base text-lumi-gray-text dark:text-gray-300">
                    Notificaciones
                  </span>
                </div>
                <Toggle
                  enabled={notifications}
                  onChange={setNotifications}
                />
              </div>
            </Card>

            <Card className="flex items-center gap-3 cursor-pointer hover:shadow-card transition-all p-3 sm:p-4">
              <Settings size={18} className="text-lumi-blue flex-shrink-0 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base text-lumi-gray-text dark:text-gray-300">
                Configuración General
              </span>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-lumi-gray-text dark:text-white mb-3 sm:mb-4">
            Información
          </h3>
          <div className="space-y-2 text-xs sm:text-sm">
            <Card className="bg-lumi-gray-light dark:bg-gray-700 p-3 sm:p-4">
              <p className="text-lumi-gray-text dark:text-gray-300">
                <span className="font-semibold">Versión:</span> 1.0.0
              </p>
            </Card>
            <Card className="bg-lumi-gray-light dark:bg-gray-700 p-3 sm:p-4">
              <p className="text-lumi-gray-text dark:text-gray-300">
                <span className="font-semibold">Última actualización:</span> 8 de Mayo
              </p>
            </Card>
          </div>
        </div>

        <Button
          variant="danger"
          fullWidth
          className="flex items-center justify-center gap-2 py-3 sm:py-4"
        >
          <LogOut size={18} className="sm:w-5 sm:h-5" />
          Cerrar Sesión
        </Button>

        <Card className="text-center py-4 sm:py-6 border-2 border-dashed border-lumi-gray-border dark:border-gray-600 p-4 sm:p-6">
          <p className="text-[10px] sm:text-xs text-lumi-gray-text dark:text-gray-400">
            © 2024 Lumi - Tu compañero de bienestar
          </p>
        </Card>
      </div>
    </MainLayout>
  )
}
