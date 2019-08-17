import { Request, Response, Router } from 'express'
import Smartlog from '../models/Smartlog'
import { ISmartlog } from '../types/interfaces'
class SmartlogRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.get('/', this.smartlogIndex)
    this.router.get('/:id', this.smartlogFind)
    this.router.delete('/:id', this.smartlogDelete)
    // this.router.put('/:id', this.smartlogUpdate)
    this.router.post('/', this.smartlogCreate)
  }

  async smartlogIndex(req: Request, res: Response): Promise<void> {
    const smartlogs = await Smartlog.find();
    res.status(201).json(smartlogs)
  }

  async smartlogFind(req: Request, res: Response): Promise<void> {
    const smartlog = await Smartlog.findById(req.params.id);
    res.status(201).json(smartlog)
  }

  async smartlogDelete(req: Request, res: Response): Promise<void> {
    await Smartlog.findByIdAndDelete(req.params.id)
    res.status(201).json({ data: `Smartlog ${req.params.id} deleted succesfully`})
  }

  async smartlogUpdate(req: Request, res: Response): Promise<void> {
    const newSmartlog: ISmartlog = req.body
    const smartlog = await Smartlog.findByIdAndUpdate(req.params.id, newSmartlog)
    res.status(201).json({ data: smartlog })
  }

  async smartlogCreate(req: Request, res: Response): Promise<void> {
    const smartlog: ISmartlog = req.body
    console.log(req.body)
    console.log(smartlog)
    const newSmartlog = new Smartlog(smartlog)
    await newSmartlog.save()
    res.status(201).json({ data: newSmartlog })
  }
}

const smartlogRoutes = new SmartlogRoutes()
smartlogRoutes.routes()

export default smartlogRoutes.router