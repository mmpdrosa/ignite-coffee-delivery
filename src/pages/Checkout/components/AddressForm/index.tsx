import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import {
  AddressFormContainer,
  ZipInput,
  CityInput,
  ComplementInput,
  DistrictInput,
  FederativeUnitInput,
  NumberInput,
  StreetInput,
  Filds,
} from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressFormContainer>
      <header>
        <MapPinLine size={22} />
        <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>
      <Filds>
        <ZipInput placeholder="CEP" {...register('zip')} />
        <StreetInput placeholder="Rua" {...register('street')} />
        <NumberInput placeholder="Número" {...register('number')} />
        <ComplementInput
          placeholder="Complemento"
          {...register('complement')}
        />
        <DistrictInput placeholder="Bairro" {...register('district')} />
        <CityInput placeholder="Cidade" {...register('city')} />
        <FederativeUnitInput placeholder="UF" {...register('federativeUnit')} />
      </Filds>
    </AddressFormContainer>
  )
}
