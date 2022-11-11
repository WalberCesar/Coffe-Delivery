import { UseFormRegister } from "react-hook-form";
import { InformationsAdreesAndPayament } from "../../contexts/types";
import { Input } from "../Input";
import {
  InputGroupOne,
  InputGroupTwo,
  Container,
  FormContent,
  HeaderInformation,
} from "./style";
import { MapPin } from "phosphor-react";
import { useTheme } from "styled-components";

type Props = {
  register: UseFormRegister<InformationsAdreesAndPayament>;
  error: {
    [key: string]: {
      message: string;
    };
  };
};

export function FormAddress({ register, error }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <HeaderInformation>
        <MapPin color={theme["yellow-dark"]} size={22} />
        <div>
          <h3>Endereço de entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </HeaderInformation>
      <FormContent>
        <Input
          error={error.cep?.message}
          width="100%"
          nameInput="cep"
          register={register}
        />
        <Input error={error.rua?.message} nameInput="rua" register={register} />

        <InputGroupOne>
          <Input
            error={error.numero?.message}
            width={"200px"}
            nameInput="numero"
            register={register}
          />
          <Input
            error={error.complemento?.message}
            nameInput="complemento"
            register={register}
          />
        </InputGroupOne>

        <InputGroupTwo>
          <Input
            error={error.bairro?.message}
            width={"200px"}
            nameInput="bairro"
            register={register}
          />
          <Input
            error={error.cidade?.message}
            nameInput="cidade"
            register={register}
          />

          {error.uf?.message ? (
            <Input
              style={{ marginTop: "14px" }}
              error={error.uf?.message}
              width={"60px"}
              nameInput="uf"
              register={register}
            />
          ) : (
            <Input
              error={error.uf?.message}
              width={"60px"}
              nameInput="uf"
              register={register}
            />
          )}
        </InputGroupTwo>
      </FormContent>
    </Container>
  );
}
