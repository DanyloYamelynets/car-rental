import CarList from 'components/CarList/CarList';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const onOpenModal = data => {
    setModalData(data);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <h2>Our Cars</h2>
      {isLoading && <Loader />}
      {error && <div>Error: {error}</div>}
      <CarList
        favorites={favorites}
        cars={cars}
        onOpenModal={onOpenModal}
        page="catalog"
      />
      {showModal && <Modal onCloseModal={onCloseModal} modalData={modalData} />}
    </div>
  );
};
