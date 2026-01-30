function Solutions() {
    return (
        <section className="pt-4 pb-16 sm:pt-8 sm:pb-24 bg-white" data-name="Solutions" data-file="components/Solutions.js">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--text-dark)]">Solusi Program Kompi Kids</h2>
                    <p className="text-gray-600 text-lg">Kami merancang kurikulum yang membuat anak tidak hanya sekedar bisa, tapi paham dan kreatif.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Benefits */}
                    <div className="bg-blue-50 rounded-3xl p-8 lg:p-10 border border-blue-100">
                        <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center gap-3">
                            <span className="icon-sparkles text-[var(--secondary-color)]"></span>
                            Manfaat Utama
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Metode bermain & praktik langsung (Fun Learning)",
                                "Materi bertahap dari nol sampai mahir",
                                "Kurikulum disesuaikan usia (SD & SMP)",
                                "Fokus mengembangkan kreativitas & logika",
                                "Pendampingan sabar & ramah anak"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="bg-white p-1 rounded-full shadow-sm mt-0.5">
                                        <div className="icon-check text-blue-500 text-lg"></div>
                                    </div>
                                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* What they learn */}
                    <div className="bg-orange-50 rounded-3xl p-8 lg:p-10 border border-orange-100">
                        <h3 className="text-2xl font-bold mb-6 text-orange-800 flex items-center gap-3">
                            <span className="icon-graduation-cap text-[var(--primary-color)]"></span>
                            Anak Akan Belajar
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Membuat game & animasi (Scratch/Coding)",
                                "Logika pemrograman dasar sejak dini",
                                "Mengoperasikan komputer dengan percaya diri",
                                "Menjadi kreator teknologi, bukan cuma konsumen",
                                "Lebih produktif & siap tugas sekolah"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="bg-white p-1 rounded-full shadow-sm mt-0.5">
                                        <div className="icon-check text-orange-500 text-lg"></div>
                                    </div>
                                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}