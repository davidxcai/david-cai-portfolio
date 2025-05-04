import { AppShell, Anchor, Burger } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Navlinks } from "./Navlinks";
import { NavLink, useLocation } from "react-router";
import { useSidebar } from "../context/SidebarContext";

interface HeaderProps {
    isOpen: boolean;
    toggle: () => void;
}

export function Header({ isOpen, toggle }: HeaderProps) {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isMobile = useMediaQuery("(max-width: 768px)");
    const sidebar = useSidebar();
    const closeSidebar = sidebar[1].close;
    const handleClick = () => {
        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        closeSidebar();
    };
    return (
        <AppShell.Header
            style={{
                borderBottom: "1px dashed #4b5563",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
            }}
        >
            <div className="flex flex-row justify-between items-center p-4 max-w-7xl mx-auto">
                <Anchor
                    underline="never"
                    c="white"
                    component={NavLink}
                    to="/"
                    onClick={handleClick}
                >
                    <p className="nanum-text text-4xl">David Cai</p>
                </Anchor>
                <Burger
                    opened={isOpen}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                {!isMobile && (
                    <div className="flex flex-row gap-8 font-bold">
                        <Navlinks />
                    </div>
                )}
            </div>
        </AppShell.Header>
    );
}
