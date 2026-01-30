function Programs() {
    const programs = [
        {
            title: "Coding Anak",
            desc: "Belajar logika, animasi, dan game sederhana.",
            tools: ["Scratch", "ScratchJr", "Pixtoblox"],
            icon: "icon-gamepad-2",
            color: "bg-purple-500"
        },
        {
            title: "Dasar Komputer",
            desc: "Fondasi penting penggunaan komputer yang benar.",
            tools: ["Keyboard & Mouse", "Manajemen File", "Internet Aman", "Mengetik Cepat"],
            icon: "icon-laptop",
            color: "bg-blue-500"
        },
        {
            title: "Siap Tugas Sekolah",
            desc: "Jago ngerjain tugas presentasi & makalah sekolah.",
            tools: ["Microsoft Word", "PowerPoint", "Excel Dasar", "Presentasi"],
            icon: "icon-book-open-text",
            color: "bg-emerald-500"
        },
        {
            title: "Design Grafis Anak",
            desc: "Menyalurkan bakat seni digital & membuat poster.",
            tools: ["Canva", "Paint 3D", "Inkscape", "CorelDRAW"],
            icon: "icon-palette",
            color: "bg-pink-500"
        },
        {
            title: "Website Anak",
            desc: "Membuat website portofolio sederhana sendiri.",
            tools: ["Google Sites", "Canva Site", "Web Dasar"],
            icon: "icon-globe",
            color: "bg-orange-500"
        }
    ];

    return (
        <section id="programs" className="section-padding bg-white" data-name="Programs" data-file="components/Programs.js">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Program & Paket Belajar</h2>
                    <p className="text-gray-600">Pilih materi yang paling sesuai dengan minat dan kebutuhan sekolah anak.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((prog, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl border-2 border-gray-100 shadow-md overflow-hidden hover:border-[var(--primary-color)] hover:shadow-xl transition-all duration-300 relative">
                            <div className={`h-2 w-full ${prog.color}`}></div>
                            <div className="p-8">
                                <div className={`w-14 h-14 rounded-xl ${prog.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all`}>
                                    <div className={`${prog.icon} ${prog.color.replace('bg-', 'text-')} text-3xl`}></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{prog.title}</h3>
                                <p className="text-gray-600 mb-6">{prog.desc}</p>
                                
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Materi / Tools:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {prog.tools.map((tool, toolIdx) => (
                                            <span key={toolIdx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-md">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Call to Action Card in Grid */}
                    <div className="bg-[var(--primary-color)] rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white shadow-lg border-2 border-[var(--primary-color)] transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="icon-message-circle text-5xl mb-4 text-white opacity-90"></div>
                        <h3 className="text-2xl font-bold mb-3">Bingung Pilih Yang Mana?</h3>
                        <p className="mb-6 opacity-90">Konsultasikan kebutuhan anak Anda dengan kami. Gratis!</p>
                        <a 
                            href="https://wa.me/6287875000154?text=Halo,%20saya%20ingin%20bertanya%20tentang%20program%20belajar."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[var(--primary-color)] px-6 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors"
                        >
                            Chat Admin
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}