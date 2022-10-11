import { useCart } from "../../contexts/useCart";

import { CoffeCard } from "../CoffeCard";
import { CoffeListContent, Container } from "./styles";

export function CoffeListHome() {
  const { coffeInformations } = useCart();

  return (
    <Container>
      <h1>Nossos Cafés</h1>
      <CoffeListContent>
        {coffeInformations.map((item) => {
          return (
            <CoffeCard
              key={item.id}
              informations={item}
              coffeInformations={coffeInformations}
            />
          );
        })}
      </CoffeListContent>
    </Container>
  );
}
