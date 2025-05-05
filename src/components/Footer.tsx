import { Group } from "@mantine/core";
import { SocialLinks } from "./SocialLinks";

// TODO:
// style footer - improve visual heirarchy
// adjust spacing
// possibly add icons for links

export function Footer() {
    return (
        <footer className=" text-white py-8 px-4 mt-auto border-t-1 border-dashed border-gray-700">
            <div className="max-w-7xl mx-auto flex flex-col text-center gap-4">
                <Group justify="center">
                    <SocialLinks />
                </Group>
                <p className="text-gray-300">
                    React · TypeScript · Mantine · Tailwind · Vite
                </p>
                <p className="text-gray-300">© 2025 David Cai</p>
            </div>
        </footer>
    );
}
