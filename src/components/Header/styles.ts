import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-light']};

    svg {
      color: ${(props) => props.theme['purple-regular']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  a {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};

    position: relative;

    span {
      width: 1.25rem;
      height: 1.25rem;

      position: absolute;
      top: -8px;
      right: -8.35px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 0.75rem;
      font-weight: 700;

      border-radius: 999px;

      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
    }
  }
`
