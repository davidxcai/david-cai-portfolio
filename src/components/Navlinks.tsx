import { NavLink } from "react-router";

const links = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/#projects" },
    { label: "About", link: "/about" },
    { label: "Resume", link: "/resume" },
];

export function NavLinks({ toggle }: { toggle?: () => void }) {
    return (
        <>
            {links.map((link) => (
                <NavLink
                    key={link.label}
                    to={link.link}
                    onClick={toggle}
                    className="text-white hover:text-indigo-600 font-semibold"
                >
                    {link.label}
                </NavLink>
            ))}
        </>
    );
}
