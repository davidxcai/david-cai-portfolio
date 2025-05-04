import { Burger, Collapse, Portal } from "@mantine/core";
import { NavLink, useLocation } from "react-router-dom";
import { NavLinks } from "./";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";

// TODO:
// swipe to close

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Navbar() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [opened, { toggle }] = useDisclosure(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            <Portal>
                <nav className="w-full border-b-1 border-dashed border-gray-700 bg-black/50 backdrop-blur-sm p-4 fixed top-0 z-10">
                    <div className=" flex flex-row justify-between items-center max-w-7xl mx-auto">
                        <NavLink
                            to="/"
                            className="text-4xl nanum-text mt-1 hover:text-indigo-600"
                            onClick={isHomePage ? scrollToTop : undefined}
                        >
                            David Cai
                        </NavLink>
                        <div className="flex gap-4 items-center">
                            {isMobile ? (
                                <Burger
                                    opened={opened}
                                    onClick={toggle}
                                    aria-label="Toggle navigation"
                                />
                            ) : (
                                <NavLinks toggle={toggle} />
                            )}
                        </div>
                    </div>
                    <Collapse in={opened}>
                        <div className="flex flex-col gap-4 justify-center items-center py-8">
                            <NavLinks toggle={toggle} />
                        </div>
                    </Collapse>
                </nav>
            </Portal>
        </>
    );
}
