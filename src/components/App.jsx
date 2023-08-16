import { Catalog } from "pages/Catalog";
import { Favourites } from "pages/Favourites";
import { Home } from "pages/Home";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";

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
            <Route path="/favorites" element={<Favourites />}/>
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
