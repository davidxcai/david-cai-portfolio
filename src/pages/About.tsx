import { Timeline, Text } from "@mantine/core";
import {
    IconCode,
    IconPlane,
    IconBackpack,
    IconSchool,
    IconBrandLinkedin,
} from "@tabler/icons-react";

const iconSize = 24;
const data = [
    {
        title: "2019 - Coding Bootcamp",
        icon: <IconCode size={iconSize} />,
        desc: "Out of curiosity, I signed up for a coding bootcamp at UC Irvine and started learning web development. This is where my passion began!",
    },
    {
        title: "2020 - Moved to Dallas, TX",
        icon: <IconPlane size={iconSize} />,
        desc: "After a lot of consideration, I decided to pursue a Bachelor's degree in computer science and learn more about software and programming.",
    },
    {
        title: "2021 - Start College",
        icon: <IconBackpack size={iconSize} />,
        desc: "Initially I started taking online classes and working full-time to support myself. The balance was good but I wanted to finish school faster.",
    },
    {
        title: "2024 - Transfered to UTA",
        icon: <IconSchool size={iconSize} />,
        desc: "Since 2024, I've transferred to the University of Texas at Arlington and became a full-time student. I'm pushing myself to learn more about software engineering and AI.",
    },
    {
        title: "2027 - Fingers crossed",
        icon: <IconBrandLinkedin size={iconSize} />,
        desc: "I'll be graduating in Spring of 2027. Hopefully if you're a recruiter and reading this, I want you to know that I'll be applying to your company and hopefully become a future software engineer for you.",
    },
];

export function About() {
    return (
        <>
            <h1 className="nanum-text text-5xl text-center mb-4">
                The journey so far
            </h1>
            <Timeline active={3} bulletSize={32} lineWidth={1} color="indigo">
                {data.map((item, index) => {
                    return (
                        <Timeline.Item
                            key={item.title}
                            title={item.title}
                            bullet={item.icon}
                            lineVariant="dashed"
                        >
                            <Text c="dimmed">{item.desc}</Text>
                            {index === 4 && (
                                <Text size="xs" mt={4} fw={700}>
                                    END GOAL
                                </Text>
                            )}
                        </Timeline.Item>
                    );
                })}
            </Timeline>
        </>
    );
}
