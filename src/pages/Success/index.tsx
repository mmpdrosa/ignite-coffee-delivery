import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import success from '../../assets/success.svg'

import { SuccessContainer, OrderInfo, Info, Icon } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        <OrderInfo>
          <div>
            <Icon>
              <MapPin weight="fill" />
            </Icon>
            <Info>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Ferrapos - Porto Alegre, RS</span>
            </Info>
          </div>
          <div>
            <Icon>
              <Timer weight="fill" />
            </Icon>

            <Info>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </Info>
          </div>
          <div>
            <Icon>
              <CurrencyDollar weight="fill" />
            </Icon>
            <Info>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </Info>
          </div>
        </OrderInfo>
        <img src={success} alt="" />
      </div>
    </SuccessContainer>
  )
}
