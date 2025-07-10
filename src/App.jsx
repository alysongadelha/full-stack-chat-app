import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { io } from 'socket.io-client'
import { Blog } from './pages/Blog.jsx'
import { Signup } from './pages/Signup.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { Login } from './pages/Login.jsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Blog />,
  },
  {
    path: 'signup',
    element: <Signup />,
  },
  {
    path: 'login',
    element: <Login />,
  },
])

const socket = io(import.meta.env.VITE_SOCKET_HOST)

socket.on('connect', () => {
  console.log('connected to socket.io as ', socket.io)
})

socket.on('connect_error', (error) => {
  console.error('socket.io connect error: ', error)
})

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}
