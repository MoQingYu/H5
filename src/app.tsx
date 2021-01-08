import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import AppRouter from "./router";
import store from "./store";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  root
);