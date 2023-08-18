import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 29px;
  row-gap: 50px;
`;
export const LoadMoreBtn = styled.button`
  margin-top: 20px;
  padding: 8px 16px;
  border-radius: 12px;
  background-color: #0b44cd;
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  min-width: 150px;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: rgb(21 42 172);
    transition: 250ms;
  }
`;
export const BtnCont = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
