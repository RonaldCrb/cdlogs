import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import mongoose from 'mongoose'
import compression from 'compression'
import cors from 'cors'

// Routes
import homeRoutes from './routes/homeRoutes'
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import smartlogRoutes from './routes/smartlogRoutes'

const uri: string = 'mongodb://localhost:27017/your_database_name';
const user: string = 'username';
const pwd: string = 'password';

class Server {
  public app: express.Application
  
  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  config() {
    mongoose.set('useFindAndModify', true)
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      user: user,
      pass: pwd,
    })
    .then(() => console.log('MongoDB Atlas connected!'))
    .catch(() => console.log('MongoDB Atlas failed to connect!'))

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
    this.app.use('/', homeRoutes)
    this.app.use('/api/v1/auth', authRoutes)
    this.app.use('/api/v1/smartlogs', smartlogRoutes)
    this.app.use('/api/v1/users', userRoutes)
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server Running on => http://localhost:' + this.app.get('port'))
    })
  }
}

const server = new Server()

server.start()