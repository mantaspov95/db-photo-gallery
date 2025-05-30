import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@assets/styles/variables.css";
import "@assets/styles/global.css";

import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a new QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
