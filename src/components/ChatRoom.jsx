import {useChat} from '../hooks/useChat.js'
import {ChatMessage} from './ChatMessage.jsx'
import {EnterMessage} from './EnterMessage.jsx'

export const ChatRoom = () => {
    const {messages, sendMessage} = useChat()




  return (
    <div>
        {messages.map((message) => (
            <ChatMessage key={`${message}-number-${Math.random()}`} />
        ))}
        <EnterMessage onSend={sendMessage} />
    </div>
  )
}
