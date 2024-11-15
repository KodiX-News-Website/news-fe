import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterProvider from "@/containers/providers/routerProvider/RouterProvider";
import { Provider } from "react-redux";
import store from "@/redux/store";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider />
    </Provider>
  </StrictMode>
);
