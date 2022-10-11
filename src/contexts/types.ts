import { ReactNode } from "react";

export type CartItem = {
  id: string;
  type: string[];
  flavor: string;
  description: string;
  price: number;
  logoImg: string;
  quantity?: number;
};
export type CartContextType = {
  addToCart: (
    coffeInformations: CartItem[],
    coffeId: string,
    coffeQuantity: number
  ) => void;
  coffeInformations: CartItem[];
  amountCoffeInCart: CartItem[] | null;
};

export type CartContextProviderProps = {
  children: ReactNode;
};
