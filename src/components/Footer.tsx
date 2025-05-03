import { Button, CopyButton, Text, Tooltip } from "@mantine/core";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconCopy,
    IconCheck,
} from "@tabler/icons-react";

// TODO:
// style footer - improve visual heirarchy
// adjust spacing
// possibly add icons for links

export function Footer() {
    return (
        <footer className=" text-white p-4 mb-4 mt-auto border-t-1 border-dashed border-gray-700">
            <div className="max-w-7xl mx-auto flex flex-col text-center gap-4">
                <div className="flex flex-row justify-center flex-wrap">
                    <Button
                        leftSection={<IconBrandLinkedin size={16} />}
                        variant="transparent"
                        component="a"
                        href="https://www.linkedin.com/in/davidxiencai/"
                        target="_blank"
                    >
                        LinkedIn
                    </Button>
                    <Button
                        leftSection={<IconBrandGithub size={16} />}
                        variant="transparent"
                        component="a"
                        href="https://github.com/davidxcai"
                        target="_blank"
                    >
                        GitHub
                    </Button>
                    <CopyButton value="davidxcai@gmail.com">
                        {({ copied, copy }) => (
                            <Tooltip
                                label={copied ? "Copied!" : "Copy to clipboard"}
                                withArrow
                            >
                                <Button
                                    color={copied ? "teal" : "blue"}
                                    onClick={copy}
                                    leftSection={
                                        copied ? (
                                            <IconCheck size={16} />
                                        ) : (
                                            <IconCopy size={16} />
                                        )
                                    }
                                    variant="transparent"
                                >
                                    Email
                                </Button>
                            </Tooltip>
                        )}
                    </CopyButton>
                </div>

                <Text c="dimmed">
                    React · TypeScript · Mantine · Tailwind · Vite
                </Text>
                <Text>© 2025 David Cai</Text>
            </div>
        </footer>
    );
}
