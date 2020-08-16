import React from "react";
import { render } from "react-dom";
import { rootReducer } from "./redux/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";
import App from "./App";
import { sagaWatcher } from "./redux/sagas";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

const saga = createSagaMiddleWare();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(sagaWatcher);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
