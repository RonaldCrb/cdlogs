import { Request, Response, Router } from 'express'

class FeriaRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.get('/categorias', this.jartate)
  }

  jartate(req: Request, res: Response) {
    const payload = [
      {
        title: 'Hamburguesas, Pepitos, HotDogs',
        icon: 'restaurant_menu',
        color: 'red',
        rests: [
          {
            to: 'feria/foodies',
            src:
             'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
            title: 'foodies'
           },
           {
             to: 'feria/pepsi',
             src: 'https://brandmark.io/logo-rank/random/pepsi.png',
             title: 'pepsi'
           },
           {
             to: 'feria/hamburguesaspepa',
             src:
               'https://www.logoground.com/uploads/2018151692018-07-314525214sonic-food.jpg',
             title: 'Garage burger'
          },
          {
            to: 'feria/burger',
            src:
              'https://thumbs.dreamstime.com/z/vector-logo-template-de-la-hamburguesa-del-logotipo-109012956.jpg',
            title: '282 burger'
          }
        ]
      },
      {
        title: 'Pizzas, Pastas, Pasapalos',
        icon: 'restaurant_menu',
        color: 'red',
        rests: [
          {
            to: 'feria/pizzitas',
            src:
              'https://image.shutterstock.com/image-vector/pizzeria-vector-emblem-on-blackboard-260nw-635547866.jpg',
            title: 'pizzitas'
          },
          {
            to: 'feria/italianpizza',
            src:
              'https://images.vexels.com/media/users/3/128435/isolated/preview/3bba8cf18c7b31717c98231e7d6e736e-logo-de-pizza-italiana-by-vexels.png',
            title: 'italian pizza'
          },
          {
            to: 'feria/pizzonino',
            src:
              'https://www.designfreelogoonline.com/wp-content/uploads/2017/04/000821-Free-Logo-Maker-create-free-italian-pizza-Logo-design-02.png',
            title: 'pizzonino'
          },
          {
            to: 'feria/giusseppes',
            src:
              'https://www.giuseppespizzeria.co.uk/wp-content/uploads/2018/02/giuseppes-logo.png',
            title: 'giusseppes'
          }
        ]
      },
      {
        title: 'Comida Criolla, Cachapas, Carnes',
        icon: 'restaurant_menu',
        color: 'red',
        rests: [
          {
            to: 'feria/beefsteak',
            src:
              'https://previews.123rf.com/images/vectorich/vectorich1803/vectorich180300009/98027746-beef-steak-logo.jpg',
            title: 'beef stake'
          },
          {
            to: 'feria/chicken',
            src:
              'https://15logo.net/wp-content/uploads/2017/11/Chicken-logo-design.jpg',
            title: 'chicken'
          },
          {
            to: 'feria/tuna',
            src:
              'https://image.freepik.com/vector-gratis/diseno-plantilla-logo-atun_1347-3.jpg',
            title: 'tuna always fresh'
          },
          {
            to: 'feria/cachapas',
            src: 'https://arepas.top/wp-content/uploads/2018/11/cachapa.jpg',
            title: 'CachapasDjinn'
          }
        ]
      },
      {
        title: 'Comida Arabe e Internacional',
        icon: 'restaurant_menu',
        color: 'red',
        rests: [
          {
            to: '',
            src: '',
            title: ''
          },
          {
            to: '',
            src: '',
            title: ''
          },
          {
            to: 'feria/sushi',
            src:
              'https://st2.depositphotos.com/4435747/8753/v/950/depositphotos_87534080-stock-illustration-sushi-japanese-food-logo.jpg',
            title: 'sushi'
          },
          {
            to: '',
            src: '',
            title: ''
          }
        ]
      },
      {
        title: 'Postres, Tortas, Dulces, Pasteleria',
        icon: 'restaurant_menu',
        color: 'red',
        rests: [
          {
            to: '',
            src: '',
            title: ''
          },
          {
            to: '',
            src: '',
            title: ''
          },
          {
            to: '',
            src: '',
            title: ''
          },
          {
            to: '',
            src: '',
            title: ''
          }
        ]
      }
    ]
    res.send(payload)
  }

}

const feriaRoutes = new FeriaRoutes()
feriaRoutes.routes()

export default feriaRoutes.router