import { Project as ProjectType } from "../data/projects";

export function Project({ project }: { project: ProjectType }) {
    function technologies() {
        return project.technologies.map((technology) => (
            <span
                key={technology}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
                {technology}
            </span>
        ));
    }
    return (
        <div
            className="flex flex-col gap-4 max-w-xl flex-grow border-2 border-gray-400"
            onClick={() => window.open(project.url, "_blank")}
        >
            <img
                src={project.image}
                alt={project.name}
                className="aspect-3/2 rounded-lg"
            />
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <p className="text-gray-600 text-sm text-wrap">
                    {project.description}
                </p>
                <div className="flex flex-row gap-2">{technologies()}</div>
            </div>
        </div>
    );
}
