import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>,
  rootElement
);