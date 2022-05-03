import styled from "styled-components";
import Buttons from "./Buttons";

const CartItem = ({ item }) => {
  const { image, title, price, quantity, id } = item;
  return (
    <CartItemWrapper>
      <img src={image} alt="product" />
      <TitlePriceBtns>
        <div>
          {" "}
          <p>{title.slice(0, 20) + "..."}</p>
          <p>${price}</p>
        </div>
        <Buttons qty={quantity} id={id} />
      </TitlePriceBtns>
    </CartItemWrapper>
  );
};

const CartItemWrapper = styled.div`
  background: white;
  color: black;
  min-width: 10rem;
  display: flex;
  justify-content: space-evenly;
  height: 15rem;
  border-radius: 1rem;
  padding: 5px;

  img {
    height: 100%;
    width: 12rem;
  }
`;

const TitlePriceBtns = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  justify-content: space-between;
  p {
    font-size: 1.9rem;
  }
  p:last-child {
    font-weight: bold;
    font-size: 1.9rem;
  }
`;

export default CartItem;
