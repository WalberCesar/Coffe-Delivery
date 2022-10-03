import MotoboyImg from '../../assets/Illustration.svg'

import {Container,ContainerItens,Content,Image, SubTitle, Title} from './style'

export function Succes () {
    return(
        <Container>
            <ContainerItens>
                <Title>Uhu! Pedido confirmado</Title>
                <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>

                <Content>

                </Content>
            </ContainerItens>

            <Image src={MotoboyImg} />
        </Container>
    )
}