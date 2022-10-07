import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { Actions, SelectedCoffeeContainer } from './styles'

import cafe from '../../../../assets/coffees/espresso.svg'

export function SelectedCoffee() {
  return (
    <SelectedCoffeeContainer>
      <div>
        <img src={cafe} alt="" />
        <div>
          <h3>Expresso Tradicional</h3>
          <Actions>
            <Counter />
            <button>
              <Trash />
              REMOVER
            </button>
          </Actions>
        </div>
      </div>
      <span>R$ 9,90</span>
    </SelectedCoffeeContainer>
  )
}
