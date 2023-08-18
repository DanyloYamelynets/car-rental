import CarList from 'components/CarList/CarList';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, FavoritesTitle } from './StyledFavorites';

export const Favorites = () => {
  const favorites = useSelector(state => state.favorites);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);

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
    <Container>
      <FavoritesTitle>Your Favorite Cars</FavoritesTitle>
      {isLoading && <Loader />}
      {error && <div>Error: {error}</div>}
      <CarList
        favorites={favorites}
        onOpenModal={onOpenModal}
        page="favorites"
      />
      {showModal && <Modal onCloseModal={onCloseModal} modalData={modalData} />}
    </Container>
  );
};
