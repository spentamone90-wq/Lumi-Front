import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { ChevronRight, BookOpen, Clock, Zap, Award, MessageSquare } from 'lucide-react'

export const OnboardingScreen: React.FC = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      icon: <BookOpen className="text-lumi-sky w-12 h-12 sm:w-16 sm:h-16" />,
      title: '¡Bienvenido a Lumi!',
      description: 'Tu compañero personal para crear hábitos saludables y alcanzar tus metas',
    },
    {
      icon: <Clock className="text-lumi-blue w-12 h-12 sm:w-16 sm:h-16" />,
      title: 'Organiza tus Rutinas',
      description: 'Crea rutinas personalizadas y recibe recordatorios inteligentes',
    },
    {
      icon: <Zap className="text-yellow-500 w-12 h-12 sm:w-16 sm:h-16" />,
      title: 'Recordatorios Inteligentes',
      description: 'Notificaciones en el momento justo para no olvidar tus actividades',
    },
    {
      icon: <MessageSquare className="text-lumi-sky w-12 h-12 sm:w-16 sm:h-16" />,
      title: 'Asistente IA',
      description: 'Obtén consejos personalizados y motivación de tu asistente inteligente',
    },
    {
      icon: <Award className="text-green-500 w-12 h-12 sm:w-16 sm:h-16" />,
      title: 'Motívate Diariamente',
      description: 'Celebra tus logros y mantén tu motivación alta',
    },
  ]

  const step = steps[currentStep]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      navigate('/questions')
    }
  }

  const handleSkip = () => {
    navigate('/questions')
  }

  return (
    <div className="w-full h-[100dvh] bg-white dark:bg-gray-900 flex flex-col items-center justify-between p-4 sm:p-6 animate-fadeInScale overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-6 text-center px-2">
        <div className="animate-slideUp">{step.icon}</div>
        <div className="animate-slideUp">
          <h1 className="text-2xl sm:text-3xl font-bold text-lumi-gray-text dark:text-white mb-2 sm:mb-3 leading-tight">
            {step.title}
          </h1>
          <p className="text-sm sm:text-base text-lumi-gray-text dark:text-gray-400 max-w-xs mx-auto">
            {step.description}
          </p>
        </div>
      </div>

      <div className="w-full space-y-3 sm:space-y-4 pb-2 sm:pb-0">
        <div className="flex gap-1.5 justify-center mb-2 sm:mb-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all ${
                index === currentStep
                  ? 'w-6 sm:w-8 bg-lumi-blue'
                  : index < currentStep
                    ? 'w-1.5 sm:w-2 bg-lumi-sky'
                    : 'w-1.5 sm:w-2 bg-lumi-gray-border'
              }`}
            />
          ))}
        </div>

        <Button fullWidth onClick={handleNext} className="py-3 sm:py-4">
          {currentStep === steps.length - 1 ? 'Comenzar' : 'Siguiente'}{' '}
          <ChevronRight size={18} className="ml-1 sm:ml-2" />
        </Button>

        <Button fullWidth variant="ghost" onClick={handleSkip} className="py-2">
          Saltar
        </Button>
      </div>
    </div>
  )
}
