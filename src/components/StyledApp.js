import styled from 'styled-components';

export const ContainerApp = styled.nav`
  padding: 20px 60px;
  background-color: #b9ccff;
  border-bottom: 2px solid #000000;
`;
export const BtnNav = styled.button`
  margin-left: 20px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 12px;
  border: 2px solid #00000000;
  background-color: #00000000;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #0a00a7;
    color: white;
    transition: 250ms;
  }
  &:active {
    background-color: #0a00a7;
    color: white;
  }
`;
