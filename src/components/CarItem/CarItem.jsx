import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'redux/slice';
import {
  CarInfo,
  CarPrice,
  CarTitle,
  FavBtn,
  LearnMoreBtn,
  StyledImg,
  StyledItem,
  FavIcon,
  CarCont,
} from './StyledCarItem';

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
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.includes(id);

  const onClickFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  return (
    <StyledItem>
      <StyledImg src={img} alt={make} width={274} height={268} loading="lazy" />
      <CarCont>
        <CarTitle>
          {make} <span>{model}</span>, {year}
          <CarPrice>{rentalPrice}</CarPrice>
        </CarTitle>
      </CarCont>
      <CarInfo>
        {address} | {rentalCompany} | {type} | {model} | {id} |{' '}
        {functionalities[0]}
      </CarInfo>
      <FavBtn onClick={onClickFavorite}>
        <FavIcon
          style={{
            color: isFavorite ? '#3470FF' : 'rgba(255, 255, 255, 0.80)',
            fontSize: 20,
          }}
        />
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

export default CarItem;
