import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import {
  SelectCars,
  SelectError,
  SelectFavorites,
  SelectIsLoading,
} from 'redux/selectors';
import CarList from 'components/CarList/CarList';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Filter from 'components/Filter/Filter';
import { CatalogTitle, Container } from './StyledCatalog';

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(SelectCars);
  const favorites = useSelector(SelectFavorites);
  const isLoading = useSelector(SelectIsLoading);
  const error = useSelector(SelectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [filteredCars, setFilteredCars] = useState([]);

  const onOpenModal = data => {
    setModalData(data);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const handleFilterChange = filteredResults => {
    setFilteredCars(filteredResults);
  };
  return (
    <Container>
      <CatalogTitle>Cars For Rent</CatalogTitle>
      <Filter onFilterChange={handleFilterChange} />
      {isLoading && <Loader />}
      {error && <div>Error: {error}</div>}
      {filteredCars?.length ? (
        <CarList cars={filteredCars} />
      ) : (
        <CarList
          favorites={favorites}
          cars={cars}
          onOpenModal={onOpenModal}
          page="catalog"
        />
      )}
      {showModal && <Modal onCloseModal={onCloseModal} modalData={modalData} />}
    </Container>
  );
};
