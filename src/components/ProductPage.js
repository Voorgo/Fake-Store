import styled from "styled-components";
import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";
import capitalize from "../utils/capitalize";
import { addToSession } from "../utils/addToSession";

const ProductPage = () => {
  const { state, dispatch } = useContext(ProductContext);
  const storage = JSON.parse(localStorage.getItem("item"));

  return (
    <ProductWrapper>
      <ImgWrapper>
        <img src={storage.image} alt="product" />
      </ImgWrapper>
      <ProductDescription>
        <h2>{storage.title}</h2>
        <p>${storage.price}</p>
        <p>{capitalize(storage.description)}</p>
        <button
          onClick={() => {
            dispatch({ type: "addItem", payload: storage });
            addToSession(storage);
          }}
        >
          ADD TO CART
        </button>
      </ProductDescription>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  height: calc(100vh - 8rem);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12rem;

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 5rem 0;
  }
`;

const ImgWrapper = styled.div`
  height: 40rem;
  width: 35rem;
  position: relative;
  background: white;
  border-radius: 2rem;
  overflow: hidden;

  img {
    object-fit: contain;
    width: 100%;
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: transform 150ms;
  }

  &:hover {
    img {
      transform: translate(-50%, -50%) scale(1.3);
    }
  }
`;
const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  font-size: 1.8rem;

  h2 {
    font-size: 3.5rem;
  }

  p:first-of-type {
    font-weight: 600;
    font-size: 2.1rem;
  }

  p:last-of-type {
    margin: 1rem 0;
  }

  button {
    width: 100%;
    height: 4rem;
    cursor: pointer;
    border: none;
    outline: none;
    background: black;
    color: white;
    font-size: 1.5rem;
    font-size: 1.6rem;
    background: linear-gradient(to left, black 50%, #d19b75 50%) right;
    background-size: 200%;
    transition: background-position 0.3s ease-in, color 0ms 200ms,
      transform 200ms;

    &:hover {
      background-position: left;
      color: black;
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

export default ProductPage;
