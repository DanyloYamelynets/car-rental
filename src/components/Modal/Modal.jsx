import { useEffect } from 'react';
import {
  AccFunc,
  CarDescr,
  CarInfo,
  CarTitle,
  CloseBtn,
  IconClose,
  ImgStyled,
  MileagePrice,
  MileagePriceCont,
  ModalItem,
  Overlay,
  RentBtn,
  RentalConditions,
  TitleText,
} from './StyledModal';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

function Modal({ onCloseModal, modalData }) {
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);

  const handleClickBtnClose = () => {
    onCloseModal();
  };

  const handleClickOverlay = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const AccesoriesAndFunctionalities = [
    ...modalData?.accessories,
    ...modalData?.functionalities,
  ];

  return (
    <Overlay onClick={handleClickOverlay}>
      <ModalItem>
        <CloseBtn onClick={handleClickBtnClose}>
          <IconClose
            style={{
              fontSize: 23,
            }}
          />
        </CloseBtn>
        <div>
          <ImgStyled
            src={modalData?.img}
            alt={modalData?.make}
            width={461}
            height={248}
            loading="lazy"
          />
        </div>
        {isLoading && <Loader />}
        {error && <div>Error: {error}</div>}
        <CarTitle>
          {modalData?.make} <span>{modalData?.model}</span>, {modalData?.year}
        </CarTitle>
        <CarInfo>
          {modalData?.address} | id: {modalData?.id} | Year: {modalData?.year} |
          Type: {modalData?.type} | Fuel Consumption:
          {modalData?.fuelConsumption} | Engine Size: {modalData?.engineSize}
        </CarInfo>
        <CarDescr>{modalData?.description}</CarDescr>
        <TitleText>Accessories and functionalities:</TitleText>
        <AccFunc>{AccesoriesAndFunctionalities.join(' | ')}</AccFunc>
        <TitleText>Rental Conditions:</TitleText>
        <RentalConditions>{modalData?.rentalConditions}</RentalConditions>
        <MileagePriceCont>
          <MileagePrice>
            Mileage: <span>{modalData?.mileage.toLocaleString()}</span>
          </MileagePrice>
          <MileagePrice>
            Price: <span>{modalData?.rentalPrice}</span>
          </MileagePrice>
        </MileagePriceCont>
        <RentBtn>Rental car</RentBtn>
      </ModalItem>
    </Overlay>
  );
}

export default Modal;
