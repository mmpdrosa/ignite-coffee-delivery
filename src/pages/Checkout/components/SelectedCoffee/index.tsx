import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Counter } from '../../../../components/Counter'
import { OrderContext } from '../../../../contexts/OrderContext'
import { Actions, SelectedCoffeeContainer } from './styles'

interface SelectedCoffeeProps {
  name: string
  imageUrl: string
  price: number
}

export function SelectedCoffee({ imageUrl, name, price }: SelectedCoffeeProps) {
  const { removeCoffeeFromCart } = useContext(OrderContext)

  function removeCoffee() {
    removeCoffeeFromCart(name)
  }

  return (
    <SelectedCoffeeContainer>
      <div>
        <img src={imageUrl} alt="" />
        <div>
          <h3>{name}</h3>
          <Actions>
            <Counter coffeeId={name} />
            <button onClick={removeCoffee} type="button">
              <Trash />
              REMOVER
            </button>
          </Actions>
        </div>
      </div>
      <span>{`R$ ${price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
      })}`}</span>
    </SelectedCoffeeContainer>
  )
}
