import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

import { OrderContext } from '../../contexts/OrderContext'
import { useContext } from 'react'

interface CounterProps {
  coffeeId: string
}

export function Counter({ coffeeId }: CounterProps) {
  const {
    coffeesInCart,
    incrementCoffeeAmountInCart,
    decrementCoffeeAmountInCart,
  } = useContext(OrderContext)

  function incrementCoffeAmount() {
    incrementCoffeeAmountInCart(coffeeId)
  }

  function decrementCoffeeAmount() {
    decrementCoffeeAmountInCart(coffeeId)
  }

  const coffeeAmount = coffeesInCart.find(
    (coffeInCart) => coffeInCart.id === coffeeId,
  )?.amount

  return (
    <CounterContainer>
      <button onClick={decrementCoffeeAmount} type="button">
        <Minus weight="bold" />
      </button>
      <span>{coffeeAmount || 0}</span>
      <button onClick={incrementCoffeAmount} type="button">
        <Plus weight="bold" />
      </button>
    </CounterContainer>
  )
}
