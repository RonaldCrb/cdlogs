import { Request, Response, Router } from 'express'

class IndexRoutes {
  router: Router
  
  constructor () {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.get('/', (req, res) => res.send('Endpoints Disponibles: /auth/signup'))
  }
}

const indexRoutes = new IndexRoutes()
indexRoutes.routes()

export default indexRoutes.router