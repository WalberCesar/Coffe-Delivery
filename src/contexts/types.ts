import { ReactNode } from "react";

export type CartItem = {
  id?: string;
  type?: string[];
  flavor?: string;
  description?: string;
  price?: number;
  logoImg?: string;
  quantity: number;
};
export type CartContextType = {
  addToCart: (coffeId: string, coffeQuantity: number) => void;
  coffeInformations: CartItem[];
  amountCoffeInCart: CartItem[];
  setQuantityItensOnHeaderCart: React.Dispatch<React.SetStateAction<number>>;
  quantityItensOnHeaderCart: number;
  setAmountCoffeInCart: (value: React.SetStateAction<CartItem[]>) => void;
};

export type CartContextProviderProps = {
  children: ReactNode;
};
