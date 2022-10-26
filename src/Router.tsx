import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/checkout";
import { Home } from "./pages/Home/Home";
import { Succes } from "./pages/succes";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/succes" element={<Succes />} />
      </Route>
    </Routes>
  );
}
