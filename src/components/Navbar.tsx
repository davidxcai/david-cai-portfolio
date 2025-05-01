import { AppShell } from "@mantine/core";
import { Navlinks } from "./Navlinks";

export function Navbar() {
    return (
        <AppShell.Navbar
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
            }}
            className="p-6 flex flex-col gap-6 font-bold"
        >
            <Navlinks />
        </AppShell.Navbar>
    );
}
