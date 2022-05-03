import styled from "styled-components";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../Context/ProductContext";

const Buttons = ({ qty, id }) => {
  const [itemQty, setItemQty] = useState(qty);
  const { dispatch } = useContext(ProductContext);

  const increaseQuantity = () => {
    dispatch({ type: "render" });
    setItemQty((prev) => {
      return prev + 1;
    });
  };
  const decreaseQuantity = () => {
    dispatch({ type: "render" });
    setItemQty((prev) => {
      return prev - 1;
    });
  };

  const list = JSON.parse(sessionStorage.getItem("items"));
  if (list) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, quantity: itemQty } : item
    );
    sessionStorage.setItem("items", JSON.stringify(newList));
    if (itemQty === 0) {
      const filteredList = newList.filter((item) => item.id !== id);
      sessionStorage.setItem("items", JSON.stringify(filteredList));
      if (JSON.parse(sessionStorage.getItem("items")).length === 0)
        return sessionStorage.clear();
    }
  }

  return (
    <ButtonsContainer>
      <MinusButton onClick={decreaseQuantity}>
        <FontAwesomeIcon icon={faMinus} color="white" />
      </MinusButton>
      <span>{itemQty}</span>
      <PlusButton onClick={increaseQuantity}>
        <FontAwesomeIcon icon={faPlus} color="white" />
      </PlusButton>
    </ButtonsContainer>
  );
};

const MinusButton = styled.button`
  border: none;
  outline: none;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  background: black;
  transition: transform 100ms ease;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    transform: scale(0.92);
  }
`;
const PlusButton = styled(MinusButton)``;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export default Buttons;
