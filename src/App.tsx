import { Header, Footer } from "./components";
import { Homepage } from "./pages/Homepage";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="max-w-7xl mx-auto p-4">
                <Homepage />
            </div>
            <Footer />
        </div>
    );
}

export default App;
