import { Minus, Plus, Trash } from "phosphor-react";
import { useTheme } from "styled-components";

import {
  Container,
  Content,
  CounterButton,
  DeleteButton,
  Divider,
} from "./style";

import { CartItem } from "../../contexts/types";
import { useEffect, useState } from "react";

type Props = {
  item: CartItem;
  handleDeleteCoffeInCart: (id: string) => void;
  incrementPrice: (coffeid: string) => void;
  decrementPrice: (coffeid: string) => void;
};

export function CoffeCardShopSelected({
  item,
  handleDeleteCoffeInCart,
  incrementPrice,
  decrementPrice,
}: Props) {
  const theme = useTheme();
  // const [counterQuantity, setCounterQuantity] = useState<number>(
  //   item?.quantity
  // );
  const [price, setPrice] = useState<number>(0);

  function handleIncrease() {
    // setCounterQuantity((state) => state + 1);
    incrementPrice(item.id!);
  }

  function handleDecrease() {
    // setCounterQuantity((state) => state - 1);
    decrementPrice(item.id!);
  }

  useEffect(() => {
    setPrice(`R$ ${(item.price! * item.quantity).toFixed(2)}`);
  }, []);
  useEffect(() => {
    setPrice(`R$ ${(item.price! * item.quantity).toFixed(2)}`);
  }, [item.quantity]);

  return (
    <>
      <Container>
        <Content>
          <img src={`/variants/${item.logoImg}.svg`} />

          <div>
            <p>{item?.flavor}</p>

            <div>
              <CounterButton>
                <Minus
                  onClick={item.quantity >= 2 && handleDecrease}
                  color={theme["purple-dark"]}
                  size={14}
                  cursor={"pointer"}
                />
                <p>{item.quantity}</p>
                <Plus
                  cursor={"pointer"}
                  onClick={item.quantity >= 1 && handleIncrease}
                  color={theme["purple-dark"]}
                  size={14}
                />
              </CounterButton>
              <DeleteButton onClick={() => handleDeleteCoffeInCart(item?.id!)}>
                <Trash color={theme["purple-dark"]} size={14} />
                <p>remover</p>
              </DeleteButton>
            </div>
          </div>
        </Content>

        <p>{price}</p>
      </Container>

      <Divider />
    </>
  );
}
