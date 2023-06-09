//Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./utils/globalStyle";
import store from "./utils/store";
import { Provider } from "react-redux";
import App from "./components/App";

//Render
ReactDOM.createRoot(document.getElementById("root")!).render(
    <Router>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </Router>
);
