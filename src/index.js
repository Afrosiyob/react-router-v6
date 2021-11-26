import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AuthProvider } from "./provider/provider";

import reportWebVitals from "./reportWebVitals";

const AppLazy = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Suspense fallback={<div> loading... </div>}>
        <AppLazy />
      </Suspense>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
