import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { router } from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
