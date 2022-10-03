import { CurrencyDollar, MapPin, CreditCard, Bank, Money } from "phosphor-react"
import { useContext } from "react"
import { useTheme } from "styled-components"
import { CoffeCardShopSelected } from "../../components/CoffeCardShopSelected"
import { FormAddress } from "../../components/FormAddress"
import { TotalPrice } from "../../components/TotalPrice"
import { CartContext } from "../../contexts/CartContext"
import { 
        ContainerInformations, 
        AdressInformation, 
        HeaderInformation, 
        PayamentInformation, 
        HeaderPayament, 
        ContainerPayamentMethod,
        ButtonConfirmShopping,
        CoffeShoppingList,
        Container,
} from "./style"




export function Checkout () {
   
   const theme = useTheme();

   const {amountCoffeInCart} = useContext(CartContext)

    return (
        <Container>
            
            <ContainerInformations>
                
                <AdressInformation>
                    <HeaderInformation>
                        <MapPin color={theme["yellow-dark"]}  size={22}/>
                        <div>
                            <h3>Endereço de entrega</h3>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </HeaderInformation>

                    <FormAddress />
                </AdressInformation>

                <PayamentInformation>
                    <HeaderPayament>
                        <CurrencyDollar color={theme.purple} size={22}/>
                        <div>
                            <h3>Pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </HeaderPayament>

                    <ContainerPayamentMethod>
                        <button>
                            <CreditCard color={theme.purple} size={16} />
                            Cartão de crédito
                        </button>
                        <button>
                            <Bank color={theme.purple} size={16}/>
                            Cartão de débito
                        </button>
                        <button>
                            <Money color={theme.purple} size={16}/>
                            Dinheiro
                        </button>
                    </ContainerPayamentMethod>
                </PayamentInformation>
            </ContainerInformations>

            <CoffeShoppingList>
                {amountCoffeInCart.map(item => <CoffeCardShopSelected item={item} />)}
                <TotalPrice />
                <ButtonConfirmShopping>
                    <label>CONFIRMAR PEDIDO</label>
                </ButtonConfirmShopping>
            </CoffeShoppingList>
            
        </Container>
    )
}