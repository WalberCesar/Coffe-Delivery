import { ContainerHeader, Counter, RightHeaderMenu, ShoppingCartButton } from "./style";
import logoImg from '../../assets/Logo1.svg'
import { ShoppingCart, MapPin} from 'phosphor-react'
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export function Header () {
    const { amountCoffeInCart} = useContext(CartContext)

    const theme = useTheme();
    const counter = amountCoffeInCart.length;

    
    return(
       <ContainerHeader>
            <img src={logoImg}/>
                <RightHeaderMenu>
                    <div>
                        <MapPin weight="fill" color={theme["purple-dark"]} size={22}  /> 
                        <p>Mauá,SP</p>
                    </div>


                    {counter > 0 ? 
                         <ShoppingCartButton>
                         <ShoppingCart 
                              weight="fill" 
                              color={theme["yellow-dark"]} 
                              size={22} 
                         />
  
                         <Counter>
                              <p>
                                  {counter}
                              </p>
                         </Counter>
                      </ShoppingCartButton>
                    :

                    <ShoppingCartButton>
                    <ShoppingCart 
                         weight="fill" 
                         color={theme["yellow-dark"]} 
                         size={22} 
                    />
                    </ShoppingCartButton>
                    }
                   
                </RightHeaderMenu>
       </ContainerHeader>
    )
}