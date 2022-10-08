import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { Actions, HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Header() {
  const { coffeesInCart } = useContext(OrderContext)

  const coffeesInCartAmount = coffeesInCart.reduce(
    (total, coffeeInCart) => (total += coffeeInCart.amount),
    0,
  )

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <Actions>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Uberlândia, MG</span>
        </div>
        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {coffeesInCartAmount > 0 && <span>{coffeesInCartAmount}</span>}
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}
