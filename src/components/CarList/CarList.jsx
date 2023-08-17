import CarItem from 'components/CarItem/CarItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';

function CarList({ onOpenModal }) {
  const cars = useSelector(state => state.cars);
  const dispatch = useDispatch();

  const itemsPerPage = 8;
  const [loadedCars, setLoadedCars] = useState(itemsPerPage);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const displayedCars = cars.slice(0, loadedCars);

  const onLoadMore = () => {
    setLoadedCars(prevLoadedCars => prevLoadedCars + itemsPerPage);
  };

  return (
    <>
      <ul>
        {displayedCars.map(car => {
          return (
            <CarItem
              key={car.id}
              carInfo={car}
              id={car.id}
              onOpenModal={onOpenModal}
            />
          );
        })}
      </ul>
      {loadedCars < cars.length && (
        <button onClick={onLoadMore}>Load more</button>
      )}
    </>
  );
}

export default CarList;
