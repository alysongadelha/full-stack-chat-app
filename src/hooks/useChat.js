import { useEffect, useState } from 'react'
import { useSocket } from '../contexts/SocketIOContext.jsx'

export const useChat = () => {
  const { socket } = useSocket()
  const [messages, setMessages] = useState([])

  const receiveMessage = (message) => {
    setMessages((messages) => [...messages, message])
  }

  useEffect(() => {
    socket.on('chat.message', receiveMessage)

    return () => socket.off('chat.message', receiveMessage)
  }, [])

  const sendMessage = (message) => {
    socket.emit('chat.message', message)
  }

  return { messages, sendMessage }
}
