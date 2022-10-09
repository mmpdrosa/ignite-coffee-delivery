import styled from 'styled-components'

export const AddressFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border-radius: 6px;

  color: ${(props) => props.theme['yellow-dark']};
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

export const Filds = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'district city uf';
  grid-row-gap: 1rem;
  grid-column-gap: 0.75rem;
`

const BaseInput = styled.input`
  height: 2.625rem;

  padding: 0.75rem;

  font-size: 0.875rem;

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  background: ${(props) => props.theme['base-input']};

  &:focus,
  &:not(:placeholder-shown) {
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }
`

export const ZipInput = styled(BaseInput)`
  grid-area: cep;
`

export const StreetInput = styled(BaseInput)`
  grid-area: street;
`

export const NumberInput = styled(BaseInput)`
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
