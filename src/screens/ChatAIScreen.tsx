import React, { useState, useRef, useEffect } from 'react'
import { MainLayout } from '../components/layouts/MainLayout'
import { ChatBubble } from '../components/common/ChatBubble'
import { Input } from '../components/common/Input'
import { Button } from '../components/common/Button'
import { useAppContext } from '../context/AppContext'
import { Send } from 'lucide-react'

export const ChatAIScreen: React.FC = () => {
  const { chatMessages, addChatMessage } = useAppContext()
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const sampleMessages = [
    { id: '1', text: '¡Hola! Soy Lumi, tu asistente de bienestar. ¿Cómo te puedo ayudar hoy?', sender: 'ai' as const, timestamp: new Date() },
    { id: '2', text: 'Necesito consejos para mantener mi motivación', sender: 'user' as const, timestamp: new Date() },
    { id: '3', text: 'Excelente pregunta. La consistencia es clave. Aquí hay algunos consejos: 1) Empieza con metas pequeñas, 2) Celebra cada logro, 3) Mantén un registro visual del progreso.', sender: 'ai' as const, timestamp: new Date() },
  ]

  const displayMessages = chatMessages.length > 0 ? chatMessages : sampleMessages

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [displayMessages])

  const handleSend = () => {
    if (input.trim()) {
      addChatMessage({
        id: String(Date.now()),
        text: input,
        sender: 'user',
        timestamp: new Date(),
      })
      setInput('')

      setIsTyping(true)
      setTimeout(() => {
        addChatMessage({
          id: String(Date.now()),
          text: 'Estoy procesando tu mensaje... 🤖',
          sender: 'ai',
          timestamp: new Date(),
        })
        setIsTyping(false)
      }, 1000)
    }
  }

  return (
    <MainLayout>
      <div className="h-[calc(100dvh-5rem)] flex flex-col bg-white dark:bg-gray-900 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-lumi-gray-border dark:border-gray-700">
          <h1 className="text-xl sm:text-2xl font-bold text-lumi-gray-text dark:text-white">
            Asistente IA
          </h1>
          <p className="text-xs sm:text-sm text-lumi-gray-text dark:text-gray-400">
            Tu compañero inteligente para motivarte
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
          {displayMessages.map(message => (
            <ChatBubble
              key={message.id}
              message={message.text}
              sender={message.sender}
              timestamp={message.timestamp}
            />
          ))}
          {isTyping && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-lumi-gray-light dark:bg-gray-700 flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-lumi-gray-text animate-bounce" />
                  <div className="w-1 h-1 rounded-full bg-lumi-gray-text animate-bounce delay-100" />
                  <div className="w-1 h-1 rounded-full bg-lumi-gray-text animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>

        <div className="p-3 sm:p-4 border-t border-lumi-gray-border dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex gap-2 sm:gap-3">
            <Input
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
            />
            <Button
              variant="primary"
              onClick={handleSend}
              disabled={!input.trim()}
              className="flex-shrink-0 px-4"
            >
              <Send size={18} className="sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
