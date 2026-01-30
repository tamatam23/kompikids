function CTA() {
    return (
        <section className="py-20 bg-[var(--primary-color)]" data-name="CTA" data-file="components/CTA.js">
            <div className="container-custom text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Yuk, Dampingi Anak Belajar Komputer dengan Cara yang Benar!</h2>
                <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    Mulai dari dasar, menyenangkan, dan terarah. Investasi skill digital terbaik untuk masa depan mereka.
                </p>
                <a 
                    href="https://wa.me/6287875000154?text=Halo%20Kompi%20Kids,%20saya%20tertarik%20daftar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--primary-color)] text-lg font-bold rounded-full shadow-lg hover:bg-yellow-50 transform hover:scale-105 transition-all duration-300 gap-3"
                >
                    <span className="icon-message-circle text-2xl"></span>
                    Daftar & Konsultasi Gratis
                </a>
                <p className="mt-6 text-sm opacity-80">Terbatas untuk group kecil & slot home visit.</p>
            </div>
        </section>
    );
}