import { Request, Response, Router } from 'express'

class SmartlogRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.get('/smartlogs', this.smartlogIndex)
    this.router.get('/smartlogs/:id', this.smartlogFind)
    this.router.delete('/smartlogs/:id', this.smartlogDelete)
    this.router.put('/smartlogs/:id', this.smartlogUpdate)
    this.router.post('/smartlogs', this.smartlogCreate)
  }

  smartlogIndex(req: Request, res: Response) {
    // smartlog.findAll
  }

  smartlogFind(req: Request, res: Response) {
    // smartlog.findOne
  }

  smartlogDelete(req: Request, res: Response) {
    // smartlog.delete
  }

  smartlogUpdate(req: Request, res: Response) {
    // smartlog.updateOne
  }

  smartlogCreate(req: Request, res: Response) {
    const smartlog = {
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

const smartlogRoutes = new SmartlogRoutes()
smartlogRoutes.routes()

export default smartlogRoutes.router