import { HeroSection } from "../components";
import { Projects } from "./";

// TODO:
// create seperate projects component
// projects will be loaded as links in project list section
// - on project click, project list will unmount and will redirect to /project/:projectname
// - on back click, project list will mount and redirect to /projects
// fix animejs animation for svg
// fix name header to be full width on mobile

export function Homepage() {
    return (
        <div className="min-h-full flex flex-col">
            <HeroSection />
            <Projects />
        </div>
    );
}
// className="text-white flex flex-row justify-between items-center gap-8 mb-32 flex-wrap"
// className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
