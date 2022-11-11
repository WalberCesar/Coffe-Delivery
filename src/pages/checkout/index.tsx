import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CoffeCardShopSelected } from "../../components/CoffeCardShopSelected";
import { TotalPrice } from "../../components/TotalPrice";
import { CartItem, InformationsAdreesAndPayament } from "../../contexts/types";
import { useCart } from "../../contexts/useCart";
import {
  ContainerInformations,
  ButtonConfirmShopping,
  CoffeShoppingList,
  Container,
} from "./style";

import { FormAddress } from "../../components/FormAddress";
import { PayamentInformations } from "../../components/PayamentInformations";
type ErrorsType = {
  errors: {
    [key: string]: {
      message: string;
    };
  };
};
export function Checkout() {
  const {
    setQuantityItensOnHeaderCart,
    setDataAdrees,
    addToCart,
    amountCoffeInCart,
    setAmountCoffeInCart,
    dataAdrees,
  } = useCart();

  const { handleSubmit, register, formState } =
    useForm<InformationsAdreesAndPayament>();

  const { errors } = formState as unknown as ErrorsType;

  const navigate = useNavigate();

  function handleSubmitAdrees({
    bairro,
    cep,
    cidade,
    complemento,
    numero,
    rua,
    uf,
  }: InformationsAdreesAndPayament) {
    const data = {
      bairro: bairro,
      cep: cep,
      cidade: cidade,
      complemento: complemento,
      numero: numero,
      rua: rua,
      uf: uf,
    };
    setDataAdrees((state) => ({
      ...state,
      bairro: data.bairro,
      cep: data.cep,
      cidade: data.cidade,
      complemento: data.complemento,
      numero: data.numero,
      rua: data.rua,
      uf: data.uf,
      pagamento: state.pagamento,
    }));

    setQuantityItensOnHeaderCart(0);
    if (checkoutAmountCoffeInCart?.length! > 0) {
      if (dataAdrees.pagamento === "") {
        alert("Selecione um método de pagamento");
      } else {
        navigate("/succes");
      }
    } else {
      alert("Sua lista de compras esta vazia! Adicione itens ao pedido");
      navigate("/");
    }
  }

  const [checkoutAmountCoffeInCart, setCheckoutAmountCoffeInCart] =
    useState<CartItem[]>();

  function handleDeleteCoffeInCart(id: string) {
    setCheckoutAmountCoffeInCart(
      checkoutAmountCoffeInCart?.filter((item) => item.id !== id)
    );
  }

  async function removeItensOnStorage() {
    const dataSet = await JSON.stringify(checkoutAmountCoffeInCart);
    await localStorage.setItem("@coffe_delivery", dataSet);
    if (
      checkoutAmountCoffeInCart?.length === 0 ||
      checkoutAmountCoffeInCart === undefined
    ) {
      await localStorage.removeItem("@coffe_delivery");
      setAmountCoffeInCart([]);
    }
  }

  useEffect(() => {
    removeItensOnStorage();
  }, [checkoutAmountCoffeInCart]);

  useEffect(() => {
    removeItensOnStorage();
    setQuantityItensOnHeaderCart(checkoutAmountCoffeInCart?.length!);
    setDataAdrees({});
  }, []);
  useEffect(() => {
    setQuantityItensOnHeaderCart(checkoutAmountCoffeInCart?.length!);
  }, [handleDeleteCoffeInCart]);
  useEffect(() => {
    async function getItems() {
      const response = await localStorage.getItem("@coffe_delivery");
      const responseJSON = await JSON.parse(response!);
      setCheckoutAmountCoffeInCart(responseJSON);
    }

    getItems();
  }, [addToCart, amountCoffeInCart]);

  return (
    <Container>
      <ContainerInformations>
        <FormAddress error={errors} register={register} />

        <PayamentInformations />
      </ContainerInformations>

      <CoffeShoppingList>
        {checkoutAmountCoffeInCart
          ?.filter((item) => item !== null)
          .map((item) => (
            <CoffeCardShopSelected
              item={item}
              handleDeleteCoffeInCart={handleDeleteCoffeInCart}
              setCheckoutAmountCoffeInCart={setCheckoutAmountCoffeInCart}
              checkoutAmountCoffeInCart={checkoutAmountCoffeInCart}
            />
          ))}

        <TotalPrice checkoutAmountCoffeInCart={checkoutAmountCoffeInCart} />
        <ButtonConfirmShopping onClick={handleSubmit(handleSubmitAdrees)}>
          <label>CONFIRMAR PEDIDO</label>
        </ButtonConfirmShopping>
      </CoffeShoppingList>
    </Container>
  );
}
