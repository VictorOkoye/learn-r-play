/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux/es/exports";
import store from "./redux/store.ts";
import { Bugfender } from "@bugfender/sdk";

// never mind the errors
Bugfender.init({
  appKey: import.meta.env.VITE_BUGFENDER_API_KEY,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
