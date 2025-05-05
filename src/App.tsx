import { Navbar, Footer, ScrollToTop } from "./components";
import { About, Homepage, NotFound, Resume } from "./pages";
import { Routes, Route } from "react-router";

// TODO:
// download and directly host fonts and images
// toggle dark/light mode - user preference
// possible move hamburger to left side
// integrate mantine components instead of tailwind
// add favicon - possibly cat head
// fix grid sizing

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Navbar />
            <div className="max-w-7xl p-4 mt-20 flex flex-col mx-auto mb-8">
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="/projects" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;

{
    /* <Routes>
  <Route index element={<Homepage />} />
  <Route path="/project/:projectName" element={<ProjectDetailPage />} />
  <Route path="/about" element={<About />} />
  <Route path="/resume" element={<Resume />} />
  <Route path="*" element={<NotFound />} />
</Routes> */
}
