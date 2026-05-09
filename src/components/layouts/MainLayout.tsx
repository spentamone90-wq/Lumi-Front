import React from 'react'
import { BottomNav } from '../common/BottomNav'

interface MainLayoutProps {
  children: React.ReactNode
  showBottomNav?: boolean
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showBottomNav = true,
}) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 min-h-screen">
      <div className={`overflow-y-auto ${showBottomNav ? 'pb-20' : ''}`}>
        {children}
      </div>
      {showBottomNav && <BottomNav />}
    </div>
  )
}
