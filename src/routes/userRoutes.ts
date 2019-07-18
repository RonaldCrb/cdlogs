import { Request, Response, Router } from 'express'
import User from '../models/User'
// USAR MD5 o Bcrypt para cifrar el password antes de guardarlo en DB
class UserRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.post('/', this.createUsers)
    this.router.get('/', this.getUsers)
    this.router.get('/:id', this.getUser)
    this.router.put('/:id', this.updateUsers)
    this.router.delete('/:id', this.deleteUsers)
  }

  async getUsers(req: Request, res: Response) {
    const users = await User.find()
    res.status(200).json(users)
  }

  async getUser(req: Request, res: Response) {
    const userId = req.body.id
    const user = await User.findById(userId)
    res.status(200).json(user)
  }

  async createUsers(req: Request, res: Response) {
    const { firstName, lastName, email, isMerchant, password } = req.body
    const newUser = new User({ firstName, lastName, email, isMerchant, password })
    await newUser.save()
    res.status(201).json({ data: newUser })
  }

  updateUsers(req: Request, res: Response) {

  }

  deleteUsers(req: Request, res: Response) {

  }
}

const userRoutes = new UserRoutes()
userRoutes.routes()
export default userRoutes.router