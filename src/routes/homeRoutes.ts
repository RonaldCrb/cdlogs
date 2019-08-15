import { Request, Response, Router } from 'express'
import { HOME_MESSAGE } from '../constants/cdlogs.constants'
import { noDecompressionLimit } from 'diving-decompression'
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
    res.status(200).send(HOME_MESSAGE)
  }
}

const homeRoutes = new HomeRoutes()
homeRoutes.routes()

export default homeRoutes.router