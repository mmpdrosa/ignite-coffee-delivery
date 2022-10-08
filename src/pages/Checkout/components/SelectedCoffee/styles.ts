import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  & > div {
    display: flex;
    gap: 1.25rem;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > span {
    font-size: 1rem;
    font-weight: 700;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  height: 2rem;

  & > button {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 0.25rem;
    padding: 0.5rem;

    font-size: 0.75rem;

    border: 0;
    border-radius: 6px;

    cursor: pointer;

    background: ${(props) => props.theme['base-button']};

    transition: 0.2s background-color;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme['purple-regular']};
  }
`
