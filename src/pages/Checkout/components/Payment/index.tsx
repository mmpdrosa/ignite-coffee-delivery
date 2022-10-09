import { Button, Options, PaymentContainer } from './styles'

import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'

export function Payment() {
  const { payment, changePayment } = useContext(OrderContext)

  return (
    <PaymentContainer>
      <header>
        <CurrencyDollar size={22} weight="fill" />
        <div>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </header>
      <Options>
        <Button
          onClick={() => changePayment('Cartão de Crédito')}
          selected={payment === 'Cartão de Crédito'}
          type="button"
        >
          <CreditCard />
          CARTÃO DE CRÉDITO
        </Button>

        <Button
          onClick={() => changePayment('Cartão de Débito')}
          selected={payment === 'Cartão de Débito'}
          type="button"
        >
          <Bank />
          CARTÃO DE DÉBITO
        </Button>

        <Button
          onClick={() => changePayment('Dinheiro')}
          selected={payment === 'Dinheiro'}
          type="button"
        >
          <Money />
          DINHEIRO
        </Button>
      </Options>
    </PaymentContainer>
  )
}
