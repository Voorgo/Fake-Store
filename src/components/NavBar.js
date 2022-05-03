import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartCount from "./Cart/CartItemsCount";
import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";

const NavBar = () => {
  const { dispatch } = useContext(ProductContext);
  return (
    <header>
      <Nav>
        <StoreTitle>
          <NavLink to="/shopping-cart">FakeStore</NavLink>
        </StoreTitle>
        <LinkWrapper>
          <li>
            <NavLink to="/shopping-cart">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shopping-cart/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/shopping-cart/contact">Contact</NavLink>
          </li>
          <li onClick={() => dispatch({ type: "open" })}>
            <FontAwesomeIcon icon={faCartShopping} size="xl" color="white" />
            <CartCount />
          </li>
        </LinkWrapper>
      </Nav>
    </header>
  );
};

const Nav = styled.nav`
  color: black;
  display: flex;
  height: 8rem;
  max-width: 140rem;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 4rem;

  @media (max-width: 600px) {
    flex-direction: column;
    height: max-content;
    padding: 2rem 0;
  }
`;

const LinkWrapper = styled.ul`
  display: flex;
  gap: 2.6rem;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 2.4rem;
    position: relative;
    display: block;
    line-height: 1.2;
  }

  a::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    transform: scaleX(0);
    background: black;
    transition: transform 200ms ease-out;
    transform-origin: bottom right;
  }
  a:hover::after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  li:last-of-type {
    background: black;
    border-radius: 50%;
    padding: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 200ms ease;
    position: relative;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const StoreTitle = styled.h1`
  font-size: 4.6rem;

  a {
    text-decoration: none;
    color: black;
  }
`;

export default NavBar;
