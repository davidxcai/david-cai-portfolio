import mobiAdminPortal from "../assets/mobi-admin-portal.webp";
import mobiUser from "../assets/mobi-user-website.webp";
import pokedex from "../assets/pokedex.webp";
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
        name: "Mobi Website",
        description: "Public website for student organization.",
        technologies: ["Supabase", "Chakra UI", "TanStack Query", "React"],
        image: mobiUser,
        url: "https://mobi-public-website.vercel.app/",
    },
    {
        name: "PokeDex",
        description: "OpenAI API implementation for HackDay competition.",
        technologies: ["OpenAI API", "Vite", "Tailwind CSS"],
        image: pokedex,
        url: "https://pokedex-bice-xi.vercel.app",
    },
    // {
    //     name: "E-Commerce",
    //     description: "Built with shopify.",
    //     technologies: ["React", "TypeScript", "Tailwind CSS"],
    //     image: "/",
    //     url: "google.com",
    // },
];
