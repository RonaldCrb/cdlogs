import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import mongoose from 'mongoose'
import compression from 'compression'
import cors from 'cors'

import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import smartlogRoutes from './routes/smartlogRoutes'

class Server {
  public app: express.Application
  
  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  config() {
    mongoose.set('useFindAndModify', true)
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(() => console.log('MongoDB Atlas Connected!'))

    // Settings
    this.app.set('port', process.env.PORT || 3001) //PORT Env Variable
    // Middlewares
    this.app.use(morgan('dev'))
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: false}))
    this.app.use(helmet())
    this.app.use(compression())
    this.app.use(cors())
  }

  routes() {
    this.app.use('api/v1/auth', authRoutes)
    this.app.use('api/v1/smartlogs', smartlogRoutes)
    this.app.use('api/v1/user', userRoutes)
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server Running on => http://localhost:' + this.app.get('port'))
    })
  }
}

const server = new Server()

server.start()