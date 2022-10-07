import styled from 'styled-components'

export const HomeContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Introduction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5.875rem 0;

  gap: 3.5rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;

    color: ${(props) => props.theme['base-title']};
  }

  span {
    display: inline-block;

    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  row-gap: 1.25rem;
  column-gap: 2.5rem;

  div:nth-child(1) div {
    background: ${(props) => props.theme['yellow-dark']};
  }

  div:nth-child(2) div {
    background: ${(props) => props.theme['base-text']};
  }

  div:nth-child(3) div {
    background: ${(props) => props.theme['yellow-regular']};
  }

  div:nth-child(4) div {
    background: ${(props) => props.theme['purple-regular']};
  }
`

export const Item = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  gap: 0.75rem;

  div {
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 999px;

    color: ${(props) => props.theme.background};
  }
`
export const CoffeeList = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2.5rem;
  column-gap: 2rem;

  padding: 3.375rem 0;
`
