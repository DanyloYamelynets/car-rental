import React from 'react';
import {
  AdvList,
  Contact,
  ContactList,
  Container,
  HomeTitle,
  ImgContainer,
  ImgHome,
  OurAdvantages,
  Welcome,
} from './StyledHome';

export const Home = () => {
  return (
    <Container>
      <HomeTitle>Car Rental</HomeTitle>
      <Welcome>
        Welcome to our innovative car rental application - your reliable partner
        in travel! Explore the world of endless possibilities offered by our
        service and make your journeys comfortable and unforgettable.
      </Welcome>
      <ImgContainer>
        <ImgHome
          src="https://car2drive.ua/upload/iblock/e8c/ph1.jpg"
          alt="cars"
          width={600}
          height={300}
        />
      </ImgContainer>
      <OurAdvantages>The advantages of our service are:</OurAdvantages>
      <AdvList>
        <li>Wide Selection of Cars</li>
        <li>Easy Booking</li>
        <li>Location in Almost Every City of Ukraine</li>
        <li>Vehicle Maintenance</li>
        <li>Mobile Application</li>
        <li>Personalized Service</li>
      </AdvList>
      <Contact>Contacts:</Contact>
      <ContactList>
        <li>+380631234567</li>
        <li>Kyiv, Shevchenka street, 43</li>
        <li>Email: carrental@mail.com</li>
      </ContactList>
    </Container>
  );
};
