import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/products/category/men's%20clothing").then(
        (value) => value.json()
      ),
      fetch(
        "https://fakestoreapi.com/products/category/women's%20clothing"
      ).then((value) => value.json()),
    ]).then((data) => {
      if (isMounted.current) setProducts(data[0].concat(data[1]));
    });

    return () => (isMounted.current = false);
  }, []);

  const productsList = products.map((product) => (
    <ProductCard item={product} key={product.id} />
  ));

  return <ProductsWrapper>{productsList}</ProductsWrapper>;
};

const ProductsWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 140rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  padding: 4rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Products;
