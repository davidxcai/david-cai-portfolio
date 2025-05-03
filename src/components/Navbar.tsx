import { AppShell } from "@mantine/core";
import { Navlinks } from "./Navlinks";

// TODO:
// swipe to close
// prevent users from scrolling while navbar is open in mobile
// close navbar after clicking a link

export function Navbar() {
    return (
        <AppShell.Navbar
            withBorder={false}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
            }}
            className="p-6 flex flex-col gap-6 font-bold items-center"
        >
            <Navlinks />
        </AppShell.Navbar>
    );
}
