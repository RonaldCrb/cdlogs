import { Request, Response, Router } from 'express'

class UserRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.get('/users', this.userIndex)
    this.router.get('/users/:id', this.userFind)
    this.router.delete('/users/:id', this.userDelete)
    this.router.put('/users/:id', this.userUpdate)
    this.router.post('/users', this.userCreate)
  }
  
  userIndex(req: Request, res: Response) {
    // user.findAll
  }
  
  userFind(req: Request, res: Response) {
    // user.findOne
  }
  
  userDelete(req: Request, res: Response) {
    // user.delete
  }

  userUpdate(req: Request, res: Response) {
    // user.updateOne
  }

  userCreate(req: Request, res: Response) {
    const user = {
      name: req.body.name,
      email: req.body.email,
      dob: req.body.dob,
      pob: req.body.pob,
      address: req.body.address,
      citizenship: req.body.citizenship,
      passportNum: req.body.passportNum,
    }
    // mongoose.createOne
  }
}

const userRoutes = new UserRoutes()
userRoutes.routes()

export default userRoutes.router