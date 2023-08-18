import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const StyledItem = styled.li`
  width: 274px;
  height: 426px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  background-color: rgb(236 246 255 / 92%);
  border-radius: 12px;
`;
export const StyledImg = styled.img`
  border-radius: 12px;
`;
export const CarCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const CarTitle = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #121417;
  margin-bottom: 0;
  margin-top: 14px;
  span {
    margin-left: 5px;
    color: #3470ff;
  }
`;
export const CarPrice = styled.p`
  margin: 0;
  margin-top: 17px;
  margin-left: auto;
`;
export const CarInfo = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
  margin-bottom: 0;
`;
export const LearnMoreBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  margin-top: 10px;
  max-width: 400px;
  background: #3470ff;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.16px;
  cursor: pointer;
  transition: 250ms;
  &:hover,
  &:focus {
    background: #0b44cd;
    transition: 250ms;
  }
`;
export const FavBtn = styled.button`
  position: relative;
  left: 244px;
  bottom: 338px;
  background-color: transparent;
  border: none;
  padding: 0;
`;
export const FavIcon = styled(FavoriteBorderIcon)`
  color: white;
  background-color: transparent;
  transition: 250ms;
  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    transition: 250ms;
    transform: scale(1.2);
  }
`;
