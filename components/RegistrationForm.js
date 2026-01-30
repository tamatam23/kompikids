function RegistrationForm() {
    const [formData, setFormData] = React.useState({
        parentName: '',
        whatsapp: '',
        childName: '',
        ageClass: '1 SD',
        program: 'Coding',
        learningMode: 'Online'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { parentName, childName, ageClass, program, learningMode, whatsapp } = formData;
        
        // Encode message for WhatsApp
        const message = `Halo Admin Kompi Kids 👋%0A%0ASaya ingin mendaftarkan anak saya dengan detail berikut:%0A%0ANama Orang Tua: ${parentName}%0ANama Anak: ${childName}%0AUsia / Kelas: ${ageClass}%0AProgram: ${program}%0AMode Belajar: ${learningMode}%0A%0AMohon info jadwal dan biaya ya. Terima kasih 🙏`;
        
        // Use the specified phone number
        const url = `https://wa.me/6287875000154?text=${message}`;
        window.open(url, '_blank');
    };

    return (
        <section id="registration" className="section-padding bg-[var(--bg-light)] relative overflow-hidden" data-name="RegistrationForm" data-file="components/RegistrationForm.js">
            <div className="container-custom relative z-10">
                <div className="text-center mb-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--text-dark)]">Daftarkan Anak Anda Sekarang</h2>
                    <p className="text-gray-600 text-lg">Isi form singkat, lalu lanjutkan konsultasi via WhatsApp.</p>
                </div>
                
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-8 lg:p-12 border border-blue-50">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Parent Name */}
                        <div className="col-span-1">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nama Orang Tua <span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                name="parentName"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
                                placeholder="Nama Lengkap Orang Tua"
                                value={formData.parentName}
                                onChange={handleChange}
                            />
                        </div>

                        {/* WhatsApp Number */}
                        <div className="col-span-1">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nomor WhatsApp <span className="text-red-500">*</span></label>
                            <input 
                                type="number" 
                                name="whatsapp"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
                                placeholder="08xxxxxxxxxx"
                                value={formData.whatsapp}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Child Name */}
                        <div className="col-span-1">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nama Anak <span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                name="childName"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder-gray-400"
                                placeholder="Nama Panggilan Anak"
                                value={formData.childName}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Age/Class */}
                        <div className="col-span-1">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Usia / Kelas</label>
                            <div className="relative">
                                <select 
                                    name="ageClass"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none cursor-pointer text-gray-700"
                                    value={formData.ageClass}
                                    onChange={handleChange}
                                >
                                    <option value="TK">TK (Taman Kanak-kanak)</option>
                                    <option value="1 SD">Kelas 1 SD</option>
                                    <option value="2 SD">Kelas 2 SD</option>
                                    <option value="3 SD">Kelas 3 SD</option>
                                    <option value="4 SD">Kelas 4 SD</option>
                                    <option value="5 SD">Kelas 5 SD</option>
                                    <option value="6 SD">Kelas 6 SD</option>
                                    <option value="1 SMP">Kelas 1 SMP</option>
                                    <option value="2 SMP">Kelas 2 SMP</option>
                                    <option value="3 SMP">Kelas 3 SMP</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                    <div className="icon-chevron-down"></div>
                                </div>
                            </div>
                        </div>

                        {/* Program */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Program yang Diminati</label>
                             <div className="relative">
                                <select 
                                    name="program"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none cursor-pointer text-gray-700"
                                    value={formData.program}
                                    onChange={handleChange}
                                >
                                    <option value="Coding">Coding (Game & Animasi)</option>
                                    <option value="Microsoft Office">Microsoft Office (Word/PPT/Excel)</option>
                                    <option value="Design Grafis">Design Grafis</option>
                                    <option value="Website">Website Development</option>
                                </select>
                                 <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                    <div className="icon-chevron-down"></div>
                                </div>
                            </div>
                        </div>

                        {/* Learning Mode */}
                        <div className="col-span-1 md:col-span-2">
                             <label className="block text-sm font-bold text-gray-700 mb-3">Mode Belajar</label>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all ${formData.learningMode === 'Online' ? 'border-[var(--primary-color)] bg-blue-50 ring-1 ring-[var(--primary-color)]' : 'border-gray-200 hover:bg-gray-50'}`}>
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.learningMode === 'Online' ? 'border-[var(--primary-color)]' : 'border-gray-400'}`}>
                                        {formData.learningMode === 'Online' && <div className="w-3 h-3 rounded-full bg-[var(--primary-color)]"></div>}
                                    </div>
                                    <input 
                                        type="radio" 
                                        name="learningMode" 
                                        value="Online" 
                                        checked={formData.learningMode === 'Online'} 
                                        onChange={handleChange}
                                        className="hidden"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-800">Online</span>
                                        <span className="text-xs text-gray-500">via Zoom / Google Meet</span>
                                    </div>
                                </label>
                                
                                <label className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all ${formData.learningMode === 'Home Visit' ? 'border-[var(--secondary-color)] bg-orange-50 ring-1 ring-[var(--secondary-color)]' : 'border-gray-200 hover:bg-gray-50'}`}>
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.learningMode === 'Home Visit' ? 'border-[var(--secondary-color)]' : 'border-gray-400'}`}>
                                        {formData.learningMode === 'Home Visit' && <div className="w-3 h-3 rounded-full bg-[var(--secondary-color)]"></div>}
                                    </div>
                                    <input 
                                        type="radio" 
                                        name="learningMode" 
                                        value="Home Visit" 
                                        checked={formData.learningMode === 'Home Visit'} 
                                        onChange={handleChange}
                                        className="hidden"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-800">Home Visit</span>
                                        <span className="text-xs text-gray-500">Guru datang ke rumah</span>
                                    </div>
                                </label>
                             </div>
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-1 md:col-span-2 mt-4">
                            <button 
                                type="submit"
                                className="w-full btn btn-primary py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                            >
                                <span className="icon-message-circle text-2xl"></span>
                                Kirim & Konsultasi via WhatsApp
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                                <span className="icon-lock text-gray-400"></span>
                                Data Anda aman dan hanya digunakan untuk konsultasi.
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}