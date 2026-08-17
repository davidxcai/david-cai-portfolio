import { Button } from "@mantine/core";
// Deep import, not the "@tabler/icons-react" barrel: the barrel re-exports ~5900
// icon modules, which Vite serves as ~5900 separate dev requests on first load.
import IconDownload from "@tabler/icons-react/dist/esm/icons/IconDownload.mjs";
import { SocialLinks } from "../components";
import { resume } from "../data/resume";
import type { InlineNode } from "../helper/parseResume";

// TODO:
// fix list item marker
// change certain groups to flex for dynamic positioning

const divider = <div className="border-t-1 border-dashed border-gray-700" />;

const styles = {
    container: "flex flex-col gap-8 mt-20",
    section: "flex flex-col gap-4",
    subsection: "flex flex-col gap-1",
    heading: "font-semibold text-2xl",
    subheading: "font-bold",
    divider: "dashed",
    list: "list-disc pl-8",
    dimmed: "text-gray-400",
    between: "flex flex-wrap justify-between",
};

function Rich({ nodes }: { nodes: InlineNode[] }) {
    return (
        <>
            {nodes.map((node, index) => (
                <RichNode key={index} node={node} />
            ))}
        </>
    );
}

function RichNode({ node }: { node: InlineNode }) {
    switch (node.type) {
        case "text":
            return <>{node.value}</>;
        case "bold":
            return (
                <strong className={styles.subheading}>
                    <Rich nodes={node.children} />
                </strong>
            );
        case "italic":
            return (
                <em>
                    <Rich nodes={node.children} />
                </em>
            );
        case "underline":
            return (
                <span className="underline">
                    <Rich nodes={node.children} />
                </span>
            );
        case "link":
            return (
                <a
                    href={node.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-500 hover:underline"
                >
                    <Rich nodes={node.children} />
                </a>
            );
        case "br":
            return <br />;
    }
}

export function Resume() {
    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.section}>
                <h1 className="font-bold text-3xl">{resume.name}</h1>
                <p className="text-teal-500">
                    {" "}
                    <span className="font-bold">Status:</span> Working as
                    software engineer intern
                </p>
                <div className="flex gap-4">
                    <SocialLinks />
                </div>
            </div>

            {/* Every section below is rendered from public/resume.tex */}
            {resume.sections.map((section) => (
                <div key={section.title} className={styles.section}>
                    <h2 className={styles.heading}>{section.title}</h2>
                    {divider}

                    {section.lines.map((line, index) => (
                        <p key={index}>
                            <Rich nodes={line} />
                        </p>
                    ))}

                    {section.entries.map((entry, index) => (
                        <div key={index} className={styles.subsection}>
                            <div className={styles.between}>
                                <p
                                    className={
                                        entry.kind === "subheading"
                                            ? styles.subheading
                                            : undefined
                                    }
                                >
                                    <Rich nodes={entry.topLeft} />
                                </p>
                                <p className={styles.dimmed}>
                                    <Rich nodes={entry.topRight} />
                                </p>
                            </div>

                            {(entry.bottomLeft.length > 0 ||
                                entry.bottomRight.length > 0) && (
                                <div className={styles.between}>
                                    <p className={styles.dimmed}>
                                        <Rich nodes={entry.bottomLeft} />
                                    </p>
                                    <p className={styles.dimmed}>
                                        <Rich nodes={entry.bottomRight} />
                                    </p>
                                </div>
                            )}

                            {entry.items.length > 0 && (
                                <ul className={styles.list}>
                                    {entry.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Rich nodes={item} />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            ))}

            <div className="flex justify-center my-4">
                <Button
                    leftSection={<IconDownload />}
                    component="a"
                    href="/david-cai-resume.pdf"
                    color="indigo"
                    download
                >
                    Download
                </Button>
            </div>
        </div>
    );
}
