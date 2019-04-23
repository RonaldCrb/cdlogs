import { Request, Response, Router } from 'express'

class PromoRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.get('/promos', this.jartate)
  }

  jartate(req: Request, res: Response) {
    const payload = {

      banner: {
        to: 'feria/cachapas',
        src: 'https://gastronomiaycia.republica.com/wp-content/uploads/2012/02/hct_cachapa_venezolana.jpg',
        alt: 'CachapasDjinn'
      },

      jumbo1: {
        to: 'feria/foodies',
        src: 'http://bk-emea-prd.s3.amazonaws.com/sites/burgerking.es/files/Kingbacon_product_thumb_02.png',
        alt: 'Foodies'
      },

      jumbo2: {
        to: 'feria/pizzatop',
        src: 'https://www.cilantroandcitronella.com/wp-content/uploads/2017/10/vegan-nacho-pizza-photo.jpg',
        alt: 'Pizza Top'
      },

      jumbo3: {
        to: 'feria/arepas',
        src: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/1400C/production/_93723918_thinkstockphotos-627042504.jpg',
        alt: 'Arepas'
      }
    }
    res.send(payload)
  }

}

const promoRoutes = new PromoRoutes()
promoRoutes.routes()

export default promoRoutes.router