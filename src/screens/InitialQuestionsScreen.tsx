import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { Card } from '../components/common/Card'
import { Heart, TrendingUp, Brain, Moon, Lightbulb } from 'lucide-react'

export const InitialQuestionsScreen: React.FC = () => {
  const navigate = useNavigate()
  const [question, setQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  const questions = [
    {
      title: '¿Qué quieres mejorar?',
      options: [
        { label: 'Salud y Ejercicio', icon: <Heart size={32} className="text-red-500" /> },
        { label: 'Productividad', icon: <TrendingUp size={32} className="text-green-500" /> },
        { label: 'Bienestar Mental', icon: <Brain size={32} className="text-purple-500" /> },
        { label: 'Descanso y Sueño', icon: <Moon size={32} className="text-blue-500" /> },
      ],
    },
    {
      title: '¿Cómo te sientes normalmente?',
      options: [
        { label: 'Motivado', icon: '😊' },
        { label: 'Cansado', icon: '😴' },
        { label: 'Estresado', icon: '😟' },
        { label: 'Indeciso', icon: '🤔' },
      ],
    },
    {
      title: '¿Con qué frecuencia quieres hacer actividades?',
      options: [
        { label: 'Todos los días', icon: <Lightbulb size={32} className="text-yellow-500" /> },
        { label: '3-4 veces por semana', icon: '📅' },
        { label: '1-2 veces por semana', icon: '📆' },
        { label: 'Ocasionalmente', icon: '⏰' },
      ],
    },
  ]

  const currentQuestion = questions[question]

  const handleSelect = (selected: string) => {
    const newAnswers = [...answers]
    newAnswers[question] = selected
    setAnswers(newAnswers)

    if (question < questions.length - 1) {
      setQuestion(question + 1)
    } else {
      navigate('/home')
    }
  }

  const handleBack = () => {
    if (question > 0) {
      setQuestion(question - 1)
    }
  }

  return (
    <div className="w-full min-h-[100dvh] bg-white dark:bg-gray-900 p-4 sm:p-6 flex flex-col animate-fadeInScale overflow-x-hidden">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-4">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-1 rounded-full ${
                index < question
                  ? 'bg-lumi-blue'
                  : index === question
                    ? 'bg-lumi-sky'
                    : 'bg-lumi-gray-border'
              }`}
            />
          ))}
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-lumi-gray-text dark:text-white leading-tight">
          {currentQuestion.title}
        </h2>
        <p className="text-xs sm:text-sm text-lumi-gray-text dark:text-gray-400 mt-1">
          Pregunta {question + 1} de {questions.length}
        </p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {currentQuestion.options.map((option, index) => (
          <Card
            key={index}
            hoverable
            onClick={() => handleSelect(option.label)}
            className={`cursor-pointer flex flex-col items-center justify-center py-6 sm:py-8 px-2 ${
              answers[question] === option.label ? 'ring-2 ring-lumi-blue' : ''
            }`}
          >
            <div className="text-3xl sm:text-4xl mb-2">
              {typeof option.icon === 'string' ? option.icon : option.icon}
            </div>
            <span className="text-[10px] sm:text-xs text-center text-lumi-gray-text dark:text-gray-400 font-medium leading-tight">
              {option.label}
            </span>
          </Card>
        ))}
      </div>

      <div className="flex gap-2 sm:gap-3 mt-auto">
        <Button
          variant="secondary"
          fullWidth
          onClick={handleBack}
          disabled={question === 0}
          className="py-3 sm:py-4 text-sm sm:text-base"
        >
          Atrás
        </Button>
        <Button
          fullWidth
          onClick={() => handleSelect(answers[question] || '')}
          disabled={!answers[question]}
          className="py-3 sm:py-4 text-sm sm:text-base"
        >
          {question === questions.length - 1 ? 'Comenzar' : 'Siguiente'}
        </Button>
      </div>
    </div>
  )
}
