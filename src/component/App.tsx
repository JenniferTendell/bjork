import Layout from "./layout";
import { Grommet } from "grommet";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Grommet>
        <Layout />
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
