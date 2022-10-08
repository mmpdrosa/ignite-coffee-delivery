import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;

  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.875rem;
    background: none;
    border: 0;
    width: 1.875rem;
    height: 100%;

    color: ${(props) => props.theme['purple-regular']};

    cursor: pointer;

    &:hover svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    text-align: center;

    color: ${(props) => props.theme['base-title']};
  }
`
