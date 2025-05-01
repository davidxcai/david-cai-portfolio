import { Project } from "../components/Project";
import pictureOfMe from "../assets/david-cai.jpg";
import { Image } from "@mantine/core";

import { projects } from "../data/projects";

export function Homepage() {
    function projectsList() {
        return projects.map((project) => (
            <Project project={project} key={project.name} />
        ));
    }
    return (
        <div className="min-h-full flex flex-col">
            <div className="text-white p-4 flex flex-row justify-between items-center gap-8 flex-wrap">
                <Image
                    src={pictureOfMe}
                    alt="Picture of David Cai"
                    fit="contain"
                    w="100%"
                    h="10em"
                    radius="md"
                />
                <div>
                    <h1 className="text-7xl font-bold">I'm David</h1>
                    <div className="text-gray-400 text-2xl flex flex-row gap-4">
                        <p>
                            A hobbyist web developer & computer science student
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {projectsList()}
            </div>
        </div>
    );
}
