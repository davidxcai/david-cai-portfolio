import { Project } from "../components/Project";
import { Button, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ProfilePicture } from "../assets/ProfilePicture";
import { projects } from "../data/projects";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

// TODO:
// create seperate projects component
// projects will be loaded as links in project list section
// - on project click, project list will unmount and will redirect to /project/:projectname
// - on back click, project list will mount and redirect to /projects
// fix animejs animation for svg
// fix name header to be full width on mobile

export function Homepage() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const projectsRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    function projectsList() {
        return projects.map((project) => (
            <Project project={project} key={project.name} />
        ));
    }
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
        <div className="min-h-full flex flex-col">
            <Flex
                justify="center"
                align="center"
                gap="lg"
                wrap={{ base: "wrap", sm: "nowrap" }}
                className="mb-16 md:mb-24"
            >
                <ProfilePicture />
                <div className="flex flex-col flex-wrap gap-4 w-full md:w-1/2">
                    <h1 className="text-7xl sm:text-9xl font-bold nanum-text text-center md:text-left">
                        I'm David
                    </h1>
                    <p className="text-gray-400 text-3xl sm:text-5xl nanum-text text-center md:text-left">
                        A hobbyist web developer & computer science student
                    </p>
                    {isMobile && (
                        <Button
                            variant="outline"
                            color="white"
                            component={NavLink}
                            to="/resume"
                        >
                            Resume
                        </Button>
                    )}
                </div>
            </Flex>
            <div
                ref={projectsRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 mb-16"
            >
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
