import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SelectError, SelectIsLoading } from 'redux/selectors';
import {
  AccFunc,
  CarDescr,
  CarInfo,
  CarTitle,
  CloseBtn,
  ConditionsCont,
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
import Loader from 'components/Loader/Loader';

function Modal({ onCloseModal, modalData }) {
  const isLoading = useSelector(SelectIsLoading);
  const error = useSelector(SelectError);

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
  const conditions = modalData?.rentalConditions.split('\n');
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
        <ConditionsCont>
          <RentalConditions>{conditions[0]}</RentalConditions>
          <RentalConditions>{conditions[1]}</RentalConditions>
          <RentalConditions>{conditions[2]}</RentalConditions>
        </ConditionsCont>
        <MileagePriceCont>
          <MileagePrice>
            Mileage: <span>{modalData?.mileage.toLocaleString('en-US')}</span>
          </MileagePrice>
          <MileagePrice>
            Price: <span>{modalData?.rentalPrice}</span>
          </MileagePrice>
        </MileagePriceCont>
        <a
          href="tel:+380730000000"
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          <RentBtn>Rental car</RentBtn>
        </a>
      </ModalItem>
    </Overlay>
  );
}

export default Modal;
