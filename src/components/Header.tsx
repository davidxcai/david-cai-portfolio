export function Header() {
    const isMobile = window.innerWidth < 768;
    return (
        <header className=" text-white p-4 flex flex-row justify-between items-center border-b-1 border-dashed border-gray-800">
            <div className="flex flex-row max-w-7xl mx-auto flex-grow justify-between items-center">
                <h1 className="text-2xl">David Cai</h1>
                <nav className="flex flex-row gap-4">
                    {isMobile ? (
                        <>
                            <button>Projects</button>
                            <button>About</button>
                            <button>Resume</button>
                        </>
                    ) : (
                        <div>hamburger</div>
                    )}
                </nav>
            </div>
        </header>
    );
}
