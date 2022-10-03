import { InputCep, InputStreet, InputGroupOne, InputHouseNumber, InputComplement, InputGroupTwo, InputDistrict, InputCity, InputUf, Container } from "./style";

export function FormAddress () {
    return (
            <Container>
                <InputCep placeholder="Cep"></InputCep>
                <InputStreet placeholder="Rua"></InputStreet>
                <InputGroupOne>
                    <InputHouseNumber placeholder="Número" />
                    <InputComplement placeholder="Complemento" />
                </InputGroupOne>

                <InputGroupTwo>
                    <InputDistrict placeholder="Bairro"/>
                    <InputCity placeholder="Cidade"/>
                    <InputUf placeholder="Uf"/>
                </InputGroupTwo>
            </Container>
    );
}