import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

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

export function Checkout() {
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
              <button>
                <CreditCard weight="light" />
                CARTÃO DE CRÉDITO
              </button>

              <button>
                <Bank weight="light" />
                CARTÃO DE DÉBITO
              </button>

              <button>
                <Money weight="light" />
                DINHEIRO
              </button>
            </div>
          </Payment>
        </div>
        <div>
          <h1>Cafés selecionados</h1>
          <Order>
            <SelectedCoffee />
            <SelectedCoffee />
            <Prices>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </div>
            </Prices>

            <button>CONFIRMAR PEDIDO</button>
          </Order>
        </div>
      </form>
    </CheckoutContainer>
  )
}
