import {
  ContainerHeader,
  Counter,
  RightHeaderMenu,
  ShoppingCartButton,
} from "./style";
import logoImg from "../../assets/Logo1.svg";
import { ShoppingCart, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useCart } from "../../contexts/useCart";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { amountCoffeInCart, quantityItensOnHeaderCart } = useCart();
  const navigate = useNavigate();
  const theme = useTheme();
  const counter = quantityItensOnHeaderCart;

  // const [counter, setCounter] = useState(0);

  // async function getItensOnStorage() {
  //   const data = await localStorage.getItem("@coffe_delivery");
  //   const responseJSON = await JSON.parse(data!);
  //   setCounter(responseJSON.length);
  // }

  // console.log("counter =>", counter);
  // useEffect(() => {
  //   getItensOnStorage();
  // }, []);

  // useEffect(() => {
  //   getItensOnStorage();
  // }, [amountCoffeInCartLength]);

  return (
    <ContainerHeader>
      <img src={logoImg} onClick={() => navigate("/")} />
      <RightHeaderMenu>
        <div>
          <MapPin weight="fill" color={theme["purple-dark"]} size={22} />
          <p>Mauá,SP</p>
        </div>

        {counter! > 0 ? (
          <ShoppingCartButton>
            <ShoppingCart
              weight="fill"
              color={theme["yellow-dark"]}
              size={22}
              onClick={() => navigate("/checkout")}
            />

            <Counter>
              <p>{counter}</p>
            </Counter>
          </ShoppingCartButton>
        ) : (
          <ShoppingCartButton>
            <ShoppingCart
              weight="fill"
              color={theme["yellow-dark"]}
              size={22}
              onClick={() => navigate("/checkout")}
            />
          </ShoppingCartButton>
        )}
      </RightHeaderMenu>
    </ContainerHeader>
  );
}
