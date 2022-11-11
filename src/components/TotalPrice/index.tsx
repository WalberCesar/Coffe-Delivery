import { useEffect, useState } from "react";
import { CartItem } from "../../contexts/types";
import { Container, Total, ValueFrete, ValueTotalItens } from "./style";
type Props = {
  checkoutAmountCoffeInCart: CartItem[] | undefined;
};
export function TotalPrice({ checkoutAmountCoffeInCart }: Props) {
  const [totalPrice, setTotalPrice] = useState<number[]>([]);
  const total = totalPrice
    .filter((item) => item !== null)
    .reduce((acumulator, totalPrice) => {
      if (totalPrice > 0) {
        return acumulator + totalPrice;
      } else {
        return (acumulator = 0);
      }
    }, 0);

  function calculateTotalPPrice() {
    if (checkoutAmountCoffeInCart!?.length > 0) {
      const data = checkoutAmountCoffeInCart
        ?.filter((item) => item !== null)
        .map((item) => item.price! * item.quantity);

      setTotalPrice(data);
    } else {
      setTotalPrice([]);
    }
  }
  useEffect(() => {
    calculateTotalPPrice();
  }, [checkoutAmountCoffeInCart]);
  return (
    <Container>
      <ValueTotalItens>
        <p>Total de itens</p>
        <p>{`R$ ${total.toFixed(2).toString().replace(".", ",")}`}</p>
      </ValueTotalItens>

      <ValueFrete>
        <p>Entrega</p>
        <p>R$ 3,50</p>
      </ValueFrete>

      <Total>
        <p>Total</p>
        <p>
          {total > 0
            ? `R$ ${(total + 3.5).toFixed(2).toString().replace(".", ",")}`
            : total.toFixed(2).toString().replace(".", ",")}
        </p>
      </Total>
    </Container>
  );
}
