import { Timeline, Text } from "@mantine/core";
// Deep imports, not the "@tabler/icons-react" barrel: the barrel re-exports ~5900
// icon modules, which Vite serves as ~5900 separate dev requests on first load.
import IconCode from "@tabler/icons-react/dist/esm/icons/IconCode.mjs";
import IconPlane from "@tabler/icons-react/dist/esm/icons/IconPlane.mjs";
import IconBackpack from "@tabler/icons-react/dist/esm/icons/IconBackpack.mjs";
import IconSchool from "@tabler/icons-react/dist/esm/icons/IconSchool.mjs";
import IconBrandLinkedin from "@tabler/icons-react/dist/esm/icons/IconBrandLinkedin.mjs";

// TODO:
// add a general about section with a short bio and fun facts + pictures
// add a FAQ section
const currentYear = new Date().getFullYear();
const iconSize = 20;
const data = [
    {
        title: "Coding Bootcamp",
        icon: <IconCode size={iconSize} />,
        desc: "Out of curiosity, I signed up for a coding bootcamp at UC Irvine and started learning web development and I discovered my love for coding.",
        time: `${currentYear - 2019} years ago`,
    },
    {
        title: "Moved to Dallas, TX",
        icon: <IconPlane size={iconSize} />,
        desc: "After a lot of consideration, I decided to pursue a Bachelor's degree in computer science to learn more about software and programming.",
        time: `${currentYear - 2020} years ago`,
    },
    {
        title: "Started College",
        icon: <IconBackpack size={iconSize} />,
        desc: "Initially I started taking online classes and working full-time to support myself. The balance was good but I wanted to finish school faster.",
        time: `${currentYear - 2021} years ago`,
    },
    {
        title: "Transfered to UTA",
        icon: <IconSchool size={iconSize} />,
        desc: "Since 2024, I've transferred to the University of Texas at Arlington and became a full-time student. I'm pushing myself to learn more about software engineering and AI.",
        time: "Today",
    },
    {
        title: "Graduation & Job Search",
        icon: <IconBrandLinkedin size={iconSize} />,
        desc: "I'll be graduating in Spring of 2027. Hopefully if you're a recruiter and reading this, I want you to know that I'll be applying to your company and hopefully become a future software engineer for you.",
        time: "Estimated 2027",
    },
];

export function About() {
    return (
        <>
            <h1 className="nanum-text text-5xl text-center mb-4 mt-20">
                Dev Log
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
                            <Text
                                size="xs"
                                mt={4}
                                fw={700}
                                c={index === 4 ? "indigo" : "dimmed"}
                            >
                                {item.time}
                            </Text>
                        </Timeline.Item>
                    );
                })}
            </Timeline>
        </>
    );
}
