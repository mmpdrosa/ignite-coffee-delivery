import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

import { SelectedCoffee } from './components/SelectedCoffee'

import {
  AddressForm,
  CepInput,
  CheckoutContainer,
  CityInput,
  ComplementInput,
  DistrictInput,
  FederativeUnitInput,
  HouseNumberInput,
  Order,
  Payment,
  Prices,
  StreetInput,
} from './styles'

import coffeeList from '../../coffees.json'

export function Checkout() {
  const { coffeesInCart } = useContext(OrderContext)

  const coffeesInCartInfo = coffeesInCart.map((coffeeInCart) => {
    const coffeeInCartInfo = coffeeList.find(
      (coffeeInfo) => coffeeInCart.id === coffeeInfo.name,
    )

    return {
      ...coffeeInCart,
      ...coffeeInCartInfo,
    }
  })

  const orderTotal = coffeesInCartInfo.reduce(
    (total, coffeeInCartInfo) =>
      (total += coffeeInCartInfo.amount * coffeeInCartInfo.price),
    0,
  )

  return (
    <CheckoutContainer>
      <form action="">
        <div>
          <h1>Complete seu pedido</h1>
          <AddressForm>
            <header>
              <MapPinLine size={22} />
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <div>
              <CepInput placeholder="CEP" />
              <StreetInput placeholder="Rua" />
              <HouseNumberInput placeholder="Número" />
              <ComplementInput placeholder="Complemento" />
              <DistrictInput placeholder="Bairro" />
              <CityInput placeholder="Cidade" />
              <FederativeUnitInput placeholder="UF" />
            </div>
          </AddressForm>
          <Payment>
            <header>
              <CurrencyDollar size={22} weight="fill" />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>
            <div>
              <button type="button">
                <CreditCard />
                CARTÃO DE CRÉDITO
              </button>

              <button type="button">
                <Bank />
                CARTÃO DE DÉBITO
              </button>

              <button type="button">
                <Money />
                DINHEIRO
              </button>
            </div>
          </Payment>
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

            <button type="submit">CONFIRMAR PEDIDO</button>
          </Order>
        </div>
      </form>
    </CheckoutContainer>
  )
}
