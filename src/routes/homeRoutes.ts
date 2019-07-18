import { Request, Response, Router } from 'express'

class HomeRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.get('/', this.home)
  }

  home(req: Request, res: Response) {
    res.status(200).send(`<h1>Welcome to ts-node</h1>`)
  }
}

const homeRoutes = new HomeRoutes()
homeRoutes.routes()

export default homeRoutes.router