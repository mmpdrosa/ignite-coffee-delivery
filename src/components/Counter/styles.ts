import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;

  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  button {
    font-size: 1.5rem;
    background: none;
    border: 0;
    width: 1.875rem;
    height: 2.375rem;

    color: ${(props) => props.theme['purple-regular']};

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    text-align: center;

    color: ${(props) => props.theme['base-title']};
  }
`
