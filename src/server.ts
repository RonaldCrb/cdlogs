import express, { Application } from 'express'
import { PORT, CONSOLE_MESSAGE, MONGO_URI } from './constants/cdlogs.constants'
import morgan from 'morgan'
import helmet from 'helmet'
import mongoose from 'mongoose'
import compression from 'compression'
import cors from 'cors'

// Routes
import homeRoutes from './routes/homeRoutes'
import smartlogRoutes from './routes/smartlogRoutes'
import decompressionRoutes from './routes/decompressionRoutes'

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

class Server {
  public app: Application
  
  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  private config() {
    mongoose.set('useFindAndModify', true)
    mongoose.connect(MONGO_URI, {
      poolSize: 20,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => console.log(' Connected to MongoDB!'))
    .catch(() => console.log('Failed to connect to MongoDB!'))

    // Middlewares
    this.app.use(morgan('dev')) // <== logger
    this.app.use(express.json()) // <== bodyparser
    this.app.use(express.urlencoded({extended: false})) // <== bodyparser
    this.app.use(helmet()) // <== headers
    this.app.use(compression()) // <== response compression
    this.app.use(cors()) // <== cross origin resource sharing 
  }

  routes() {
    this.app.use('/', homeRoutes)
    this.app.use('/api/v1/smartlogs', smartlogRoutes)
    this.app.use('/api/v1/decompression', decompressionRoutes)
  }

  start() {
    this.app.listen(PORT, () => {
      console.log(CONSOLE_MESSAGE)
    })
  }
}

const server = new Server()

server.start()