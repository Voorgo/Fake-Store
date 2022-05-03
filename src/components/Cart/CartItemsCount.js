import styled from "styled-components";

const CartCount = () => {
  let length = JSON.parse(sessionStorage.getItem("items")) || [];
  let total = length.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Span style={{ display: total !== 0 ? "flex" : "none" }}>{total}</Span>
  );
};

const Span = styled.span`
  position: absolute;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background: #d494bc;
  color: ;
  bottom: 0;
  left: 0;
  transform: translate(-30%, 20%);
  align-items: center;
  justify-content: center;
  font-size: 1.9rem;
  font-weight: 600;
`;

export default CartCount;
