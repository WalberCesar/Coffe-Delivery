import { ReactNode } from "react";
export type InformationsAdreesAndPayament = {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  pagamento: "Cartão de Crédito" | "Cartão de Débito" | "Dinheiro" | "";
};
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
  setDataAdrees: React.Dispatch<
    React.SetStateAction<{} | InformationsAdreesAndPayament>
  >;
  dataAdrees: {} | InformationsAdreesAndPayament;
};

export type CartContextProviderProps = {
  children: ReactNode;
};
