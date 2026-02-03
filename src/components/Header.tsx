const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent">
            <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl lg:text-3xl font-bold text-red-600 cursor-pointer">
                    NETFLIX
                </h1>

                {/* Navbar items */}
                <nav className="hidden md:flex items-center gap-6">
                    <span className="text-sm text-white cursor-pointer hover:underline">
                        Home
                    </span>
                    <span className="text-sm text-white cursor-pointer hover:underline">
                        TV Shows
                    </span>
                    <span className="text-sm text-white cursor-pointer hover:underline">
                        Movies
                    </span>
                </nav>

                {/* Auth button */}
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm">
                    Sign In
                </button>
            </div>
        </header>
    );
};

export default Header;
