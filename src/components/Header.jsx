import { jwtDecode } from 'jwt-decode'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useSocket } from '../contexts/SocketIOContext.jsx'
import { User } from './User.jsx'

export const Header = () => {
  const [token, setToken] = useAuth()
  const { socket } = useSocket()

  const handleLogout = () => {
    socket.disconnect()
    setToken(null)
  }

  if (token) {
    const { sub } = jwtDecode(token)

    return (
      <div>
        Logged in as <User id={sub} />
        <br />
        <button type='button' onClick={handleLogout}>Logout</button>
      </div>
    )
  }
  return (
    <div>
      <Link to={'login'}>Log in</Link> | <Link to={'signup'}>Sing up</Link>
    </div>
  )
}
