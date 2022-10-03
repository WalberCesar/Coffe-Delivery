import { Container, Total, ValueFrete, ValueTotalItens } from "./style";

export function TotalPrice () {
    return (
        <Container>
            <ValueTotalItens>
                <p>Total de itens</p>
                <p>R$ 29,99</p>
            </ValueTotalItens>

            <ValueFrete>
                <p>Entrega</p>
                <p>R$ 3,50</p>
            </ValueFrete>

            <Total>
                <p>Total</p>
                <p>R$ 33,49</p>
            </Total>
        </Container>
    );
}