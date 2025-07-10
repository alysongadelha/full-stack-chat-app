import { createServer } from 'node:http'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { Server } from 'socket.io'
import { postsRoutes } from './routes/posts.js'
import { userRoutes } from './routes/users.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())
postsRoutes(app)
userRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello from express')
})

const server = createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log('user connected: ', socket.id)

  socket.on('disconnect', () => {
    console.log('user disconnected: ', socket.id)
  })
})

export { server as app }
