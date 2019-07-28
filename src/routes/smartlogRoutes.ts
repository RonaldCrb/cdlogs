import { Request, Response, Router } from 'express'
import Smartlog from '../models/Smartlog'
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
    const newSmartlog = {
      diver_name: req.body.diver_name,
      standby_diver: req.body.standby_diver,
      diving_supervisor: req.body.diving_supervisor,
      diving_contractor: req.body.diving_contractor,
      diver_bailout_pressure: req.body.diver_bailout_pressure,
      standby_diver_bailout_pressure: req.body.standby_diver_bailout_pressure,
      breathing_gas: req.body.breathing_gas,
      dive_system_id: req.body.dive_system_id,
      sea_state: req.body.sea_state,
      bottom_temperature: req.body.bottom_temperature,
      bottom_visibility: req.body.bottom_visibility,
      bottom_current: req.body.bottom_current,
      leave_surface: req.body.leave_surface,
      leave_bottom: req.body.leave_bottom,
      bottom_time: req.body.bottom_time,
      depth: req.body.depth,
      work_description: req.body.work_description,
      penetration_diving: req.body.penetration_diving,
      post_dive_assesment: req.body.post_dive_assesment,
      dive_method: req.body.dive_method,
      decompression_completed_at: req.body.decompression_completed_at,
      location: req.body.location,
      vessel: req.body.vessel,
      client: req.body.client,
    }
    const smartlog = await Smartlog.findByIdAndUpdate(req.params.id, newSmartlog)
    res.status(201).json({ data: smartlog })
  }

  async smartlogCreate(req: Request, res: Response): Promise<void> {
    const smartlog = {
      date: moment(req.body.date, "DD-MM-YYYY hh:mm"),
      name: req.body.name,
      location: req.body.location,
      vessel: req.body.vessel,
      bottom_condition: req.body.bottom_condition,
      sea_state: req.body.sea_state,
      bottom_temperature: req.body.bottom_temperature,
      bottom_visibility: req.body.bottom_visibility,
      bottom_current: req.body.bottom_current,
      diving_method: req.body.diving_method,
      depth: req.body.depth,
      leave_surface: moment(req.body.leave_surface, "DD-MM-YYYY hh:mm"),
      leave_bottom: moment(req.body.leave_bottom, "DD-MM-YYYY hh:mm"),
      bottom_time: req.body.bottom_time,
      decompression_completed_at: moment(req.body.decompression_completed_at, "DD-MM-YYYY hh:mm"),
      dive_system: req.body.dive_system,
      breathing_gas: req.body.breathing_gas,
      work_description: req.body.work_description,
      equipment_testing_record: req.body.equipment_testing_record,
      decompression_schedule: req.body.decompression_schedule,
      decompression_sickness: req.body.decompression_sickness,
      penetration_diving: req.body.penetration_diving,
      diving_contractor: req.body.diving_contractor,
      diving_supervisor: req.body.diving_supervisor,
      signature_date: moment(req.body.signature_date, "DD-MM-YYYY hh:mm"),
    }
    const newSmartlog = new Smartlog(smartlog)
    await newSmartlog.save()
    res.status(201).json({ data: newSmartlog })
  }
}

const smartlogRoutes = new SmartlogRoutes()
smartlogRoutes.routes()

export default smartlogRoutes.router