import { Request, Response, Router } from 'express'
import Smartlog from '../models/Smartlog'
import { ISmartlog } from '../types/interfaces'
import moment from 'moment';
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
    this.router.put('/:id', this.smartlogUpdate)
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
    const newSmartlog: ISmartlog= {
      date: req.body.date,
      diver: req.body.diver,
      location: req.body.location,
      vessel: req.body.vessel,
      sea_state: req.body.sea_state,
      bottom_temperature: req.body.bottom_temperature,
      bottom_visibility: req.body.bottom_visibility,
      bottom_current: req.body.bottom_current,
      depth: req.body.depth,
      leave_surface: req.body.leave_surface,
      leave_bottom: req.body.leave_bottom,
      bottom_time: req.body.bottom_time,
      decompression_completed_at: req.body.decompression_completed_at,
      breathing_gas: req.body.breathing_gas,
      work_description: req.body.work_description,
      penetration_diving: req.body.penetration_diving,
      diving_contractor: req.body.diving_contractor,
      diving_supervisor: req.body.diving_supervisor,
    }
    const smartlog = await Smartlog.findByIdAndUpdate(req.params.id, newSmartlog)
    res.status(201).json({ data: smartlog })
  }

  async smartlogCreate(req: Request, res: Response): Promise<void> {
    const smartlog: ISmartlog = {
      date: req.body.date,
      diver: req.body.diver,
      location: req.body.location,
      vessel: req.body.vessel,
      sea_state: req.body.sea_state,
      bottom_temperature: req.body.bottom_temperature,
      bottom_visibility: req.body.bottom_visibility,
      bottom_current: req.body.bottom_current,
      depth: req.body.depth,
      leave_surface: req.body.leave_surface,
      leave_bottom: req.body.leave_bottom,
      bottom_time: req.body.bottom_time,
      decompression_completed_at: req.body.decompression_completed_at,
      breathing_gas: req.body.breathing_gas,
      work_description: req.body.work_description,
      penetration_diving: req.body.penetration_diving,
      diving_contractor: req.body.diving_contractor,
      diving_supervisor: req.body.diving_supervisor,
    }
    const newSmartlog = new Smartlog(smartlog)
    await newSmartlog.save()
    res.status(201).json({ data: newSmartlog })
  }
}

const smartlogRoutes = new SmartlogRoutes()
smartlogRoutes.routes()

export default smartlogRoutes.router