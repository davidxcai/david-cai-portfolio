import { Project } from "../components";
import { projects } from "../data/projects";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

function projectsList() {
    return projects.map((project) => (
        <Project project={project} key={project.name} />
    ));
}

export function Projects() {
    const projectsRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const viewingProject = false;

    // Scroll to projects section if the URL hash is #projects
    useEffect(() => {
        if (location.hash === "#projects" && projectsRef.current) {
            const offset = -90; // adjust this value as needed (e.g., navbar height + padding)
            const top =
                projectsRef.current.getBoundingClientRect().top +
                window.scrollY +
                offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }, [location]);

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            ref={projectsRef}
        >
            {viewingProject ? <div>Detailed Project</div> : projectsList()}
        </div>
    );
}
