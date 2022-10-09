import styled from 'styled-components'

export const PaymentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};

  svg {
    color: ${(props) => props.theme['purple-regular']};
  }

  header {
    width: 100%;

    display: flex;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.125rem;
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;

      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
`

interface ButtonProps {
  selected: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;

  background: ${(props) =>
    props.selected ? props.theme['purple-light'] : props.theme['base-button']};

  ${(props) =>
    props.selected
      ? 'border: 1px solid ' + props.theme['purple-regular']
      : 'border: 1px solid transparent;'};
  border-radius: 6px;

  font-size: 0.75rem;

  cursor: pointer;

  transition: 0.2s background-color;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    font-size: 1rem;
  }
`
