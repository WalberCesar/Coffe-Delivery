import { useState, createContext, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CartContext } from "../../contexts/CartContext";

import { CoffeCard } from "../CoffeCard";
import { CoffeListContent, Container } from "./styles";



export type Coffe = {
    id: string,
    type: string[],
    flavor: string,
    description: string,
    price: number;
    logoImg: string;
    quantity?:number;
}

export function CoffeListHome () {

    const {} = useContext(CartContext);

    const [coffeInformations, setCoffeInformations] = useState<Coffe[]>([{
        id: uuidv4(),
        type: ['TRADICIONAL'],
        flavor:'Expresso Tradicional',
        description:'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        logoImg:'expresso',
        quantity: 0,

    },
    {
        id: uuidv4(),
        type: ['TRADICIONAL'],
        flavor:'Expresso Cremoso',
        description:'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        logoImg:'expressoCremoso',
        quantity: 0,
    },
    {
        id: uuidv4(),
        type: ['TRADICIONAL',' gelado'],
        flavor:'Expresso Gelado',
        description:'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        logoImg:'expressoGelado',
        quantity: 0,
    },
    {
        id: uuidv4(),
        type: ['TRADICIONAL',' com leite'],
        flavor:'Café com Leite',
        description:'Meio a meio de expresso tradicional com leite vaporizados',
        price: 9.90,
        logoImg:'cafeComLeite',

    },
    {
        id: uuidv4(),
        type: ['TRADICIONAL',' com leite'],
        flavor:'Latte',
        description:'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        logoImg:'latte',
        quantity: 0,
    },
    {
        id: uuidv4(),
        type: ['TRADICIONAL',' com leite'],
        flavor:'Capuccino',
        description:'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
        logoImg:'capuccino'

    },
    {
        id: uuidv4(),
        type: ['TRADICIONAL',' com leite'],
        flavor:'Macchiato',
        description:'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        logoImg:'macchiato',
        quantity: 0,
    },
    {
        id: uuidv4(),
        type: ['TRADICIONAL',' com leite'],
        flavor:'Mocaccino',
        description:'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
        logoImg:'mochaccino',
        quantity: 0,
    },
    {
        id: uuidv4(),
        type: ['especial',' com leite'],
        flavor:'Chocolate Quente',
        description:'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        logoImg:'chocolateQuente',
        quantity: 0,
    },
    {
        id: uuidv4(),
        type: ['especial',' alcoólico',' gelado'],
        flavor:'Cubano',
        description:'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
        logoImg:'cubano',
        quantity: 0,
    },
    {
        id: uuidv4(),
        type: ['especial'],
        flavor:'Havaiano',
        description:'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
        logoImg:'havaiano',
        quantity: 0,
    },
    {
        id: uuidv4(),
        type: ['especial'],
        flavor:'Árabe',
        description:'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        logoImg:'arabe',
        quantity: 0,
    },
    {
        id: uuidv4(),
        type: ['especial',' alcoólico'],
        flavor:'Irlandês',
        description:'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
        logoImg:'irlandês',
        quantity: 0,
    }
])


   


    return(
       <Container>
            <h1>Nossos Cafés</h1>
            <CoffeListContent>
               {coffeInformations.map((item) => {
                return (
                <CoffeCard 
                    key={item.id}
                    informations= {item}
                    coffeInformations={coffeInformations}     
                />
                );
               })}
            </CoffeListContent>
       </Container>


    )
}