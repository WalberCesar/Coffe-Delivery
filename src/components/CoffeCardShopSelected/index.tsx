import { Minus, Plus, Trash } from "phosphor-react";
import { useTheme } from "styled-components";

import { 
        Container, 
        Content, 
        CounterButton, 
        DeleteButton,
        Divider
} from "./style";

import ImgCoffe from '../../assets/coffes/Coffee.svg'
import {Coffe } from '../CoffeListHome'
type Props = {
    item: Coffe;
}

export function CoffeCardShopSelected ({item}: Props) {
    const theme = useTheme();


    return (
            <>
                <Container>
                   <Content>
                        <img src={ImgCoffe}/>

                        <div>
                            <p>{item.type}</p>

                            <div>
                                <CounterButton>
                                    <Minus color={theme["purple-dark"]} size={14} />
                                    <p>1</p>
                                    <Plus color={theme["purple-dark"]}size={14}/>
                                </CounterButton>
                                <DeleteButton>
                                    <Trash color={theme["purple-dark"]}size={14}/>
                                    <p>remover</p>
                                </DeleteButton>
                            </div>
                        </div>
                   </Content>

                    <p>{item.price}</p>
                </Container>

                <Divider />
            </>

    )
}