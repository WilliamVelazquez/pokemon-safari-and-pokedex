import React from "react";
import { render } from "react-dom";
import "babel-polyfill";

import App from "./routes/App";

const $AppContainer = document.getElementById("app");

render(<App />, $AppContainer);
