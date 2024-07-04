import React, { Suspense } from "react";
import "./index.css";
import Fallback from "./containers/ErrorBoundary/Fallback.jsx";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import history from "../src/routing/history.js";
import store from "../src/store/index.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../src/routing/routes.js";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();