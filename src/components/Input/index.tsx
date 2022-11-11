import { Container, InputAdrees } from "./style";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { InformationsAdreesAndPayament } from "../../contexts/types";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  width?: string;
  register: UseFormRegister<InformationsAdreesAndPayament>;
  nameInput:
    | "cep"
    | "rua"
    | "numero"
    | "complemento"
    | "bairro"
    | "cidade"
    | "uf"
    | "pagamento";
  error?: string;
};
export function Input({
  width,
  register,
  nameInput,
  error,

  ...props
}: InputProps) {
  return (
    <Container style={{ width: `${width}` }}>
      <InputAdrees
        placeholder={nameInput!.charAt(0).toUpperCase() + nameInput!.slice(1)}
        {...props}
        {...register!(`${nameInput}`, { required: `Informe o ${nameInput}` })}
      />
      {error && <p>{error}</p>}
    </Container>
  );
}
