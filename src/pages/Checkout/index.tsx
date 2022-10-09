import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import { OrderContext } from '../../contexts/OrderContext'

import { SelectedCoffee } from './components/SelectedCoffee'

import { AddressForm } from './components/AddressForm'
import { Payment } from './components/Payment'

import { CheckoutContainer, Order, Prices } from './styles'

import { coffeeList } from '../../coffeeList'

const addressFormValidationSchema = zod.object({
  zip: zod.string().min(1),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().min(1),
  district: zod.string().min(1),
  city: zod.string().min(1),
  federativeUnit: zod.string().min(1),
})

type addressFormData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const { coffeesInCart, addDeliveryAddress, payment } =
    useContext(OrderContext)

  const navigate = useNavigate()

  const addressForm = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      zip: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      federativeUnit: '',
    },
  })

  const { handleSubmit, reset } = addressForm

  function handleConfirmOrder(data: addressFormData) {
    addDeliveryAddress(data)

    navigate('/success')

    reset()
  }

  const coffeesInCartInfo = coffeesInCart.map((coffeeInCart) => {
    const coffeeInCartInfo = coffeeList.find(
      (coffeeInfo) => coffeeInCart.id === coffeeInfo.name,
    )

    if (!coffeeInCartInfo)
      return {
        ...coffeeInCart,
        price: 0,
        name: '',
        imageUrl: '',
      }

    return {
      ...coffeeInCart,
      price: coffeeInCartInfo.price,
      name: coffeeInCartInfo.name,
      imageUrl: coffeeInCartInfo.imageUrl,
    }
  })

  const orderTotal = coffeesInCartInfo.reduce(
    (total, coffeeInCartInfo) =>
      (total += coffeeInCartInfo.amount * coffeeInCartInfo.price),
    0,
  )

  const isOrderIncomplete = coffeesInCart.length === 0 || payment === ''

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleConfirmOrder)} action="">
        <div>
          <h1>Complete seu pedido</h1>
          <FormProvider {...addressForm}>
            <AddressForm />
          </FormProvider>
          <Payment />
        </div>
        <div>
          <h1>Cafés selecionados</h1>
          <Order>
            {coffeesInCartInfo &&
              coffeesInCartInfo.map((coffeeInCartInfo) => (
                <SelectedCoffee
                  key={coffeeInCartInfo.id}
                  imageUrl={coffeeInCartInfo.imageUrl}
                  name={coffeeInCartInfo.name}
                  price={coffeeInCartInfo.price}
                />
              ))}
            <Prices>
              <div>
                <span>Total de itens</span>
                <span>
                  {`R$ ${orderTotal.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}`}
                </span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>{`R$ ${(orderTotal + 3.5).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}`}</strong>
              </div>
            </Prices>

            <button disabled={!!isOrderIncomplete} type="submit">
              CONFIRMAR PEDIDO
            </button>
          </Order>
        </div>
      </form>
    </CheckoutContainer>
  )
}
