import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterProvider from "@/containers/providers/routerProvider/RouterProvider";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "@/styles/muiTheme";
import store from "@/redux/store";
import "./index.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="light"
        />
        <RouterProvider />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
