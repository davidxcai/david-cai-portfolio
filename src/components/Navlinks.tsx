import { NavLink } from "react-router";

export function Navlinks() {
    return (
        <>
            <NavLink to="/projects" className="p-2">
                Projects
            </NavLink>
            <NavLink to="/about" className="p-2">
                About
            </NavLink>
            <NavLink to="/resume" className="p-2">
                Resume
            </NavLink>
        </>
    );
}
