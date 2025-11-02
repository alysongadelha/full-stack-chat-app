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

  const sendMessage = async (message) => {
    if (message.startsWith('./')) {
      const command = message.substring(1)
      switch (command) {
        case 'clear':
          setMessages([])
          break
        case 'rooms': {
          const userInfo = await socket.emitWithAck('user.info', socket.id)
          const rooms = userInfo.rooms.filter((room) => room !== socket.id)
          receiveMessage({
            message: `You are in: ${rooms.join(', ')}`,
          })
          break
        }
        default:
          receiveMessage({
            message: `Unknown command: ${command}`,
          })
          break
      }
    } else {
      socket.emit('chat.mesßsage', message)
    }
  }

  return { messages, sendMessage }
}
