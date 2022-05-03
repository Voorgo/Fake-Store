import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card
      to={`/Fake-Store/products/${item.id}`}
      onClick={() => {
        localStorage.setItem("item", JSON.stringify({ ...item, quantity: 1 }));
      }}
    >
      <div className="first">
        <img src={item.image} alt="item" />
      </div>
      <div className="second">
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>
    </Card>
  );
};

const Card = styled(Link)`
  animation: 200ms fadeIn;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 28rem;
  padding: 2rem;
  justify-self: center;
  gap: 10px;
  cursor: pointer;
  transition: transform 200ms ease-out;
  text-decoration: none;
  color: black;

  .first {
    height: 25rem;
    // margin: 0 auto;
    padding: 2rem;
    background: white;
    border-radius: 1rem;
    img {
      height: 100%;
    }
  }

  .second {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.8rem;
    text-align: center;

    p:last-of-type {
      font-weight: 600;
      font-size: 2rem;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export default ProductCard;
