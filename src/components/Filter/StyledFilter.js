import styled from 'styled-components';

export const FormStyled = styled.form`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 50px;
  gap: 18px;
  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
  input,
  select {
    box-sizing: border-box;
    width: 160px;
    height: 48px;
    margin-top: 5px;
    padding: 0 8px;
    border-radius: 10px;
    background-color: #f9f9f9;
    border-color: transparent;
    outline-color: transparent;
    font-size: 16px;
    &:hover,
    :focus {
      border: 1px solid;
      border-color: #3470ff;
    }
  }
  button {
    padding: 14px 44px;
    border-radius: 12px;
    background-color: #3470ff;
    text-align: center;
    display: inline-block;
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    min-width: 136px;
    transition: 250ms;
    &:hover,
    &:focus {
      background-color: #0b44cd;
      transition: 250ms;
    }
  }
`;
