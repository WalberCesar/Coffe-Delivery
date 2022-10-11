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

export function CoffeCardShopSelected() {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Content>
          <img src={ImgCoffe} />

          <div>
            <p>EXPRESSO TRADICIONAL</p>

            <div>
              <CounterButton>
                <Minus color={theme["purple-dark"]} size={14} />
                <p>1</p>
                <Plus color={theme["purple-dark"]} size={14} />
              </CounterButton>
              <DeleteButton>
                <Trash color={theme["purple-dark"]} size={14} />
                <p>remover</p>
              </DeleteButton>
            </div>
          </div>
        </Content>

        <p>9.9</p>
      </Container>

      <Divider />
    </>
  );
}
