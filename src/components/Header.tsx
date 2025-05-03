import { AppShell, Burger } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Navlinks } from "./Navlinks";

interface HeaderProps {
    isOpen: boolean;
    toggle: () => void;
}

// TODO:
// name in header should be a link to homepage / scroll to top

export function Header({ isOpen, toggle }: HeaderProps) {
    const isMobile = useMediaQuery("(max-width: 768px)");
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
                <h1 className="nanum-text text-4xl">David Cai</h1>
                <Burger
                    opened={isOpen}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                {!isMobile && (
                    <div className="flex flex-row gap-4 font-bold">
                        <Navlinks />
                    </div>
                )}
            </div>
        </AppShell.Header>
    );
}
