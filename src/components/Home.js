import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <MainWrapper>
      <HomeContent>
        <div>
          <p>NEW TREND 2022</p>
          <h1>
            Spring <span>Collection</span>
          </h1>
          <ShopBtn to="/Fake-Store/products">
            <span>SHOP NOW</span>
            <FontAwesomeIcon icon={faAngleRight} size="sm" color="#23c920" />
          </ShopBtn>
        </div>
        <div className="img-container">
          <img
            src={require("../img/joey-nicotra-HiqgOQaksAQ-unsplash_ccexpress.png")}
          />
        </div>
      </HomeContent>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  height: calc(100vh - 8rem);
  display: flex;
  max-width: 140rem;
  margin: 0 auto;
  align-items: center;
  animation: 600ms fadeIn forwards;

  @media (max-width: 600px) {
    height: 100%;
    margin-top: 10rem;
  }
`;

const HomeContent = styled.div`
  user-select: none;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
  padding-left: 4rem;
  h1 {
    font-size: 8rem;
  }
  p {
    font-size: 3rem;
  }
  h1 span {
    color: #23c920;
  }
  img {
    width: 100%;
  }
  .img-container {
    height: 100%;
    width: 70rem;
    display: flex;
    align-items: end;
    justify-content: end;

    @media (max-width: 1550px) {
      align-items: center;
    }

    @media (max-width: 1150px) {
      display: none;
    }
  }
  @media (max-width: 1150px) {
    justify-content: center;
  }
  @media (max-width: 470px) {
    text-align: center;
    padding: 0 3rem;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
const ShopBtn = styled(Link)`
  margin-top: 1.2rem;
  background: black;
  width: 15rem;
  height: 5.1rem;
  padding: 1rem 2.7rem;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 100ms ease;
  color: white;
  text-decoration: none;

  &:hover {
    background: #ff8900;
    color: white;

    svg {
      color: black;
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;
export default Home;
