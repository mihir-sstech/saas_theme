import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/main.scss";
import { driverDetails } from "./Api/api"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename={driverDetails.DRIVER_FRONT_URL}>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
