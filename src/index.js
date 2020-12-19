import React, { Fragment } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import App from "./App";
import SortInfo from "./shared/SortInfo";
import data from "./shared/data";
import "./styles.css";

const initialState = {
  app: {
    developersList: data
  }
};

const store = configureStore(initialState);

const renderApp = () => (
  <Provider store={store}>
    <Fragment>
      <App />
      <hr color="#e9e9e9" />
      <SortInfo />
    </Fragment>
  </Provider>
);
const root = document.getElementById("app");
render(renderApp(), root);
