import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterProvider from "@/containers/providers/routerProvider/RouterProvider";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "@/styles/muiTheme";
import store from "@/redux/store";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
      <ThemeProvider theme={muiTheme}>
        <RouterProvider />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
