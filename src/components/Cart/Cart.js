import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { ProductContext } from "../Context/ProductContext";
import CartItem from "./CartItem";
import Total from "./Total";

function Cart() {
  const { state, dispatch } = useContext(ProductContext);
  const closeCart = () => {
    dispatch({ type: "close" });
  };
  const [, setRender] = useState(state);
  useEffect(() => {
    setRender(state);
  }, [state]);

  const items = JSON.parse(sessionStorage.getItem("items"));
  return (
    <>
      <BackgroundBlur open={state.isOpen} onClick={closeCart}></BackgroundBlur>
      <CartWrapper open={state.isOpen}>
        <h2>My cart</h2>
        <List>
          {items
            ? items.map((item) => <CartItem item={item} key={item.id} />)
            : null}
        </List>
        <Total />
        <CheckoutButton>Checkout</CheckoutButton>
        <CloseButton onClick={closeCart}>Close</CloseButton>
      </CartWrapper>
    </>
  );
}

const CartWrapper = styled.div`
  width: 45rem;
  height: 100%;
  position: fixed;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-45rem")};
  background: black;
  color: white;
  z-index: 2;
  transition: right 250ms ease;
  font-size: 2.8rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 400px) {
    width: 100%;
    right: ${(props) => (props.open ? "0" : "-100%")};
  }
`;

const BackgroundBlur = styled.div`
  position: fixed;
  background: #334040;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: ${(props) => (props.open ? "initial" : "none")};
`;

const CloseButton = styled.button`
  width: 70%;
  height: 4rem;
  color: black;
  border: none;
  font-weight: bold;
  outline: none;
  font-size: 2.7rem;
  cursor: pointer;
  background: linear-gradient(to left, white 50%, red 50%) right;
  background-size: 200%;
  transition: background-position 150ms ease, color 0ms 90ms ease;

  &:hover {
    background-position: left;
    &:hover {
      color: white;
    }
  }
`;

const CheckoutButton = styled(CloseButton)`
  background: linear-gradient(to left, white 50%, #23c920 50%) right;
  background-size: 200%;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  &:empty {
    &::before {
      content: "Empty Cart";
      display: block;
      text-align: center;
    }
  }
`;

export default Cart;
