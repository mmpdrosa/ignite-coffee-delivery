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

const BaseInput = styled.input`
  font-size: 0.875rem;

  height: 2.625rem;

  padding: 0.75rem;

  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  &:focus,
  &:not(:placeholder-shown) {
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }
`

export const CepInput = styled(BaseInput)`
  grid-area: cep;
`

export const StreetInput = styled(BaseInput)`
  grid-area: street;
`

export const HouseNumberInput = styled(BaseInput)`
  grid-area: number;
`

export const ComplementInput = styled(BaseInput)`
  grid-area: complement;
`

export const DistrictInput = styled(BaseInput)`
  grid-area: district;
`

export const CityInput = styled(BaseInput)`
  grid-area: city;
`

export const FederativeUnitInput = styled(BaseInput)`
  grid-area: uf;
`

export const AddressForm = styled(BaseSection)`
  gap: 2rem;
  border-radius: 6px;

  & > div {
    display: grid;

    grid-template-columns: 200px 1fr 60px;
    grid-template-areas:
      'cep . .'
      'street street street'
      'number complement complement'
      'district city uf';

    grid-row-gap: 1rem;
    grid-column-gap: 0.75rem;
  }

  color: ${(props) => props.theme['yellow-dark']};
`

export const Payment = styled(BaseSection)`
  gap: 2rem;
  border-radius: 6px;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;
  }

  button {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 0.75rem;
    padding: 1rem;

    background: ${(props) => props.theme['base-button']};

    font-size: 0.75rem;

    border: 0;
    border-radius: 6px;

    cursor: pointer;

    transition: 0.2s background-color;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    /* selecionado {
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme['purple-regular']};
    } */
  }

  svg {
    color: ${(props) => props.theme['purple-regular']};
    font-size: 1rem;
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
