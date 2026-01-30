function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8" data-name="Footer" data-file="components/Footer.js">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white p-1 rounded">
                                <img 
                                    src="https://res.cloudinary.com/dinbniqle/image/upload/v1769226749/KOMPI_KIDS_zotien.png" 
                                    alt="Kompi Kids Logo" 
                                    className="h-8 w-auto"
                                />
                            </div>
                            <span className="font-bold text-xl">Kompi Kids</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Belajar komputer jadi lebih mudah dan menyenangkan. Membantu anak-anak Indonesia melek teknologi sejak dini dengan cara yang tepat.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Kontak Kami</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://wa.me/6287875000154" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-[var(--primary-color)] transition-colors">
                                    <span className="icon-phone mt-1 text-[var(--secondary-color)]"></span>
                                    <span className="text-slate-300 text-sm">WhatsApp: 0878-7500-0154</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:kompikids@gmail.com" className="flex items-start gap-3 hover:text-[var(--primary-color)] transition-colors">
                                    <span className="icon-mail mt-1 text-[var(--secondary-color)]"></span>
                                    <span className="text-slate-300 text-sm">Email: kompikids@gmail.com</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="icon-map-pin mt-1 text-[var(--secondary-color)]"></span>
                                <span className="text-slate-300 text-sm">Area Layanan: Bekasi & Sekitarnya</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Ikuti Kami</h4>
                        <div className="flex flex-col gap-4">
                            <a href="https://www.tiktok.com/@kompikids" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#00f2ea] transition-colors">
                                    <span className="icon-video text-sm group-hover:text-black"></span>
                                </div>
                                <span className="text-sm">TikTok @kompikids</span>
                            </a>
                            <a href="https://www.instagram.com/kompikids/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                                    <span className="icon-instagram text-sm"></span>
                                </div>
                                <span className="text-sm">Instagram @kompikids</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Menu</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li><a href="#" className="hover:text-[var(--primary-color)]">Beranda</a></li>
                            <li><a href="#programs" className="hover:text-[var(--primary-color)]">Program Belajar</a></li>
                            <li><a href="#features" className="hover:text-[var(--primary-color)]">Keunggulan</a></li>
                            <li><a href="#testimonials" className="hover:text-[var(--primary-color)]">Testimoni</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        &copy; {currentYear} Kompi Kids — Belajar Komputer Mulai Dari Dasar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}