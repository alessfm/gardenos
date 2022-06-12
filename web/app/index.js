import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';

import Rotas from "./routes.js";

ReactDOM.render(
  <HashRouter>
    <Rotas />
  </HashRouter>
  , document.getElementById("root"));
