import Layout from "./layout";
import { Grommet } from "grommet";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from './errorBoundary';
import OrderProvider from "../contexts/orderContext";
import CartProvider from "../contexts/CartContext";
import { theme } from "./theme";


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <OrderProvider>
          <CartProvider>
            <Grommet theme={theme}>
              <Layout />
            </Grommet>
          </CartProvider>
        </OrderProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
