import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { Counter } from '../../../../components/Counter'

import { Actions, Buy, CoffeeCardContainer, Tags } from './styles'

interface CoffeeCardProps {
  imageUrl: string
  description: string
  name: string
  price: number
  tags: string[]
}

export function CoffeeCard({
  imageUrl,
  description,
  name,
  price,
  tags,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={imageUrl} alt="" />
      <Tags>{tags && tags.map((tag) => <span key={tag}>{tag}</span>)}</Tags>
      <strong>{name}</strong>
      <p>{description}</p>
      <Buy>
        <p>{price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
        <Actions>
          <Counter coffeeId={name} />

          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  )
}
