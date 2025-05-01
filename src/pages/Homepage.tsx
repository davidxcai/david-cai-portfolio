import { Project } from "../components/Project";

import { projects } from "../data/projects";

export function Homepage() {
    function projectsList() {
        return projects.map((project) => (
            <Project project={project} key={project.name} />
        ));
    }
    return (
        <div className="min-h-full flex flex-col">
            <div className="text-white p-4 flex flex-col justify-between items-center gap-8">
                <img
                    src=""
                    alt="Picture of David Cai"
                    className=" flex-grow aspect-3/2"
                />
                <h1 className="text-7xl font-bold">I'm David</h1>
                <div className="text-gray-400 text-2xl flex flex-row gap-4">
                    <p>A hobbyist web developer & computer science student</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-8">{projectsList()}</div>
        </div>
    );
}
