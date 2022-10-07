import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding: 1.25rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: calc(0px - 1.25rem - 20px);
    margin-bottom: 0.75rem;
  }

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;

    font-size: 0.875rem;

    color: ${(props) => props.theme['base-label']};
  }
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 0.25rem;

  margin-bottom: 1rem;

  span {
    font-size: 0.625rem;
    font-weight: 700;

    border-radius: 99px;

    padding: 0.25rem 0.5rem;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }
`

export const Buy = styled.div`
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 700;

    color: ${(props) => props.theme['base-text']};

    &::before {
      content: 'R$ ';
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  a {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme['base-card']};
    background: ${(props) => props.theme['purple-dark']};

    transition: 0.2s background-color;

    &:hover {
      background: ${(props) => props.theme['purple-regular']};
    }
  }
`
