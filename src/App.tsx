import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { SplashScreen } from './screens/SplashScreen'
import { OnboardingScreen } from './screens/OnboardingScreen'
import { InitialQuestionsScreen } from './screens/InitialQuestionsScreen'
import { HomeScreen } from './screens/HomeScreen'
import { RoutinesScreen } from './screens/RoutinesScreen'
import { ChatAIScreen } from './screens/ChatAIScreen'
import { StatsScreen } from './screens/StatsScreen'
import { ProfileScreen } from './screens/ProfileScreen'
import './styles/globals.css'
import './App.css'

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="w-screen h-screen bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-md h-screen overflow-hidden flex flex-col">
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/onboarding" element={<OnboardingScreen />} />
              <Route path="/questions" element={<InitialQuestionsScreen />} />
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/routines" element={<RoutinesScreen />} />
              <Route path="/chat" element={<ChatAIScreen />} />
              <Route path="/stats" element={<StatsScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
