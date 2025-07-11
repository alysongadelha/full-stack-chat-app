import { createServer } from 'node:http'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { Server } from 'socket.io'
import { postsRoutes } from './routes/posts.js'
import { userRoutes } from './routes/users.js'
import { handleSocket } from './socket.js'

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
handleSocket(io)

export { server as app }
