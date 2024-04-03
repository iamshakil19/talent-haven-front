import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/sonner"
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex justify-center items-center flex-auto flex-col h-[100vh] bg-primary">
          <p className="text-primary-foreground">Loading...</p>
        </div>
      }
    >
      <App />
      <Toaster richColors position="top-center" />
    </Suspense>
  </React.StrictMode>
);
