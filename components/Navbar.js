function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navLinks = [
        { name: 'Program', id: 'programs' },
        { name: 'Keunggulan', id: 'features' },
        { name: 'Testimoni', id: 'testimonials' },
        { name: 'Cara Belajar', id: 'methods' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`} data-name="Navbar" data-file="components/Navbar.js">
            <div className="container-custom">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img 
                            src="https://res.cloudinary.com/dinbniqle/image/upload/v1769226749/KOMPI_KIDS_zotien.png" 
                            alt="Kompi Kids Logo" 
                            className="h-11 sm:h-14 w-auto transform transition-transform"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className="text-gray-600 hover:text-[var(--primary-color)] font-medium transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                        <a 
                            href="https://wa.me/6287875000154?text=Halo%20Kompi%20Kids,%20saya%20tertarik%20untuk%20mendaftar."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm flex items-center gap-2"
                        >
                            <span className="icon-message-circle text-lg"></span>
                            Daftar Sekarang
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-[var(--primary-color)] focus:outline-none"
                        >
                            {isOpen ? <span className="icon-x text-2xl"></span> : <span className="icon-menu text-2xl"></span>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[var(--primary-color)] hover:bg-blue-50"
                            >
                                {link.name}
                            </button>
                        ))}
                        <a 
                            href="https://wa.me/6287875000154?text=Halo%20Kompi%20Kids,%20saya%20tertarik%20untuk%20mendaftar."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center mt-4 btn btn-primary"
                        >
                            Chat WhatsApp
                        </a>
                        
                        {/* Mobile Social Icons */}
                        <div className="flex justify-center items-center gap-6 mt-6 pb-2 border-t border-gray-100 pt-4">
                            <a href="https://www.instagram.com/kompikids/" target="_blank" rel="noopener noreferrer" className="text-pink-600 bg-pink-50 p-2 rounded-full">
                                <span className="icon-instagram text-2xl"></span>
                            </a>
                            <a href="https://www.tiktok.com/@kompikids" target="_blank" rel="noopener noreferrer" className="text-black bg-gray-100 p-2 rounded-full">
                                <span className="icon-video text-2xl"></span>
                            </a>
                            <a href="https://wa.me/6287875000154" target="_blank" rel="noopener noreferrer" className="text-green-600 bg-green-50 p-2 rounded-full">
                                <span className="icon-message-circle text-2xl"></span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}