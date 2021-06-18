import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import ContextProvider from "./context/mode-context";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        if (error.status === 404) return false;
        else if (failureCount < 2) return true;
        else return false;
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
