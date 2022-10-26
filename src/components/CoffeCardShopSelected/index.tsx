import { Minus, Plus, Trash } from "phosphor-react";
import { useTheme } from "styled-components";

import {
  Container,
  Content,
  CounterButton,
  DeleteButton,
  Divider,
} from "./style";

import ImgCoffe from "../../assets/coffes/Coffee.svg";
import { CartItem } from "../../contexts/types";
import { useState } from "react";

type Props = {
  item: CartItem | null;
  setCheckoutAmountCoffeInCart: React.Dispatch<
    React.SetStateAction<CartItem[] | undefined>
  >;
  checkoutAmountCoffeInCart: CartItem[];
};

export function CoffeCardShopSelected({
  item,
  checkoutAmountCoffeInCart,
  setCheckoutAmountCoffeInCart,
}: Props) {
  const theme = useTheme();
  const [counterQuantity, setCounterQuantity] = useState(0);

  function handleIncrease() {
    setCounterQuantity((state) => state + 1);
    setCheckoutAmountCoffeInCart((state) => [
      ...state!,
      { quantity: counterQuantity },
    ]);
  }

  function handleDecrease() {
    setCounterQuantity((state) => state - 1);
    setCheckoutAmountCoffeInCart((state) => [
      ...state!,
      { quantity: counterQuantity },
    ]);
  }

  return (
    <>
      <Container>
        <Content>
          <img src={ImgCoffe} />

          <div>
            <p>{item?.type}</p>

            <div>
              <CounterButton>
                <Minus
                  onClick={handleDecrease}
                  color={theme["purple-dark"]}
                  size={14}
                />
                <p>{item?.quantity}</p>
                <Plus
                  onClick={handleIncrease}
                  color={theme["purple-dark"]}
                  size={14}
                />
              </CounterButton>
              <DeleteButton>
                <Trash color={theme["purple-dark"]} size={14} />
                <p>remover</p>
              </DeleteButton>
            </div>
          </div>
        </Content>

        <p>{item?.price}</p>
      </Container>

      <Divider />
    </>
  );
}
