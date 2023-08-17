import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'redux/slice';

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
    <li>
      <img src={img} alt={make} width={300} loading="lazy" />
      <h3>
        {make} <span>{model}</span>, {year}
      </h3>
      <p>{rentalPrice}</p>
      <p>
        {address} | {rentalCompany} | {type} | {model} | {id} |{' '}
        {functionalities[0]}
      </p>
      <button
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
      </button>
      <button
        onClick={onClickFavorite}
        style={{ backgroundColor: isFavorite ? 'red' : 'blue' }}
      >
        heart
      </button>
    </li>
  );
}

export default CarItem;
