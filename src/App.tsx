import { Header, Navbar, Footer } from "./components";
import { Homepage } from "./pages/Homepage";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

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
            <AppShell.Main className="max-w-7xl mx-auto h-full">
                <Homepage />
            </AppShell.Main>
            <Footer />
        </AppShell>
    );
}

export default App;
