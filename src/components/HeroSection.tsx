import { useMediaQuery } from "@mantine/hooks";
// import { ProfilePicture } from "../assets/ProfilePicture";
import { NavLink } from "react-router-dom";
import { AnimatedDrawing } from "../assets/AnimatedDrawing";
import { FadeInOnLoad } from "../helper/FadeInOnLoad";

export function HeroSection() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-7xl mx-auto mb-16 min-h-dvh">
            <div
                className={`h-full flex-grow aspect-[852/1077] ${
                    isMobile ? "mt-20" : ""
                }`}
            >
                <AnimatedDrawing />
            </div>

            {/* <ProfilePicture /> */}
            <div className="flex flex-col flex-wrap gap-12 w-full md:w-1/2">
                <FadeInOnLoad>
                    <div>
                        <h1 className="text-7xl sm:text-9xl font-bold nanum-text text-center md:text-left">
                            I'm David
                        </h1>
                        <h2 className="text-gray-400 text-3xl sm:text-5xl nanum-text text-center md:text-left">
                            A fullstack web developer & computer science student
                        </h2>
                    </div>
                </FadeInOnLoad>
                {isMobile && (
                    <NavLink
                        to="/resume"
                        className="bg-transparent border-1 border-white hover:border-indigo-500 hover:text-indigo-500 py-2 rounded-sm font-bold text-center"
                    >
                        Resume
                    </NavLink>
                )}
            </div>
        </div>
    );
}
{
    /* <Button variant="outline" color="white" component={NavLink} to="/resume">
    Resume
</Button>; */
}
