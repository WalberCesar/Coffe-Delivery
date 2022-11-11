import { Timer, MapPin, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import MotoboyImg from "../../assets/Illustration.svg";
import { useCart } from "../../contexts/useCart";

import {
  Container,
  ContainerItens,
  Content,
  Image,
  SubTitle,
  Title,
  IconTimer,
  DeliveryInformations,
} from "./style";

export function Succes() {
  const theme = useTheme();
  const { dataAdrees } = useCart();
  return (
    <Container>
      <ContainerItens>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>

        <Content>
          <DeliveryInformations>
            <IconTimer style={{ backgroundColor: `${theme["purple-dark"]}` }}>
              <MapPin color={theme.white} weight="fill" />
            </IconTimer>
            <p>
              Entrega em{" "}
              <b>{` Rua ${dataAdrees.rua}, ${dataAdrees.numero} `}</b>
              <br />{" "}
              {`${dataAdrees.bairro} - ${dataAdrees.cidade} , ${dataAdrees.uf}`}
            </p>
          </DeliveryInformations>
          <DeliveryInformations>
            <IconTimer>
              <Timer color={theme.white} weight="fill" />
            </IconTimer>
            <p>
              Previsão de Entrega <br /> <b>20 min - 30 min</b>
            </p>
          </DeliveryInformations>
          <DeliveryInformations>
            <IconTimer style={{ backgroundColor: `${theme["yellow-dark"]}` }}>
              <CurrencyDollar color={theme.white} weight="fill" />
            </IconTimer>
            <p>
              Pagamento na entrega
              <br />
              <b> {dataAdrees.pagamento}</b>
            </p>
          </DeliveryInformations>
        </Content>
      </ContainerItens>

      <Image src={MotoboyImg} />
    </Container>
  );
}
