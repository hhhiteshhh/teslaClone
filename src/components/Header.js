import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCar } from "../features/carSlice";
import { useSelector } from "react-redux";
function Header() {
  const [show, setShow] = useState(false);
  const cars = useSelector(selectCar);
  const showmenu = () => {
    setShow(true);
  };
  const hidemenu = () => {
    setShow(false);
  };
  return (
    <Container>
      <Left>
        <a>
          <img src="/images/logo.svg" alt="" />
        </a>
      </Left>
      <Middle>
        {cars &&
          cars.map((car, index) => (
            <a href="#" key={index}>
              {car}
            </a>
          ))}
      </Middle>
      <Right>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => showmenu()} />
      </Right>
      <BurgerNav show={show}>
        <WrapperClose>
          <Customcross onClick={() => hidemenu()} />
        </WrapperClose>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a href="" key={index}>
                {car}
              </a>
            </li>
          ))}
        <li>
          <a href="">Existing Inventory </a>
        </li>
        <li>
          <a href="">Used Inventory </a>
        </li>
        <li>
          <a href="">Trade-in </a>
        </li>
        <li>
          <a href="">CyberTruck </a>
        </li>
        <li>
          <a href="">Roadster</a>
        </li>
        <li>
          <a href=""> Semi </a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 13px;
  width: 100%;
  z-index: 1;
`;
const Left = styled.div``;
const WrapperClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: 600;
  text-transform: uppercase;
  flex-wrap: nowrap;

  a {
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-transform: uppercase;
  flex-wrap: nowrap;
  a {
    padding: 0 3px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const Customcross = styled(CloseIcon)`
  cursor: pointer;
  margin: 5px;
`;

const BurgerNav = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 999;
  list-style: none;
  display: ${(props) => props.show};
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.2s;
  li {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover {
      background: #e4efe7;
    }
    a {
      font-weight: 600;
    }
  }
`;
