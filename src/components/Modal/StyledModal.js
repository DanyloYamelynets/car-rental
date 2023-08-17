import styled from 'styled-components';

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 541px;
  height: 742px;
  border-radius: 24px;
  background: white;
`;
export const BtnClose = styled.button``;
export const ImgDiv = styled.div``;
export const CarTitle = styled.h3`
  margin: 5px 0;
`;
export const CarInfo = styled.p`
  margin: 10px 0;
`;
export const CarDescr = styled.p`
  margin: 5px 0;
`;
export const TitleText = styled.h4`
  margin: 5px 0;
`;
export const AccFunc = styled.p`
  margin: 5px 0;
`;
export const RentalConditions = styled.p`
  margin: 5px 0;
`;
export const MileagePrice = styled.p`
  margin: 5px 0;
`;
