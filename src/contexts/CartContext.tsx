import {  createContext, ReactNode, useState} from 'react'
import {Coffe } from '../components/CoffeListHome'

export type CartItem = Coffe;

type CartContextType = {
    addToCart: (coffeInformations: CartItem[], coffeId: string, coffeQuantity: number) => void;
    amountCoffeInCart: CartItem[];
    
}

type CartContextProviderProps = {
    children: ReactNode;
}
export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}:CartContextProviderProps) {

   

    const [coffeSelected, setCoffeSelected] = useState<CartItem>()

        const [amountCoffeInCart, setAmountCoffeInCart] = useState<CartItem[]>([])


     function addToCart(coffeInformations: CartItem[], coffeId: string, coffeQuantity: number){

              coffeInformations.filter(item => item.id=== coffeId).map(item => {
            return (
                setCoffeSelected({
                    id: item.id,
                    description: item.description,
                    flavor: item.flavor,
                    logoImg: item.logoImg,
                    price: item.price * coffeQuantity,
                    quantity: coffeQuantity,
                    type: item.type
                })
            )
        })

        setAmountCoffeInCart(state => [...state, coffeSelected!])
        console.log(amountCoffeInCart)
        
    }



    return (
        <CartContext.Provider value={ {addToCart, amountCoffeInCart}}>
            {children}
        </CartContext.Provider>
    )
}