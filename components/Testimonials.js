function Testimonials() {
    const reviews = [
        {
            name: "Bunda Rina",
            child: "Orang tua Daffa (Kls 4 SD)",
            text: "Daffa jadi lebih percaya diri pakai laptop. Dulu cuma main game aja, sekarang malah pamer bikin animasi sendiri pakai Scratch. Gurunya sabar banget!",
            rating: 5
        },
        {
            name: "Pak Hendra",
            child: "Orang tua Siti (Kls 1 SMP)",
            text: "Sangat terbantu untuk tugas sekolah. Siti sekarang nilai TIK-nya meningkat dan sering bantu saya ketik surat di Word. Programnya bagus dan terarah.",
            rating: 5
        },
        {
            name: "Ibu Maya",
            child: "Orang tua Kenzo (Kls 2 SD)",
            text: "Awalnya ragu karena online, ternyata Kenzo malah antusias. Cara ngajarnya asik, gak kaku, jadi anak gak bosen. Terima kasih Kompi Kids.",
            rating: 5
        },
        {
            name: "Mama Arka",
            child: "Orang tua Arka (Kls 3 SD)",
            text: "Anak saya jadi lebih kreatif. Pulang sekolah langsung semangat cerita kalau dia baru buat game sederhana. Metode belajarnya sangat cocok untuk anak-anak.",
            rating: 5
        },
        {
            name: "Ibu Susi",
            child: "Orang tua Bimo (Kls 6 SD)",
            text: "Home visit-nya sangat membantu. Saya tidak perlu repot antar jemput, dan guru datang tepat waktu. Materi yang diajarkan sangat relevan.",
            rating: 5
        },
        {
            name: "Pak Budi",
            child: "Orang tua Kevin (Kls 1 SMP)",
            text: "Kevin dulu gaptek, sekarang malah jadi tempat tanya teman-temannya kalau ada masalah komputer. Investasi yang sangat worth it!",
            rating: 5
        }
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [itemsPerView, setItemsPerView] = React.useState(1);
    const [isTransitioning, setIsTransitioning] = React.useState(true);
    const [isPaused, setIsPaused] = React.useState(false);
    
    // Refs for interaction handling
    const timeoutRef = React.useRef(null);
    const touchStartX = React.useRef(0);
    const touchEndX = React.useRef(0);

    // Dynamic Configuration based on itemsPerView (Mobile=1, Desktop=3)
    const isMobile = itemsPerView === 1;
    
    const AUTO_SLIDE_INTERVAL = isMobile ? 5500 : 8000; // Mobile: 5.5s, Desktop: 8s
    const TRANSITION_DURATION = isMobile ? 800 : 1200;  // Mobile: 0.8s, Desktop: 1.2s
    const PAUSE_DURATION = isMobile ? 4500 : 6000;      // Mobile: 4.5s, Desktop: 6s

    // Prepare extended list for seamless loop
    const extendedReviews = [...reviews, ...reviews.slice(0, itemsPerView)];

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setItemsPerView(3);
            } else {
                setItemsPerView(1);
            }
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset index safely when view mode changes
    React.useEffect(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => setIsTransitioning(true), 50);
    }, [itemsPerView]);

    const nextSlide = React.useCallback(() => {
        if (currentIndex >= reviews.length) {
            // Logic handled by transitionEnd usually
        }
        
        const step = itemsPerView;
        setCurrentIndex(prev => prev + step);
        setIsTransitioning(true);
    }, [currentIndex, itemsPerView, reviews.length]);

    const prevSlide = () => {
        const step = itemsPerView;
        if (currentIndex === 0) {
            // Instant jump to end for loop effect on prev (simple version)
            // Or just prevent if we want strict one-way loop visual flow
            // But let's keep basic prev logic safe
            return; 
        } 
        setCurrentIndex(prev => Math.max(0, prev - step));
        setIsTransitioning(true);
    };

    // Auto slide
    React.useEffect(() => {
        if (isPaused) return;

        timeoutRef.current = setTimeout(() => {
            nextSlide();
        }, AUTO_SLIDE_INTERVAL);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [currentIndex, isPaused, nextSlide, AUTO_SLIDE_INTERVAL]);

    const handleTransitionEnd = () => {
        // Infinite loop logic
        if (currentIndex >= reviews.length) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex % reviews.length);
        }
    };

    // Interaction Handlers
    const handleTouchStart = (e) => {
        setIsPaused(true);
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const distance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        // Reset timer
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        if (distance > minSwipeDistance) {
            nextSlide();
        } else if (distance < -minSwipeDistance) {
            if (currentIndex > 0) prevSlide();
        }

        // Resume after delay
        setTimeout(() => setIsPaused(false), PAUSE_DURATION);
    };

    // Math for layout
    const trackWidth = (extendedReviews.length * 100) / itemsPerView;
    const itemWidth = 100 / extendedReviews.length;
    const translatePercentage = (currentIndex * 100) / extendedReviews.length;

    return (
        <section id="testimonials" className="section-padding bg-white overflow-hidden" data-name="Testimonials" data-file="components/Testimonials.js">
            <div className="container-custom">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Kata Orang Tua</h2>
                    <p className="text-gray-600">Apa kata mereka yang sudah bergabung dengan Kompi Kids?</p>
                </div>

                {/* Carousel Container */}
                <div 
                    className="relative overflow-hidden touch-pan-y"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Sliding Track */}
                    <div 
                        className="flex flex-nowrap"
                        style={{
                            width: `${trackWidth}%`,
                            transform: `translateX(-${translatePercentage}%)`,
                            transition: isTransitioning ? `transform ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)` : 'none',
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {extendedReviews.map((review, idx) => (
                            <div 
                                key={idx} 
                                className="px-3"
                                style={{ width: `${itemWidth}%` }}
                            >
                                <div className="bg-[var(--bg-light)] p-8 rounded-2xl border border-gray-100 h-full flex flex-col">
                                    <div className="text-[var(--secondary-color)] mb-4 flex gap-1">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <div key={i} className="icon-star text-lg fill-current"></div>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-6 italic flex-grow text-lg leading-relaxed">"{review.text}"</p>
                                    <div className="flex items-center gap-4 border-t border-gray-200 pt-4 mt-auto">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                            <p className="text-xs text-gray-500">{review.child}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {itemsPerView === 1 ? (
                            reviews.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setIsTransitioning(true);
                                        setCurrentIndex(idx);
                                        setIsPaused(true);
                                        setTimeout(() => setIsPaused(false), PAUSE_DURATION);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-500 ${
                                        (currentIndex % reviews.length) === idx 
                                        ? 'w-8 bg-[var(--primary-color)]' 
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))
                        ) : (
                            [...Array(Math.ceil(reviews.length / 3))].map((_, pageIdx) => {
                                const currentRealIndex = currentIndex % reviews.length;
                                const isActive = Math.floor(currentRealIndex / 3) === pageIdx;
                                return (
                                    <button
                                        key={pageIdx}
                                        onClick={() => {
                                            setIsTransitioning(true);
                                            setCurrentIndex(pageIdx * 3);
                                            setIsPaused(true);
                                            setTimeout(() => setIsPaused(false), PAUSE_DURATION);
                                        }}
                                        className={`h-2 rounded-full transition-all duration-500 ${
                                            isActive
                                            ? 'w-8 bg-[var(--primary-color)]' 
                                            : 'w-2 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Go to page ${pageIdx + 1}`}
                                    />
                                );
                            })
                        )}
                    </div>

                    {/* Mobile Hint */}
                    <div className="md:hidden flex justify-center gap-2 mt-4 opacity-60">
                         <p className="text-xs text-gray-400">Geser untuk melihat testimoni lain</p>
                    </div>
                </div>
            </div>
        </section>
    );
}