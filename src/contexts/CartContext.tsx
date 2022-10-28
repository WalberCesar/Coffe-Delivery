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
      quantity: 0,
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
      quantity: 0,
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

  const [quantityItensOnHeaderCart, setQuantityItensOnHeaderCart] = useState(0);

  const [amountCoffeInCart, setAmountCoffeInCart] = useState<CartItem[]>(
    [] as CartItem[]
  );

  const [quantity, setQuantity] = useState(0);

  function addToCart(coffeId: string, coffeQuantity: number) {
    const coffeAlreadyExistsInCart = amountCoffeInCart.findIndex(
      (item) => item.id === coffeId
    );
    const filter = coffeInformations.filter((item) => item.id === coffeId);
    filter.map((item) => {
      const coffeSelected: CartItem = {
        id: item.id,
        description: item.description,
        flavor: item.flavor,
        logoImg: item.logoImg,
        price: item.price!,
        quantity: coffeQuantity,
        type: item.type,
      };
      if (coffeAlreadyExistsInCart < 0) {
        if (amountCoffeInCart.length === 0) {
          return setAmountCoffeInCart([coffeSelected]);
        } else {
          return setAmountCoffeInCart((state) => [...state, coffeSelected]);
        }
      } else {
        setAmountCoffeInCart((state) => [
          ...state.filter((item) => item !== state[coffeAlreadyExistsInCart]),
          (state[coffeAlreadyExistsInCart] = {
            quantity: state[coffeAlreadyExistsInCart].quantity + 1,
            description: state[coffeAlreadyExistsInCart].description,
            flavor: state[coffeAlreadyExistsInCart].flavor,
            id: state[coffeAlreadyExistsInCart].id,
            logoImg: state[coffeAlreadyExistsInCart].logoImg,
            price: state[coffeAlreadyExistsInCart].price!,
            type: state[coffeAlreadyExistsInCart].type,
          }),
        ]);
      }
    });
  }

  async function setItensOnStorage() {
    if (amountCoffeInCart.length > 0) {
      const dataSet = await JSON.stringify(amountCoffeInCart);
      await localStorage.setItem("@coffe_delivery", dataSet);
    }
  }
  useEffect(() => {
    setQuantityItensOnHeaderCart(amountCoffeInCart.length);
    setItensOnStorage();
    setAmountCoffeInCart([]);
  }, []);
  useEffect(() => {
    setItensOnStorage();
    setQuantityItensOnHeaderCart(amountCoffeInCart.length);
  }, [amountCoffeInCart]);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        coffeInformations,
        amountCoffeInCart: amountCoffeInCart,
        setQuantityItensOnHeaderCart,
        quantityItensOnHeaderCart,
        setAmountCoffeInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
