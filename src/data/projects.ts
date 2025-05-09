import mobiAdminPortal from "../assets/mobi-admin-portal.webp";
import matcha from "../assets/matcha.webp";
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
        name: "Matcha Mail",
        description: "Snail mail app.",
        technologies: ["Supabase", "Mantine UI", "Tailwind CSS"],
        image: matcha,
        url: "https://matcha-steel.vercel.app",
    },
    {
        name: "PokeDex",
        description: "Gemini API implementation for HackDay competition.",
        technologies: ["Gemini API", "Vite", "Tailwind CSS"],
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
