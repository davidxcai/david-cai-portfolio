import { Header, Navbar, Footer, ScrollToTop } from "./components";
import { About, Homepage, NotFound, Resume } from "./pages";
import { AppShell } from "@mantine/core";
import { Routes, Route } from "react-router";
import { useSidebar } from "./context/SidebarContext";

// TODO:
// download and directly host fonts and images
// toggle dark/light mode - user preference
// possible move hamburger to left side
// integrate mantine components instead of tailwind

function App() {
    const [opened, { toggle }] = useSidebar();
    return (
        <AppShell
            header={{ height: 70 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { mobile: !opened, desktop: true },
            }}
            padding="md"
        >
            <ScrollToTop />
            <Header isOpen={opened} toggle={toggle} />
            <Navbar />
            <AppShell.Main className="max-w-7xl mx-auto">
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="/projects" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AppShell.Main>
            <Footer />
        </AppShell>
    );
}

export default App;
