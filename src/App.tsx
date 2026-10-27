import { useState } from "react";

import "tg-mini-app-uikit/style.css";
import '@telegram-apps/telegram-ui/dist/styles.css';
import {
    TKProvider,
    TKTelegramProvider,
    TKPage,
    TKButton,
    TKSheet,
    TKInput,
} from "tg-mini-app-uikit";

import { Input } from "@telegram-apps/telegram-ui";

export default function App() {
    const [modal, setModal] = useState(false);

    return (
        <TKTelegramProvider haptics>
            <TKProvider telegram style={{ height: "100dvh" }}>
                <TKPage>
                    <TKButton
                        onClick={() => {
                            setModal(true);
                        }}
                    >
                        Open modal
                    </TKButton>
                    <TKSheet open={modal} onClose={() => setModal(false)}>
                        <TKInput label="Test input" placeholder="placeholder" />
                        <Input
                        
                            header="Old test input"
                            placeholder="placeholder"
                        />
                    </TKSheet>
                </TKPage>
            </TKProvider>
        </TKTelegramProvider>
    );
}
