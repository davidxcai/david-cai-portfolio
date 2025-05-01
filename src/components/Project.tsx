import { Project as ProjectType } from "../data/projects";
import { Badge, Text } from "@mantine/core";

export function Project({ project }: { project: ProjectType }) {
    function technologies() {
        return project.technologies.map((technology) => (
            <Badge key={technology} variant="light">
                {technology}
            </Badge>
        ));
    }
    return (
        <div
            className="flex flex-col max-w-xl flex-grow cursor-pointer"
            style={{ height: "100%" }}
            onClick={() => window.open(project.url, "_blank")}
        >
            <img
                src={project.image}
                alt={project.name}
                className="aspect-[3/2] w-full object-cover rounded-lg"
            />
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold mt-2">{project.name}</h2>
                <Text c="dimmed" size="sm" className="text-wrap">
                    {project.description}
                </Text>
                <div className="flex flex-row gap-2 mt-2">{technologies()}</div>
            </div>
        </div>
    );
}
