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
import { useEffect, useState } from "react";

type Props = {
  item: CartItem;
  setCheckoutAmountCoffeInCart: React.Dispatch<
    React.SetStateAction<CartItem[] | undefined>
  >;
  handleDeleteCoffeInCart: (id: string) => void;
};

export function CoffeCardShopSelected({
  item,
  setCheckoutAmountCoffeInCart,
  handleDeleteCoffeInCart,
}: Props) {
  const theme = useTheme();
  const [counterQuantity, setCounterQuantity] = useState<number>(
    0 + item?.quantity
  );

  function handleIncrease() {
    setCounterQuantity((state) => state + 1);
    // setPrice((item.price! / item.quantity) * counterQuantity);
  }

  function handleDecrease() {
    setCounterQuantity((state) => state - 1);
  }

  useEffect(() => {
    setPrice(
      `R$ ${((item.price! / item.quantity) * counterQuantity).toFixed(2)}`
    );
  }, []);
  useEffect(() => {
    setPrice(
      `R$ ${((item.price! / item.quantity) * counterQuantity).toFixed(2)}`
    );
  }, [counterQuantity]);

  const [price, setPrice] = useState<number>(0);

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
                  onClick={counterQuantity >= 2 && handleDecrease}
                  color={theme["purple-dark"]}
                  size={14}
                  cursor={"pointer"}
                />
                <p>{counterQuantity}</p>
                <Plus
                  cursor={"pointer"}
                  onClick={counterQuantity >= 1 && handleIncrease}
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
