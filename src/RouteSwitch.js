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
          <Route path="/Fake-Store" element={<Home />} />
          <Route path="/" element={<Navigate to="/Fake-Store" replace />} />
          <Route path="/Fake-Store/contact" element={<Contact />} />
          <Route path="/Fake-Store/products" element={<Products />} />
          <Route path="/Fake-Store/products/:id" element={<ProductPage />} />
        </Routes>
        <Cart />
      </Provider>
    </>
  );
};

export default RouteSwitch;
