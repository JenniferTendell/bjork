import Layout from "./layout";
import { Grommet } from "grommet";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from './errorBoundary';


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Grommet>
          <Layout />
        </Grommet>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
