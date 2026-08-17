import mobiUser from "../assets/mobi-user-website.webp";
import pokedex from "../assets/pokedex.webp";
import grapht from "../assets/skin-tracker.webp";
export type Project = {
    name: string;
    description: string;
    technologies: string[];
    image: string;
    url: string;
};
export const projects: Project[] = [
    {
        name: "Grapht",
        description: "Search skincare products to see real-world results.",
        technologies: ["Next.js", "Neon Postgres", "OAuth", "Tailwind CSS", "shadcn/ui", "YouCam API"],
        image: grapht,
        url: "https://skin-tracker-beige.vercel.app",
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
