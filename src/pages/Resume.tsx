import {
    Button,
    Text,
    Title,
    Divider,
    List,
    Stack,
    Group,
} from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { SocialLinks } from "../components";

// TODO:
// fix list item marker

export function Resume() {
    const heading = 2;
    const subheading = 3;
    const sectionSpacing = 8;
    const listIcon = "•";
    return (
        <Stack gap="xl">
            {/* Header */}
            <Stack gap={sectionSpacing}>
                <Title order={heading}>David Xien Cai</Title>
                <Group>
                    <SocialLinks />
                </Group>
            </Stack>

            {/* Summary */}
            <Stack gap={sectionSpacing}>
                <Title order={subheading}>Summary</Title>
                <Divider variant="dashed" />
                <Text>
                    Computer science student graduating in spring 2027 and
                    fullstack web developer with 2+ years of experience
                    designing, developing, and managing sites and internal
                    applications. Proficient in communications and team
                    management with leadership experience.
                </Text>
            </Stack>

            {/* Technical Skills */}
            <Stack gap={sectionSpacing}>
                <Title order={subheading}>Technical Skills</Title>
                <Divider variant="dashed" />
                <Text>
                    <span className="font-bold">Programming Languages:</span>{" "}
                    TypeScript, JavaScript, Node.js, ReactJS, SQL, NoSQL,
                    Python, C, C++
                </Text>
                <Text>
                    <span className="font-bold">Operating Systems:</span> macOS,
                    Windows
                </Text>
                <Text>
                    <span className="font-bold">Tools:</span> Tailwind, Sass,
                    Mantine UI, Redux, TanStack Query, Supabase, Vercel
                </Text>
            </Stack>

            {/* Projects */}
            <Stack gap={sectionSpacing}>
                <Title order={subheading}>Projects</Title>
                <Divider variant="dashed" />
                <Stack gap={4} mt={sectionSpacing}>
                    <Group justify="space-between">
                        <Text fw={700}>Mobi Admin Portal {"(Ongoing)"}</Text>
                        <Text fw={700}>ReactJS, Node.js, MongoDB</Text>
                    </Group>
                    <List icon={listIcon}>
                        <List.Item>
                            Improving analytics accuracy by 80% from designing
                            and developing internal admin application for
                            managing users and logging event attendance.
                        </List.Item>
                        <List.Item>
                            Responsible for database architecure, server
                            configuration, and optimizing API requests.
                        </List.Item>
                        <List.Item>
                            Implemented role-based authentication and increased
                            site security by 100%.
                        </List.Item>
                    </List>
                </Stack>
                <Stack gap={4} mt={sectionSpacing}>
                    <Group justify="space-between">
                        <Text fw={700}>Matcha {"(Ongoing)"}</Text>
                        <Text fw={700}>Vite, Supabase, TanStack Query</Text>
                    </Group>
                    <List icon={listIcon}>
                        <List.Item>
                            Integrated web sockets for instant nofication of
                            messages.
                        </List.Item>
                        <List.Item>
                            Built interactice messaging tracking system to
                            visualize delivery.
                        </List.Item>
                        <List.Item>
                            Implemented secure user authentication and
                            end-to-end encryption.
                        </List.Item>
                    </List>
                </Stack>
            </Stack>

            {/* Student Organization */}
            <Stack gap={sectionSpacing}>
                <Title order={subheading}>Student Organization</Title>
                <Divider variant="dashed" />
                <Text fw={700}>Treasurer of Web Development club</Text>
                <List icon={listIcon}>
                    <List.Item>
                        Manage and maintain organization funds, perform internal
                        finance audits, and filing annual taxes and earnings.
                    </List.Item>
                    <List.Item>
                        Organize and host workshops on web development
                        technologies.
                    </List.Item>
                    <List.Item>
                        Collaborate with adjacent organizations to host
                        fundraising events.
                    </List.Item>
                </List>
            </Stack>

            {/* Education */}
            <Stack gap={sectionSpacing}>
                <Title order={subheading}>Education</Title>
                <Divider variant="dashed" />
                <Stack gap={0}>
                    <Group justify="space-between">
                        <Text fw={700}>University of Texas at Arlington</Text>
                        <Text fw={700}>2024 - 2027</Text>
                    </Group>
                    <Text c="dimmed">
                        Computer Science B.S. / Honors College, 4.0 GPA
                    </Text>
                </Stack>
                <Stack gap={0} mt={sectionSpacing}>
                    <Group justify="space-between">
                        <Text fw={700}>University of California, Irvine</Text>
                        <Text fw={700}>2018 - 2019</Text>
                    </Group>
                    <Text c="dimmed">
                        Web Development Certificate / Agile and SCRUM training
                    </Text>
                </Stack>
            </Stack>

            <Group justify="center">
                <Button
                    leftSection={<IconDownload />}
                    component="a"
                    href="/david-cai-resume.pdf"
                    download
                >
                    Download
                </Button>
            </Group>
        </Stack>
    );
}
