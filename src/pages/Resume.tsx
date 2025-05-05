import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { SocialLinks } from "../components";

// TODO:
// fix list item marker
// change certain groups to flex for dynamic positioning

const divider = <div className="border-t-1 border-dashed border-gray-700" />;

const styles = {
    container: "flex flex-col gap-8",
    section: "flex flex-col gap-4",
    subsection: "flex flex-col gap-1",
    heading: "font-semibold text-2xl",
    subheading: "font-bold",
    divider: "dashed",
    list: "list-disc pl-8",
    dimmed: "text-gray-400",
    between: "flex flex-wrap justify-between",
};

export function Resume() {
    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.section}>
                <h1 className="font-bold text-3xl">David Xien Cai</h1>
                <p className="text-teal-500">
                    {" "}
                    <span className="font-bold">Status:</span> Looking for
                    internship
                </p>
                <div className="flex gap-4">
                    <SocialLinks />
                </div>
            </div>

            {/* Summary */}
            <div className={styles.section}>
                <h2 className={styles.heading}>Summary</h2>
                {divider}
                <p>
                    Computer science student graduating in spring 2027 and
                    fullstack web developer with 2+ years of experience
                    designing, developing, and managing sites and internal
                    applications. Proficient in communications and team
                    management with leadership experience.
                </p>
            </div>

            {/* Technical Skills */}
            <div className={styles.section}>
                <h2 className={styles.heading}>Technical Skills</h2>
                {divider}
                <p>
                    <span className={styles.subheading}>
                        Programming Languages:{" "}
                    </span>
                    TypeScript, JavaScript, Node.js, ReactJS, SQL, NoSQL,
                    Python, C, C++
                </p>
                <p>
                    <span className={styles.subheading}>
                        Operating Systems:{" "}
                    </span>
                    macOS, Windows
                </p>
                <p>
                    <span className={styles.subheading}>Tools: </span>Tailwind,
                    Sass, Mantine UI, Redux, TanStack Query, Supabase, Vercel
                </p>
            </div>

            {/* Projects */}
            <div className={styles.section}>
                <h2 className={styles.heading}>Projects</h2>
                {divider}
                <div className={styles.section}>
                    <div className={styles.between}>
                        <h2 className={styles.subheading}>
                            Mobi Admin Portal {"(Ongoing)"}
                        </h2>
                        <h2 className={styles.subheading}>
                            ReactJS, Node.js, MongoDB
                        </h2>
                    </div>
                    <ul className={styles.list}>
                        <li>
                            {" "}
                            Improving analytics accuracy by 80% from designing
                            and developing internal admin application for
                            managing users and logging event attendance.
                        </li>
                        <li>
                            {" "}
                            Responsible for database architecure, server
                            configuration, and optimizing API requests.
                        </li>
                        <li>
                            {" "}
                            Implemented role-based authentication and increased
                            site security by 100%.
                        </li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <div className={styles.between}>
                        <h2 className={styles.subheading}>
                            Matcha {"(Ongoing)"}
                        </h2>
                        <h2 className={styles.subheading}>
                            Vite, Supabase, TanStack Query
                        </h2>
                    </div>
                    <ul className={styles.list}>
                        <li>
                            {" "}
                            Integrated web sockets for instant nofication of
                            messages.
                        </li>
                        <li>
                            {" "}
                            Built interactice messaging tracking system to
                            visualize delivery.
                        </li>
                        <li>
                            {" "}
                            Implemented secure user authentication and
                            end-to-end encryption.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Student Organization */}
            <div className={styles.section}>
                <h2 className={styles.heading}>Student Organization</h2>
                {divider}
                <h2 className={styles.subheading}>
                    Treasurer of Web Development club
                </h2>
                <ul className={styles.list}>
                    <li>
                        Manage and maintain organization funds, perform internal
                        finance audits, and filing annual taxes and earnings.
                    </li>
                    <li>
                        Organize and host workshops on web development
                        technologies.
                    </li>
                    <li>
                        Collaborate with adjacent organizations to host
                        fundraising events.
                    </li>
                </ul>
            </div>

            {/* Education */}
            <div className={styles.section}>
                <h2 className={styles.heading}>Education</h2>
                {divider}
                <div className={styles.subsection}>
                    <div className={styles.between}>
                        <p>University of Texas at Arlington</p>
                        <p>2024 - 2027</p>
                    </div>
                    <p className={styles.dimmed}>
                        Computer Science B.S. / Honors College, 4.0 GPA
                    </p>
                </div>
                <div className={styles.subsection}>
                    <div className={styles.between}>
                        <p>University of California, Irvine</p>
                        <p>2018 - 2019</p>
                    </div>
                    <p className={styles.dimmed}>
                        Web Development Certificate / Agile and SCRUM training
                    </p>
                </div>
            </div>

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
