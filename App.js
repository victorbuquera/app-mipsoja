import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Provider, useSelector } from "react-redux";
import store from "./commom/store"
import Router from "./routes/Router";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </Provider>
  );
}

