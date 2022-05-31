import styled from "styled-components"

export const HeaderContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    height: 4.375rem;
    align-items: center;
    justify-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    background-color: red;
    color: white;
`

export const Text = styled.h1`
  font-size: 1rem;
  text-align: center;
  grid-column: 2/3;
`;