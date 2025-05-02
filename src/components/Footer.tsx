import { Button, CopyButton, Text, Tooltip } from "@mantine/core";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconCopy,
    IconCheck,
} from "@tabler/icons-react";

export function Footer() {
    return (
        <footer className=" text-white p-4 mt-auto border-t-1 border-dashed border-gray-700">
            <div className="max-w-7xl mx-auto p-4 flex flex-row items-stretch flex-wrap">
                <div className="w-1/2 flex flex-col justify-between">
                    <Text>© 2025 David Cai</Text>
                    <Text>Built with Vite & Mantine UI</Text>
                    <Text>Hosted on Vercel</Text>
                </div>
                <div className="w-1/2 flex flex-col gap-4 ">
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
            </div>
        </footer>
    );
}
