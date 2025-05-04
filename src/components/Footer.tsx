import { Text, Group } from "@mantine/core";
import { SocialLinks } from "./SocialLinks";

// TODO:
// style footer - improve visual heirarchy
// adjust spacing
// possibly add icons for links

export function Footer() {
    return (
        <footer className=" text-white p-8 mt-auto border-t-1 border-dashed border-gray-700">
            <div className="max-w-7xl mx-auto flex flex-col text-center gap-4">
                <Group justify="center">
                    <SocialLinks />
                </Group>
                <Text c="dimmed">
                    React · TypeScript · Mantine · Tailwind · Vite
                </Text>
                <Text c="dimmed">© 2025 David Cai</Text>
            </div>
        </footer>
    );
}
