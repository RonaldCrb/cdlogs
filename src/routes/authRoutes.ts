import { Request, Response, Router } from 'express'

class AuthRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.post('/signup', this.signUp)
    this.router.post('/signin', this.signIn)
  }

  signUp(req: Request, res: Response) { 
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    console.log(email + '##' + name + '##' + password)
    res.send(email + '##' + name + '##' + password)
  }
  
  signIn(req: Request, res: Response) {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    console.log(email + '##' + name + '##' + password)
    res.send(email + '##' + name + '##' + password)
  }

}

const authRoutes = new AuthRoutes()
authRoutes.routes()

export default authRoutes.router