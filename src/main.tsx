import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "@/components/ui/sonner";
import Loading from "./components/shared/Loading";
import { TooltipProvider } from "./components/ui/tooltip";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">
          <Loading loading={true} />
        </div>
      }
    >
      <TooltipProvider delayDuration={100}>
        {/* <SocketClient /> */}
        
        <App />
        <Toaster richColors position="top-center" />
      </TooltipProvider>
    </Suspense>
  </React.StrictMode>
);
