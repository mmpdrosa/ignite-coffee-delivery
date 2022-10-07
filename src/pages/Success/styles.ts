import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 5rem 0;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 2rem;

    margin-bottom: 0.25rem;

    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;

    margin-bottom: 1.75rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const OrderInfo = styled.div`
  width: 32.875rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme['yellow-regular']},
        ${(props) => props.theme['purple-regular']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  & > div {
    display: flex;
    align-items: center;

    gap: 0.75rem;
  }

  & > div:nth-child(1) div:first-child {
    background: ${(props) => props.theme['purple-regular']};
  }

  & > div:nth-child(2) div:first-child {
    background: ${(props) => props.theme['yellow-regular']};
  }

  & > div:nth-child(3) div:first-child {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  border-radius: 999px;

  color: ${(props) => props.theme.background};
`
