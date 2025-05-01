import { Project } from "../components/Project";
import { Button, Flex, SimpleGrid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ProfilePicture } from "../assets/ProfilePicture";
import { projects } from "../data/projects";

export function Homepage() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    function projectsList() {
        return projects.map((project) => (
            <Project project={project} key={project.name} />
        ));
    }
    return (
        <div className="min-h-full flex flex-col">
            <Flex
                justify="center"
                align="center"
                gap="lg"
                wrap={{ base: "wrap", sm: "nowrap" }}
                className="mb-16 md:mb-24"
            >
                <ProfilePicture />
                <div className="flex flex-col flex-wrap gap-4 w-full sm:w-1/2">
                    <h1 className="text-7xl font-bold nanum-text">I'm David</h1>
                    <p className="text-gray-400 text-2xl nanum-text">
                        A hobbyist web developer & computer science student
                    </p>
                    {isMobile && (
                        <Button variant="outline" color="white">
                            Resume
                        </Button>
                    )}
                </div>
            </Flex>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {projectsList()}
            </div>
            {/* <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                {projectsList()}
            </SimpleGrid> */}
        </div>
    );
}
// className="text-white flex flex-row justify-between items-center gap-8 mb-32 flex-wrap"
// className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
