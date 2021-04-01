import Layout from './layout';
import { Grommet } from 'grommet';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './errorBoundary';
import OrderProvider from '../contexts/orderContext';
import CartProvider from '../contexts/CartContext';
import { theme } from './theme';
import AssortmentProvider from '../contexts/assortmentContext';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AssortmentProvider>
          <OrderProvider>
            <CartProvider>
              <Grommet theme={theme}>
                <Layout />
              </Grommet>
            </CartProvider>
          </OrderProvider>
        </AssortmentProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
