import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function Applayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div
      className="grid-rows- [auto_1fr_auto] grid
      h-screen
    "
    >
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <h1>Content</h1>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default Applayout;
