import mobiAdminPortal from "../assets/mobi-admin-portal.png";
import matcha from "../assets/matcha.png";
export type Project = {
    name: string;
    description: string;
    technologies: string[];
    image: string;
    url: string;
};
export const projects: Project[] = [
    {
        name: "Mobi Admin Portal",
        description: "Admin Dashboard for student organization.",
        technologies: ["React", "Supabase", "Typescript"],
        image: mobiAdminPortal,
        url: "https://mobi-admin-portal.vercel.app/",
    },
    {
        name: "Matcha Mail",
        description: "My personal portfolio website.",
        technologies: ["Supabase", "Shadcn", "Tailwind CSS"],
        image: matcha,
        url: "https://matcha-steel.vercel.app",
    },
    {
        name: "PokeDex",
        description: "Gemini API implementation.",
        technologies: ["Gemini API", "Vite", "Tailwind CSS"],
        image: "/images/portfolio.png",
        url: "google.com",
    },
    {
        name: "E-Commerce",
        description: "Built with shopify.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        image: "/images/portfolio.png",
        url: "google.com",
    },
];
