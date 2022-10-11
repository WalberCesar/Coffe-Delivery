import { createContext, ReactNode, useEffect, useState } from "react";
import { CartContextProviderProps, CartContextType, CartItem } from "./types";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeInformations, setCoffeInformations] = useState<CartItem[]>([
    {
      id: uuidv4(),
      type: ["TRADICIONAL"],
      flavor: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
      logoImg: "expresso",
      quantity: 0,
    },
    {
      id: uuidv4(),
      type: ["TRADICIONAL"],
      flavor: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
      logoImg: "expressoCremoso",
      quantity: 0,
    },
    {
      id: uuidv4(),
      type: ["TRADICIONAL", " gelado"],
      flavor: "Expresso Gelado",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
      logoImg: "expressoGelado",
      quantity: 0,
    },
    {
      id: uuidv4(),
      type: ["TRADICIONAL", " com leite"],
      flavor: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizados",
      price: 9.9,
      logoImg: "cafeComLeite",
    },
    {
      id: uuidv4(),
      type: ["TRADICIONAL", " com leite"],
      flavor: "Latte",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
      logoImg: "latte",
      quantity: 0,
    },
    {
      id: uuidv4(),
      type: ["TRADICIONAL", " com leite"],
      flavor: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
      logoImg: "capuccino",
    },
    {
      id: uuidv4(),
      type: ["TRADICIONAL", " com leite"],
      flavor: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.9,
      logoImg: "macchiato",
      quantity: 0,
    },
    {
      id: uuidv4(),
      type: ["TRADICIONAL", " com leite"],
      flavor: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.9,
      logoImg: "mochaccino",
      quantity: 0,
    },
    {
      id: uuidv4(),
      type: ["especial", " com leite"],
      flavor: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.9,
      logoImg: "chocolateQuente",
      quantity: 0,
    },
    {
      id: uuidv4(),
      type: ["especial", " alcoólico", " gelado"],
      flavor: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.9,
      logoImg: "cubano",
      quantity: 0,
    },
    {
      id: uuidv4(),
      type: ["especial"],
      flavor: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9.9,
      logoImg: "havaiano",
      quantity: 0,
    },
    {
      id: uuidv4(),
      type: ["especial"],
      flavor: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.9,
      logoImg: "arabe",
      quantity: 0,
    },
    {
      id: uuidv4(),
      type: ["especial", " alcoólico"],
      flavor: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.9,
      logoImg: "irlandês",
      quantity: 0,
    },
  ]);

  const [coffeSelected, setCoffeSelected] = useState<CartItem>();

  const [amountCoffeInCart, setAmountCoffeInCart] = useState<CartItem[] | null>(
    [] as CartItem[]
  );

  const [checkoutAmountCoffeInCart, setCheckoutAmountCoffeInCart] = useState<
    CartItem[] | null
  >([] as CartItem[]);

  function addToCart(
    coffeInformations: CartItem[],
    coffeId: string,
    coffeQuantity: number
  ) {
    coffeInformations
      .filter((item) => item.id === coffeId)
      .map((item) => {
        return setCoffeSelected({
          id: item.id,
          description: item.description,
          flavor: item.flavor,
          logoImg: item.logoImg,
          price: item.price * coffeQuantity,
          quantity: coffeQuantity,
          type: item.type,
        });
      });

    setAmountCoffeInCart((state) => [...state!, coffeSelected!]);
  }
  // console.log(amountCoffeInCart);

  useEffect(() => {
    async function setItemsCoffe() {
      const dataSet = JSON.stringify(amountCoffeInCart);
      await localStorage.setItem("@coffe_delivery", dataSet);
    }

    setItemsCoffe();
  }, [amountCoffeInCart]);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        coffeInformations,
        amountCoffeInCart: amountCoffeInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
