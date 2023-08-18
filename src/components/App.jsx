import { Catalog } from 'pages/Catalog/Catalog';
import { Favorites } from 'pages/Favorites/Favorites';
import { Home } from 'pages/Home/Home';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import { Navigate } from 'react-router-dom/dist';
import { BtnNav, ContainerApp } from './StyledApp';

export const App = () => {
  return (
    <div>
      <ContainerApp>
        <Link to="/">
          <BtnNav>Home</BtnNav>
        </Link>
        <Link to="/catalog">
          <BtnNav>Catalog</BtnNav>
        </Link>
        <Link to="/favorites">
          <BtnNav>Favorites</BtnNav>
        </Link>
      </ContainerApp>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
