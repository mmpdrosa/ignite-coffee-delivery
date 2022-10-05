import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { ActionsContainer, HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <ActionsContainer>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Uberlândia, MG</span>
        </div>
        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
