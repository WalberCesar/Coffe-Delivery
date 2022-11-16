import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { useCart } from "../../contexts/useCart";
import {
  ButtonPayamentMethod,
  Container,
  ContainerPayamentMethod,
  Header,
  SelectedButtonPayamentMethod,
} from "./style";
import { produce } from "immer";

export function PayamentInformations() {
  const theme = useTheme();
  const { setDataAdrees, dataAdrees } = useCart();

  function selectMethodPayament(
    pagamento: "Cartão de Crédito" | "Cartão de Débito" | "Dinheiro" | ""
  ) {
    const producePayament = produce(dataAdrees, (draft) => {
      draft.pagamento = pagamento;
    });
    setDataAdrees(producePayament);
    // setDataAdrees((state) => ({
    //   ...state,
    //   bairro: state.bairro,
    //   cep: state.cep,
    //   cidade: state.cidade,
    //   complemento: state.complemento,
    //   numero: state.numero,
    //   rua: state.rua,
    //   uf: state.uf,
    //   pagamento: pagamento,
    // }));
  }
  return (
    <Container>
      <Header>
        <CurrencyDollar color={theme.purple} size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </Header>

      <ContainerPayamentMethod>
        {dataAdrees.pagamento === "Cartão de Crédito" ? (
          <SelectedButtonPayamentMethod
            onClick={() => selectMethodPayament("")}
          >
            <CreditCard color={theme.purple} size={16} />
            Cartão de crédito
          </SelectedButtonPayamentMethod>
        ) : (
          <ButtonPayamentMethod
            onClick={() => selectMethodPayament("Cartão de Crédito")}
          >
            <CreditCard color={theme.purple} size={16} />
            Cartão de crédito
          </ButtonPayamentMethod>
        )}
        {dataAdrees.pagamento === "Cartão de Débito" ? (
          <SelectedButtonPayamentMethod
            onClick={() => selectMethodPayament("")}
          >
            <Bank color={theme.purple} size={16} />
            Cartão de débito
          </SelectedButtonPayamentMethod>
        ) : (
          <ButtonPayamentMethod
            onClick={() => selectMethodPayament("Cartão de Débito")}
          >
            <Bank color={theme.purple} size={16} />
            Cartão de débito
          </ButtonPayamentMethod>
        )}
        {dataAdrees.pagamento === "Dinheiro" ? (
          <SelectedButtonPayamentMethod
            onClick={() => selectMethodPayament("")}
          >
            <Money color={theme.purple} size={16} />
            Dinheiro
          </SelectedButtonPayamentMethod>
        ) : (
          <ButtonPayamentMethod
            onClick={() => selectMethodPayament("Dinheiro")}
          >
            <Money color={theme.purple} size={16} />
            Dinheiro
          </ButtonPayamentMethod>
        )}
      </ContainerPayamentMethod>
    </Container>
  );
}
