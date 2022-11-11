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
  setCheckoutAmountCoffeInCart: React.Dispatch<
    React.SetStateAction<CartItem[] | undefined>
  >;
  checkoutAmountCoffeInCart: CartItem[] | undefined;
};

export function CoffeCardShopSelected({
  item,
  handleDeleteCoffeInCart,
  checkoutAmountCoffeInCart,
  setCheckoutAmountCoffeInCart,
}: Props) {
  const theme = useTheme();

  const [price, setPrice] = useState<number>(0);

  function handleIncrease(coffeid: string | undefined) {
    const incrementQuantity: any = checkoutAmountCoffeInCart?.map((item) => {
      if (item.id === coffeid) {
        return {
          id: item.id,
          description: item.description,
          flavor: item.flavor,
          logoImg: item.logoImg,
          price: item.price,
          type: item.type,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setCheckoutAmountCoffeInCart(incrementQuantity!);
  }

  function handleDecrease(coffeid: string | undefined) {
    const incrementQuantity: any = checkoutAmountCoffeInCart?.map((item) => {
      if (item.id === coffeid) {
        return {
          id: item.id,
          description: item.description,
          flavor: item.flavor,
          logoImg: item.logoImg,
          price: item.price,
          type: item.type,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    setCheckoutAmountCoffeInCart(incrementQuantity!);
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
                  onClick={() => item.quantity >= 2 && handleDecrease(item.id)}
                  color={theme["purple-dark"]}
                  size={14}
                  cursor={"pointer"}
                />
                <p>{item.quantity}</p>
                <Plus
                  cursor={"pointer"}
                  onClick={() => item.quantity >= 1 && handleIncrease(item.id)}
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
