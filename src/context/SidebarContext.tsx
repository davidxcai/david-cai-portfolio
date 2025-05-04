import { useDisclosure } from "@mantine/hooks";

import { createContext, useContext, useEffect } from "react";

type SidebarContextType = ReturnType<typeof useDisclosure>;

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [opened, handlers] = useDisclosure();

    useEffect(() => {
        document.body.style.overflow = opened ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [opened]);

    return (
        <SidebarContext.Provider value={[opened, handlers]}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}
