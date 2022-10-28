import { Container, Total, ValueFrete, ValueTotalItens } from "./style";
type Props = {
  price: number[];
};
export function TotalPrice({ price }: Props) {
  const total = price
    .filter((item) => item !== null)
    .reduce((acumulator, price) => {
      if (price > 0) {
        return acumulator + price;
      } else {
        return (acumulator = 0);
      }
    }, 0);
  //   console.log("total => ", total);
  //   console.log("price => ", price.length);
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
