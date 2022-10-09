import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr 448px;
    gap: 2rem;
    align-items: flex-start;

    padding: 2.5rem 0;

    section + section {
      margin-top: 0.75rem;
    }

    h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 1rem;
    }
  }
`

const BaseSection = styled.section`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;

  background: ${(props) => props.theme['base-card']};

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

export const Order = styled(BaseSection)`
  border-radius: 6px 44px;
  gap: 2rem;

  & > button {
    height: 2.875rem;

    font-size: 0.875rem;
    font-weight: 700;

    color: ${(props) => props.theme.white};

    background: ${(props) => props.theme['yellow-regular']};
    border: 0;
    border-radius: 6px;

    cursor: pointer;

    transition: 0.2s background-color;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span:first-child {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
