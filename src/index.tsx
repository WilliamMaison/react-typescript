import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./ui/App";
import { initStore } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HttpAxiosPackageGateway } from "./adapters/package/HttpAxiosPackageGateway";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

const packageGateway = new HttpAxiosPackageGateway();

const store = initStore({ packageGateway });

console.log(JSON.stringify(process.env));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
