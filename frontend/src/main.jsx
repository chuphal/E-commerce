import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import myntraStore from "./store/index.js";
import { FirebaseProvider } from "./context/Firebase.jsx";
import { MyStateProvider } from "./context/myState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <MyStateProvider>
        <Provider store={myntraStore}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </MyStateProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
