import produce from 'immer'
import { createContext, ReactNode, useState } from 'react'

interface Coffee {
  id: string
  amount: number
}

interface Address {
  zip: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  federativeUnit: string
}

interface OrderContextType {
  coffeesInCart: Coffee[]
  payment: string
  deliveryAddress: Address
  incrementCoffeeAmountInCart: (id: string) => void
  decrementCoffeeAmountInCart: (id: string) => void
  removeCoffeeFromCart: (id: string) => void
  changePayment: (form: string) => void
  addDeliveryAddress: (data: Address) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [coffeesInCart, setCoffeesInCart] = useState<Coffee[]>([])

  const [payment, setPayment] = useState('')

  const [deliveryAddress, setDeliveryAddress] = useState({} as Address)

  function changePayment(form: string) {
    setPayment(form)
  }

  function getCoffeeInCartIndexById(id: string) {
    return coffeesInCart.findIndex((coffeeInCart) => coffeeInCart.id === id)
  }

  function incrementCoffeeAmountInCart(id: string) {
    const coffeeToIncrementIndex = getCoffeeInCartIndexById(id)

    setCoffeesInCart((state) =>
      produce(state, (draft) => {
        if (coffeeToIncrementIndex < 0) draft.push({ id, amount: 1 })
        else draft[coffeeToIncrementIndex].amount += 1
      }),
    )
  }

  function removeCoffeeFromCart(id: string) {
    const coffeeToRemoveIndex = getCoffeeInCartIndexById(id)

    if (coffeeToRemoveIndex < 0) return

    setCoffeesInCart((state) =>
      produce(state, (draft) => {
        draft = draft.filter((coffee) => coffee.id !== id)
        return draft
      }),
    )
  }

  function decrementCoffeeAmountInCart(id: string) {
    const coffeeToDecrementIndex = getCoffeeInCartIndexById(id)

    if (coffeeToDecrementIndex < 0) return

    setCoffeesInCart((state) =>
      produce(state, (draft) => {
        if (draft[coffeeToDecrementIndex].amount > 1)
          draft[coffeeToDecrementIndex].amount -= 1
        else removeCoffeeFromCart(id)
      }),
    )
  }

  function addDeliveryAddress(data: Address) {
    setDeliveryAddress(data)
  }

  return (
    <OrderContext.Provider
      value={{
        coffeesInCart,
        payment,
        deliveryAddress,
        incrementCoffeeAmountInCart,
        decrementCoffeeAmountInCart,
        removeCoffeeFromCart,
        changePayment,
        addDeliveryAddress,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
