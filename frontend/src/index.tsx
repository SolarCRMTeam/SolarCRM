import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import pl_PL from "antd/lib/locale-provider/pl_PL";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={pl_PL}>
      <BrowserRouter basename={baseUrl!}>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
