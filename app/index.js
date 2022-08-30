import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import reducers from "./reducers";
import MainApp from "./modules/MainApp/App";
const dest = document.getElementById("app");
const root = createRoot(dest)

const preloadedState = {
    counter: 0,
    chat:  ["test1", "test2", "test4", "test5", "test6", "test7", "test8","test9","test10","test11"],
    render: "hud"
}

const store = configureStore({reducer: reducers, preloadedState});
root.render(
<Provider store={store}>
    <MainApp />
</Provider>
)