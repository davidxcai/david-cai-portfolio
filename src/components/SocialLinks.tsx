import { Button, Tooltip, CopyButton } from "@mantine/core";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconCopy,
    IconCheck,
} from "@tabler/icons-react";

export function SocialLinks() {
    return (
        <>
            <Button
                leftSection={<IconBrandLinkedin size={16} />}
                variant="transparent"
                component="a"
                href="https://www.linkedin.com/in/davidxiencai/"
                target="_blank"
                p={0}
                size="compact-md"
                color="white"
            >
                LinkedIn
            </Button>
            <Button
                leftSection={<IconBrandGithub size={16} />}
                variant="transparent"
                component="a"
                href="https://github.com/davidxcai"
                target="_blank"
                p={0}
                size="compact-md"
                color="white"
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
                            color={copied ? "teal" : "white"}
                            onClick={copy}
                            leftSection={
                                copied ? (
                                    <IconCheck size={16} />
                                ) : (
                                    <IconCopy size={16} />
                                )
                            }
                            variant="transparent"
                            p={0}
                            size="compact-md"
                        >
                            Email
                        </Button>
                    </Tooltip>
                )}
            </CopyButton>
        </>
    );
}
