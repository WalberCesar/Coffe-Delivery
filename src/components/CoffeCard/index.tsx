import {
  ButtonCoffeCard,
  CoffeDescription,
  CoffeImgLogo,
  CoffeMenuAmount,
  CoffeMenuContainer,
  CoffePrice,
  CoffesSabor,
  CoffeType,
  ContainerCoffeCard,
  CounterCoffeAmount,
} from "./style";

import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartItem } from "../../contexts/types";
import { useCart } from "../../contexts/useCart";
import { ItemsIntro } from "../IntroHome/style";

type Props = {
  informations: CartItem;
  // coffeInformations: CartItem[];
};

export function CoffeCard({ informations }: Props) {
  const { addToCart, coffeInformations } = useCart();
  const theme = useTheme();

  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  return (
    <ContainerCoffeCard>
      <CoffeImgLogo src={`/variants/${informations.logoImg}.svg`} />
      <CoffeType>
        {informations.type!.map((item) => {
          return (
            <div key={item}>
              <p>{item}</p>
            </div>
          );
        })}
      </CoffeType>

      <CoffesSabor>{informations.flavor}</CoffesSabor>
      <CoffeDescription>{informations.description}</CoffeDescription>

      <CoffeMenuContainer>
        <CoffePrice>{(informations.price! * quantity).toFixed(1)}</CoffePrice>
        <CoffeMenuAmount>
          <CounterCoffeAmount>
            <Minus
              cursor={quantity >= 2 ? "pointer" : "not-allowed"}
              onClick={quantity >= 2 && handleDecrease}
              color={theme.purple}
              weight="fill"
            />
            <p>{quantity}</p>
            <Plus
              cursor={"pointer"}
              onClick={quantity >= 1 && handleIncrease}
              color={theme.purple}
              weight="fill"
            />
          </CounterCoffeAmount>

          <ButtonCoffeCard>
            <ShoppingCart
              cursor={"pointer"}
              onClick={() => addToCart(informations.id!, quantity)}
              size={22}
              color={theme.white}
              weight="fill"
            />
          </ButtonCoffeCard>
        </CoffeMenuAmount>
      </CoffeMenuContainer>
    </ContainerCoffeCard>
  );
}
