import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { AppRoot } from "@telegram-apps/telegram-ui";

createRoot(document.getElementById("root")!).render(
    <AppRoot >
        <StrictMode>
            <App />
        </StrictMode>
    </AppRoot>,
);
