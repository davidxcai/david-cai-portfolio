import { Button } from "@mantine/core";

export function Footer() {
    return (
        <footer className=" text-white p-4 mt-auto border-t-1 border-dashed border-gray-700">
            <div className="max-w-7xl mx-auto p-4 flex flex-row items-stretch flex-wrap">
                <div className="w-1/2">
                    <p>© 2025 David Cai</p>
                    <p>Built with Vite & Mantine UI</p>
                </div>
                <div className="w-1/2 flex flex-row justify-between">
                    <Button>Contact</Button>
                    <Button>LinkedIn</Button>
                    <Button>GitHub</Button>
                    <Button>Email</Button>
                </div>
            </div>
        </footer>
    );
}
