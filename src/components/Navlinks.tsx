import { NavLink } from "react-router";
import { Anchor } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useSidebar } from "../context/SidebarContext";

const links = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/#projects" },
    { label: "About", link: "/about" },
    { label: "Resume", link: "/resume" },
];

interface NavItemProps {
    label: string;
    link: string;
    onClick: () => void;
}

function NavItem({ label, link, onClick }: NavItemProps) {
    const { hovered, ref } = useHover();
    return (
        <Anchor
            variant={hovered ? "gradient" : "text"}
            gradient={hovered ? { from: "indigo", to: "blue" } : undefined}
            c="white"
            component={NavLink}
            onClick={onClick}
            to={link}
            className="p-2"
            underline="never"
            fw={700}
            ref={ref}
        >
            {label}
        </Anchor>
    );
}

export function Navlinks() {
    const sidebar = useSidebar();
    const closeSidebar = sidebar[1].close;
    return (
        <>
            {links.map((link) => (
                <NavItem
                    key={link.label}
                    label={link.label}
                    link={link.link}
                    onClick={closeSidebar}
                />
            ))}
        </>
    );
}
