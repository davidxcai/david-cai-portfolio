import { Button, Text, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconCopy,
} from "@tabler/icons-react";

export function Footer() {
    const clipboard = useClipboard({ timeout: 500 });
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
                        leftSection={<IconBrandLinkedin size={14} />}
                        variant="transparent"
                    >
                        LinkedIn
                    </Button>
                    <Button
                        leftSection={<IconBrandGithub size={14} />}
                        variant="transparent"
                    >
                        GitHub
                    </Button>
                    <Tooltip
                        label={
                            clipboard.copied ? "Copied" : "Copy to clipboard"
                        }
                    >
                        <Button
                            color={clipboard.copied ? "teal" : "blue"}
                            onClick={() =>
                                clipboard.copy("davidxcai@gmail.com")
                            }
                            leftSection={<IconCopy size={14} />}
                            variant="transparent"
                        >
                            Email
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </footer>
    );
}
