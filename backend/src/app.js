import { createServer } from 'node:http'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { Server } from 'socket.io'
import { userRoutes } from './routes/users.js'
import { handleSocket } from './socket.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())
userRoutes(app)

// biome-ignore lint/correctness/noUnusedFunctionParameters: test file
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
