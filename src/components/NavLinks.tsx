import { NavLink, useLocation } from "react-router-dom";

const links = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/#projects" },
    { label: "About", link: "/about" },
    { label: "Resume", link: "/resume" },
];

// TODO:
// - add scroll to top on link click
// possibly remove scroll to top on path change

export function NavLinks({
    toggle,
    opened,
}: {
    toggle?: () => void;
    opened?: boolean;
}) {
    const { pathname } = useLocation();

    return (
        <>
            {links.map((link) => (
                <NavLink
                    key={link.label}
                    to={link.link}
                    onClick={opened ? toggle : undefined}
                    className={`font-semibold hover:text-indigo-500 uppercase ${
                        pathname === link.link
                            ? "text-indigo-500"
                            : "text-white"
                    }`}
                >
                    {link.label}
                </NavLink>
            ))}
        </>
    );
}
