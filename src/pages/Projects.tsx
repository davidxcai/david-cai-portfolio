import { Project } from "../components";
import { projects } from "../data/projects";

function projectsList() {
    return projects.map((project) => (
        <Project project={project} key={project.name} />
    ));
}

export function Projects() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {projectsList()}
        </div>
    );
}
