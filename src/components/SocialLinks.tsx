import { Button, Tooltip, CopyButton } from "@mantine/core";
// Deep imports, not the "@tabler/icons-react" barrel: the barrel re-exports ~5900
// icon modules, which Vite serves as ~5900 separate dev requests on first load.
import IconBrandGithub from "@tabler/icons-react/dist/esm/icons/IconBrandGithub.mjs";
import IconBrandLinkedin from "@tabler/icons-react/dist/esm/icons/IconBrandLinkedin.mjs";
import IconCopy from "@tabler/icons-react/dist/esm/icons/IconCopy.mjs";
import IconCheck from "@tabler/icons-react/dist/esm/icons/IconCheck.mjs";

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
