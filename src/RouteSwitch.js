import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart/Cart";
import Provider from "./components/Context/ProductContext";

const RouteSwitch = () => {
  return (
    <>
      <Provider>
        <NavBar />
        <Routes>
          <Route path="/shopping-cart" element={<Home />} />
          <Route path="/" element={<Navigate to="/shopping-cart" replace />} />
          <Route path="/shopping-cart/contact" element={<Contact />} />
          <Route path="/shopping-cart/products" element={<Products />} />
          <Route path="/shopping-cart/products/:id" element={<ProductPage />} />
        </Routes>
        <Cart />
      </Provider>
    </>
  );
};

export default RouteSwitch;
