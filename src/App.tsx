import { Header, Navbar, Footer } from "./components";
import { About, Homepage, NotFound, Resume } from "./pages";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Routes, Route } from "react-router";

function App() {
    const [opened, { toggle }] = useDisclosure();
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
