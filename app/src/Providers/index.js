import { UsersProvider } from "./users";
import { ProductsProvider } from "./products";

const Providers = ({ children }) => {
  return (
    <UsersProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </UsersProvider>
  );
};

export default Providers;
