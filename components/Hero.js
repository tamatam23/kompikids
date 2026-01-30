function Hero() {
    return (
        <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-14 overflow-hidden bg-gradient-to-b from-[var(--bg-light)] to-white" data-name="Hero" data-file="components/Hero.js">
            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="inline-block px-5 py-2 mb-6 rounded-full bg-orange-50 lg:bg-orange-100 text-orange-900 lg:text-orange-800 font-bold text-lg lg:text-xl tracking-wide border border-orange-200 lg:border-transparent shadow-sm lg:shadow-none leading-snug">
                            Les Komputer Anak <span className="font-extrabold text-orange-600 lg:text-orange-700">TK, SD & SMP</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-dark)] leading-tight mb-6">
                            Apakah Anak Anda Mengalami <span className="text-[var(--secondary-color)]">Masalah Ini?</span>
                        </h1>
                        
                        {/* Mobile Image (Visible on Mobile, Hidden on Desktop) */}
                        <div className="block lg:hidden w-full mb-8 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                            <img 
                                src="https://res.cloudinary.com/dinbniqle/image/upload/v1769412806/ChatGPT_Image_Jan_26_2026_02_28_34_PM_cn8csz.png" 
                                alt="Ilustrasi anak belajar komputer" 
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8 text-left">
                            <ul className="space-y-3">
                                {[
                                    "Anak sering main HP, tapi belum bisa pakai komputer",
                                    "Sulit mengikuti pelajaran komputer di sekolah",
                                    "Bingung saat mengerjakan tugas Word & PowerPoint",
                                    "Orang tua tidak sempat mengajari teknis komputer",
                                    "Kurang percaya diri saat menggunakan laptop/PC"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1 min-w-[20px]">
                                            <span className="icon-circle-x text-red-500 text-xl"></span>
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-lg lg:text-xl text-[var(--primary-dark)] font-bold mb-8">
                            Tenang — ada solusi yang aman, menyenangkan, dan terarah untuk anak Anda.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a 
                                href="https://wa.me/6287875000154?text=Halo%20Kompi%20Kids,%20saya%20ingin%20konsultasi%20gratis."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary hover:scale-105 transform transition-transform shadow-blue-200 shadow-xl"
                            >
                                <span className="icon-message-circle mr-2"></span>
                                Konsultasi Gratis via WhatsApp
                            </a>
                            <button 
                                onClick={() => document.getElementById('programs').scrollIntoView({behavior: 'smooth'})}
                                className="btn btn-outline"
                            >
                                Lihat Program
                            </button>
                        </div>
                    </div>

                    {/* Image/Illustration Placeholder */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
                        
                        {/* Desktop Image (Hidden on Mobile, Visible on Desktop) */}
                        <div className="hidden lg:block relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img 
                                src="https://res.cloudinary.com/dinbniqle/image/upload/v1769412806/ChatGPT_Image_Jan_26_2026_02_28_34_PM_cn8csz.png" 
                                alt="Ilustrasi anak belajar komputer" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}