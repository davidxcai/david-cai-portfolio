import { NavLink } from "react-router";
import { Anchor } from "@mantine/core";
import { useHover } from "@mantine/hooks";

const links = [
    { label: "Projects", link: "/projects" },
    { label: "About", link: "/about" },
    { label: "Resume", link: "/resume" },
];

function NavItem({ label, link }: { label: string; link: string }) {
    const { hovered, ref } = useHover();
    return (
        <Anchor
            variant={hovered ? "gradient" : "text"}
            gradient={hovered ? { from: "indigo", to: "blue" } : undefined}
            c="white"
            component={NavLink}
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
    return (
        <>
            {links.map((link) => (
                <NavItem key={link.label} label={link.label} link={link.link} />
            ))}
        </>
    );
}
