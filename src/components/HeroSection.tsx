import { Button, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ProfilePicture } from "../assets/ProfilePicture";
import { NavLink } from "react-router-dom";

export function HeroSection() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
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
                    A fullstack web developer & computer science student
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
    );
}
