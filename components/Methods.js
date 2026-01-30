function Methods() {
    return (
        <section id="methods" className="py-16 bg-[var(--bg-light)]" data-name="Methods" data-file="components/Methods.js">
            <div className="container-custom">
                <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-10 lg:p-16 flex flex-col justify-center">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Cara Belajar di Kompi Kids</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Kami menawarkan fleksibilitas penuh. Pilih metode yang paling nyaman dan aman untuk keluarga Anda.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <div className="icon-video text-blue-600 text-xl"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800">Kelas Online</h4>
                                        <p className="text-gray-600 mt-1">Belajar interaktif via Zoom / Google Meet. Hemat waktu perjalanan.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <div className="icon-house text-green-600 text-xl"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800">Home Visit</h4>
                                        <p className="text-gray-600 mt-1">Guru datang ke rumah (Area Bekasi). Lebih personal dan fokus.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                        <div className="icon-users text-purple-600 text-xl"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800">Individu / Group Kecil</h4>
                                        <p className="text-gray-600 mt-1">Bisa privat 1-on-1 atau ajak teman sekelompok agar lebih seru.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-64 lg:h-auto">
                            <img 
                                src="https://res.cloudinary.com/dinbniqle/image/upload/v1769483290/oke_sw90cp.webp" 
                                alt="Suasana belajar komputer" 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}