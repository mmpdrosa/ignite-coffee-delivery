import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import landing from '../../assets/landing.svg'

import { CoffeeCard } from './components/CoffeeCard'

import {
  CoffeeList,
  HomeContainer,
  Introduction,
  Item,
  Items,
  Title,
} from './styles'

import coffees from '../../coffees.json'

export function Home() {
  return (
    <HomeContainer>
      <Introduction>
        <section>
          <Title>
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </Title>
          <Items>
            <Item>
              <div>
                <ShoppingCart weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </Item>
            <Item>
              <div>
                <Package weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item>
              <div>
                <Timer weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Item>
            <Item>
              <div>
                <Coffee weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </Item>
          </Items>
        </section>
        <img src={landing} alt="" />
      </Introduction>
      <h1>Nossos cafés</h1>
      <CoffeeList>
        {coffees &&
          coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.name}
              description={coffee.description}
              imageUrl={coffee.imageUrl}
              name={coffee.name}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))}
      </CoffeeList>
    </HomeContainer>
  )
}
