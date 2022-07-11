import { UsersProvider } from "./users";
import { ProductsProvider } from "./products";
import { CartProvider } from "./Cart";

const Providers = ({ children }) => {
  return (
    <UsersProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </UsersProvider>
  );
};

export default Providers;
