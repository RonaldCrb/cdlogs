import { Request, Response, Router } from 'express'
import { noDecompressionLimit, groupLetter, repetLetter, residualNitrogenTime } from 'diving-decompression'
import usNavyAirDecompressionTable from '../tables/usnavy-deco-rev7'
import _ from 'lodash'
class SmartlogRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.post('/noDecompressionLimit', this.noDecompressionLimit)
    this.router.post('/groupLetter', this.groupLetter)
    this.router.post('/repetLetter', this.repetLetter)
    this.router.post('/residualNitrogenTime', this.residualNitrogenTime)
    this.router.post('/decoTest', this.decotest)
  }

  async decotest(req: Request, res: Response): Promise<void> {
      const dive = req.body.dive
      const table: any = _.find(usNavyAirDecompressionTable.tableData, (element) => {
        return element.minfsw <= dive.depth && dive.depth <= element.maxfsw;
      });
      const decoObject = _.find(table.rows, (element) => {
      return element.minTime <= dive.bottomTime && dive.bottomTime <= element.maxTime;
      });
      console.log(decoObject)
    }
  
  async noDecompressionLimit(req: Request, res: Response): Promise<void> {
    const respuesta = await noDecompressionLimit({
      depth: req.body.depth,
      bottomTime: req.body.bottomTime,
    });
    res.status(200).json(respuesta)
  }

  async groupLetter(req: Request, res: Response): Promise<void> {
    const respuesta = await groupLetter({
      depth: req.body.depth,
      bottomTime: req.body.bottomTime,
    });
    res.status(200).json(respuesta)
  }

  async repetLetter(req: Request, res: Response): Promise<void> {
    const respuesta = await repetLetter({
      depth: req.body.depth,
      bottomTime: req.body.bottomTime,
      sit: req.body.sit,
      nextTime: req.body.nextTime,
      nextDepth: req.body.nextDepth,
    });
    res.status(200).json(respuesta)
  }

  async residualNitrogenTime(req: Request, res: Response): Promise<void> {
    const respuesta = await residualNitrogenTime({
      depth: req.body.depth,
      bottomTime: req.body.bottomTime,
      sit: req.body.sit,
      nextTime: req.body.nextTime,
      nextDepth: req.body.nextDepth,
    });
    res.status(200).json(respuesta)
  }
}

const smartlogRoutes = new SmartlogRoutes()
smartlogRoutes.routes()

export default smartlogRoutes.router