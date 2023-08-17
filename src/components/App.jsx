import { Catalog } from 'pages/Catalog';
import { Favorites } from 'pages/Favorites';
import { Home } from 'pages/Home';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import { Navigate } from 'react-router-dom/dist';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">catalog</Link>
          <Link to="/favorites">favorites</Link>
        </nav>
      </header>
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
