import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-color: rgba(116, 114, 114, 0.7);
  z-index: 1200;
`;
export const ModalItem = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 40px;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  width: 100%;
  max-width: 462px;
  border-radius: 24px;
  background: white;
`;
export const ImgStyled = styled.img`
  border-radius: 12px;
`;
export const CarTitle = styled.h3`
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
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
export const CarInfo = styled.p`
  margin: 10px 0;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  max-width: 455px;
`;
export const CarDescr = styled.p`
  margin: 5px 0;
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  max-width: 455px;
`;
export const TitleText = styled.h4`
  margin: 5px 0;
  color: #121417;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;
export const AccFunc = styled.p`
  margin: 5px 0;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  max-width: 455px;
`;
export const ConditionsCont = styled.div`
  display: flex;
  gap: 8px;
`;
export const RentalConditions = styled.p`
  margin: 5px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  background-color: #f9f9f9;
  border-radius: 35px;
  padding: 7px 14px;
`;
export const MileagePrice = styled.p`
  margin: 5px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  background-color: #f9f9f9;
  border-radius: 35px;
  padding: 7px 14px;
  span {
    color: #3470ff;
    font-weight: 600;
  }
`;
export const MileagePriceCont = styled.div`
  display: flex;
  gap: 8px;
`;
export const RentBtn = styled.button`
  margin-top: 24px;
  padding: 12px 50px;
  border-radius: 12px;
  background-color: #3470ff;
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  min-width: 150px;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #0b44cd;
    transition: 250ms;
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
export const IconClose = styled(CloseIcon)`
  transition: 250ms;
  &:active,
  &:focus,
  &:hover {
    color: black;
    cursor: pointer;
    transition: 250ms;
    transform: scale(1.2);
  }
`;
