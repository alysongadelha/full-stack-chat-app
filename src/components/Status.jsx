import { useSocket } from '../contexts/SocketIOContext.jsx'

export const Status = () => {
  const { status, error } = useSocket()

  return (
    <div>
      Socket status: <strong>{status}</strong>
      {error && <i> - {error.message}</i>}
    </div>
  )
}
