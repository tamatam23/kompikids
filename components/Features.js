function Features() {
    const features = [
        {
            icon: "icon-user-check",
            color: "text-blue-500",
            bg: "bg-blue-100",
            title: "Pengajar Profesional",
            desc: "Guru komputer aktif di sekolah & berpengalaman mengajar anak usia 6-14 tahun."
        },
        {
            icon: "icon-users",
            color: "text-purple-500",
            bg: "bg-purple-100",
            title: "Privat & Group Kecil",
            desc: "Kelas lebih fokus, intensif, dan guru bisa memantau perkembangan setiap anak."
        },
        {
            icon: "icon-clock",
            color: "text-green-500",
            bg: "bg-green-100",
            title: "Flexible Learning",
            desc: "Bisa pilih kelas Online interaktif atau Home Visit (guru datang ke rumah)."
        },
        {
            icon: "icon-file-text",
            color: "text-orange-500",
            bg: "bg-orange-100",
            title: "Laporan Perkembangan",
            desc: "Orang tua mendapatkan update berkala tentang kemajuan belajar anak."
        }
    ];

    return (
        <section id="features" className="section-padding bg-[var(--bg-light)]" data-name="Features" data-file="components/Features.js">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-[var(--primary-color)] font-extrabold tracking-wider uppercase text-base bg-blue-50 px-4 py-1 rounded-full">MENGAPA MEMILIH KAMI?</span>
                    <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-gray-900">Keunggulan Program Kami</h2>
                    <p className="mt-4 text-xl text-gray-600 font-medium">"Tujuan kami: anak senang belajar dan berani mencoba."</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center">
                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${feature.bg} mb-6`}>
                                <div className={`${feature.icon} ${feature.color} text-3xl`}></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}