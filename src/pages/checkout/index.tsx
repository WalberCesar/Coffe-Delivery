import {
  CurrencyDollar,
  MapPin,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { CoffeCardShopSelected } from "../../components/CoffeCardShopSelected";
import { FormAddress } from "../../components/FormAddress";
import { ItemsIntro } from "../../components/IntroHome/style";
import { TotalPrice } from "../../components/TotalPrice";
import { CartContext } from "../../contexts/CartContext";
import { CartItem } from "../../contexts/types";
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
} from "./style";

export function Checkout() {
  const theme = useTheme();
  const {
    amountCoffeInCart,
    addToCart,
    setQuantityItensOnHeaderCart,
    setAmountCoffeInCart,
  } = useContext(CartContext);

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

  const [totalPrice, setTotalPrice] = useState<number[]>([]);
  function calculateTotalPPrice() {
    if (checkoutAmountCoffeInCart!?.length > 0) {
      const data = checkoutAmountCoffeInCart
        ?.filter((item) => item !== null)
        .map((item) => item.price! * item.quantity);

      console.log("data => ", data);
      setTotalPrice(data);
    } else {
      setTotalPrice([]);
    }
  }

  console.log("checkout => ", checkoutAmountCoffeInCart);

  function incrementPrice(coffeid: string) {
    // const filter = checkoutAmountCoffeInCart?.filter((item) => item.id === id);
    const incrementQuantity: any = checkoutAmountCoffeInCart?.map((item) => {
      if (item.id === coffeid) {
        return {
          id: item.id,
          description: item.description,
          flavor: item.flavor,
          logoImg: item.logoImg,
          price: item.price,
          type: item.type,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setCheckoutAmountCoffeInCart(incrementQuantity!);
  }

  function decrementPrice(coffeid: string) {
    // const filter = checkoutAmountCoffeInCart?.filter((item) => item.id === id);
    const incrementQuantity: any = checkoutAmountCoffeInCart?.map((item) => {
      if (item.id === coffeid) {
        return {
          id: item.id,
          description: item.description,
          flavor: item.flavor,
          logoImg: item.logoImg,
          price: item.price,
          type: item.type,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    setCheckoutAmountCoffeInCart(incrementQuantity!);
  }
  useEffect(() => {
    removeItensOnStorage();
    calculateTotalPPrice();
  }, [checkoutAmountCoffeInCart]);

  useEffect(() => {
    removeItensOnStorage();
    setQuantityItensOnHeaderCart(checkoutAmountCoffeInCart?.length!);
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
        <AdressInformation>
          <HeaderInformation>
            <MapPin color={theme["yellow-dark"]} size={22} />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </HeaderInformation>

          <FormAddress />
        </AdressInformation>

        <PayamentInformation>
          <HeaderPayament>
            <CurrencyDollar color={theme.purple} size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </HeaderPayament>

          <ContainerPayamentMethod>
            <button>
              <CreditCard color={theme.purple} size={16} />
              Cartão de crédito
            </button>
            <button>
              <Bank color={theme.purple} size={16} />
              Cartão de débito
            </button>
            <button>
              <Money color={theme.purple} size={16} />
              Dinheiro
            </button>
          </ContainerPayamentMethod>
        </PayamentInformation>
      </ContainerInformations>

      <CoffeShoppingList>
        {checkoutAmountCoffeInCart
          ?.filter((item) => item !== null)
          .map((item) => (
            <CoffeCardShopSelected
              item={item}
              handleDeleteCoffeInCart={handleDeleteCoffeInCart}
              incrementPrice={incrementPrice}
              decrementPrice={decrementPrice}
            />
          ))}

        <TotalPrice price={totalPrice} />
        <ButtonConfirmShopping>
          <label>CONFIRMAR PEDIDO</label>
        </ButtonConfirmShopping>
      </CoffeShoppingList>
    </Container>
  );
}
