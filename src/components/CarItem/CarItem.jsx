import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'redux/slice';
import { SelectFavorites } from 'redux/selectors';
import {
  CarInfo,
  CarPrice,
  CarTitle,
  FavBtn,
  LearnMoreBtn,
  StyledImg,
  StyledItem,
  CarCont,
  FavIconFill,
  FavIconBorder,
} from './StyledCarItem';
import Notiflix from 'notiflix';

function CarItem({
  carInfo: {
    make,
    model,
    year,
    img,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  },
  onOpenModal,
}) {
  const favorites = useSelector(SelectFavorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.includes(id);

  const onClickFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
      Notiflix.Notify.failure('Car removed from favorites');
    } else {
      dispatch(addToFavorites(id));
      Notiflix.Notify.success('Car added to favorites');
    }
  };

  return (
    <StyledItem>
      <StyledImg src={img} alt={make} width={274} height={268} loading="lazy" />
      <CarCont>
        <CarTitle>
          {make} <span>{model}</span>, {year}
        </CarTitle>
        <CarPrice>{rentalPrice}</CarPrice>
      </CarCont>
      <CarInfo>
        {address} | {rentalCompany} | {type} | {model} | {id} |{' '}
        {functionalities[0]}
      </CarInfo>
      <FavBtn onClick={onClickFavorite}>
        {isFavorite ? (
          <FavIconFill
            style={{
              color: '#3470FF',
              fontSize: 20,
            }}
          />
        ) : (
          <FavIconBorder
            style={{
              color: 'rgba(255, 255, 255, 0.80)',
              fontSize: 20,
            }}
          />
        )}
      </FavBtn>
      <LearnMoreBtn
        id={id}
        onClick={() => {
          onOpenModal({
            make,
            model,
            year,
            img,
            rentalPrice,
            address,
            rentalCompany,
            type,
            id,
            functionalities,
            fuelConsumption,
            engineSize,
            description,
            accessories,
            rentalConditions,
            mileage,
          });
        }}
      >
        Learn more
      </LearnMoreBtn>
    </StyledItem>
  );
}

CarItem.propTypes = {
  carInfo: PropTypes.object.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default CarItem;
