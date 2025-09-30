import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./views/App";
import homeReducer from "../src/containers/Home/store/homeSlice";
import "./index.css";

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
