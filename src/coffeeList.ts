import espresso from './assets/coffees/espresso.svg'
import american from './assets/coffees/american.svg'
import espressoCrema from './assets/coffees/espresso-crema.svg'
import icedCoffee from './assets/coffees/iced-coffee.svg'
import milkCoffee from './assets/coffees/milk-coffee.svg'
import latte from './assets/coffees/latte.svg'
import cappuccino from './assets/coffees/cappuccino.svg'
import macchiato from './assets/coffees/macchiato.svg'
import mochaccino from './assets/coffees/mochaccino.svg'
import hotChocolate from './assets/coffees/hot-chocolate.svg'
import cuban from './assets/coffees/cuban.svg'
import hawaiian from './assets/coffees/hawaiian.svg'
import arabian from './assets/coffees/arabian.svg'
import irish from './assets/coffees/irish.svg'

export const coffeeList = [
  {
    imageUrl: espresso,
    description: 'O tradicional café feito com água quente e grãos moídos',
    name: 'Expresso Tradicional',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    imageUrl: american,
    description: 'Expresso diluído, menos intenso que o tradicional',
    name: 'Expresso Americano',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    imageUrl: espressoCrema,
    description: 'Café expresso tradicional com espuma cremosa',
    name: 'Expresso Cremoso',
    price: 9.9,
    tags: ['TRADICIONAL'],
  },
  {
    imageUrl: icedCoffee,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    name: 'Expresso Gelado',
    price: 9.9,
    tags: ['TRADICIONAL', 'GELADO'],
  },
  {
    imageUrl: milkCoffee,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    name: 'Café com Leite',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    imageUrl: latte,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    name: 'Latte',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    imageUrl: cappuccino,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    name: 'Capuccino',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    imageUrl: macchiato,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    name: 'Macchiato',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    imageUrl: mochaccino,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    name: 'Mocaccino',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    imageUrl: hotChocolate,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    name: 'Chocolate Quente',
    price: 9.9,
    tags: ['ESPECIAL', 'COM LEITE'],
  },
  {
    imageUrl: cuban,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    name: 'Cubano',
    price: 9.9,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
  },
  {
    imageUrl: hawaiian,
    description: 'Bebida adocicada preparada com café e leite de coco',
    name: 'Havaiano',
    price: 9.9,
    tags: ['ESPECIAL'],
  },
  {
    imageUrl: arabian,
    description: 'Bebida preparada com graõs de café árabe e especiarias',
    name: 'Árabe',
    price: 9.9,
    tags: ['ESPECIAL'],
  },
  {
    imageUrl: irish,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    name: 'Irlandês',
    price: 9.9,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
  },
]
