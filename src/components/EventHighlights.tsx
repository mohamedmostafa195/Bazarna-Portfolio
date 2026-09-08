import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Film, 
  ArrowUpRight, 
  Flame, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  RotateCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CoverflowItem {
  id: string;
  title: string;
  subtitle: string;
  arabicTitle: string;
  tag: string;
  edition: string;
  src?: string;
  poster: string;
  isVideo: boolean;
  stats: string;
  location: string;
  description: string;
}

export const HIGHLIGHT_ITEMS: CoverflowItem[] = [
  {
    id: 'c1',
    title: 'Autumn Pop-Up Festival',
    arabicTitle: 'أجواء مهرجان الخريف وروح المجتمع',
    subtitle: '15,000+ Shoppers & High Energy',
    tag: 'Live Reel',
    edition: 'Edition 2025',
    src: '/Videos Bazarna/WhatsApp Video 2026-09-08 at 4.40.21 PM.mp4',
    poster: '/images/real_hero.jpg',
    isVideo: true,
    stats: '15k+ Visitors',
    location: 'Cairo, Egypt',
    description: 'The iconic buzz of Bazarna: vibrant aisles, live DJ, fashion enthusiasts, and non-stop shopping excitement.',
  },
  {
    id: 'c2',
    title: 'Curated Designer Showcase',
    arabicTitle: 'إبداع وتألق البراندات المصرية',
    subtitle: '120+ Homegrown Designers',
    tag: 'Vendor Spotlight',
    edition: 'Design Edition',
    src: '/Videos Bazarna/WhatsApp Video 2026-09-08 at 4.40.54 PM.mp4',
    poster: '/images/real_fashion.jpg',
    isVideo: true,
    stats: '120+ Brands',
    location: 'Boutique Pavilion',
    description: 'Front-row look at custom booth staging, limited runway capsule drops, and direct designer-shopper interactions.',
  },
  {
    id: 'c3',
    title: 'North Coast Seaside Market',
    arabicTitle: 'سحر الصيف في الساحل الشمالي',
    subtitle: 'Marassi Summer Pop-Up Hub',
    tag: 'Summer Edition',
    edition: 'North Coast',
    src: '/Videos Bazarna/WhatsApp Video 2026-09-08 at 4.40.21 PM.mp4',
    poster: '/images/real_marassi.jpg',
    isVideo: true,
    stats: '25k+ Visitors',
    location: 'Marassi, Sahel',
    description: 'Where resort-wear, beachside lifestyle, and Mediterranean sunset energy converge in Egypt’s most prestigious destination.',
  },
  {
    id: 'c4',
    title: 'The Grand Expo & Youth Stage',
    arabicTitle: 'إكسبو بازارنا والجيل الصاعد',
    subtitle: 'Youth Innovation & Streetwear',
    tag: 'Youth Concept',
    edition: 'Expo Edition',
    src: '/Videos Bazarna/WhatsApp Video 2026-09-08 at 4.40.54 PM.mp4',
    poster: '/images/real_expo.jpg',
    isVideo: true,
    stats: '80+ Concepts',
    location: 'Open Arena',
    description: 'Dynamic streetwear drops, live performances, and modern retail formats engineered for Gen Z trendsetters.',
  },
  {
    id: 'c5',
    title: 'Community & Celebrity Moments',
    arabicTitle: 'نجوم المجتمع وفرحة التسوق المحلي',
    subtitle: 'VIP Walkthroughs & Media Buzz',
    tag: 'Community',
    edition: 'Special Edition',
    src: '/Videos Bazarna/WhatsApp Video 2026-09-08 at 4.40.21 PM.mp4',
    poster: '/images/real_community.jpg',
    isVideo: true,
    stats: '50+ Influencers',
    location: 'Cairo Hub',
    description: 'Uniting public figures, lifestyle influencers, and conscious shoppers in championing Egyptian craftsmanship.',
  },
];

const AUTO_PLAY_DURATION = 7000; // 7 seconds per slide

export const EventHighlights: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isAutoRotationActive, setIsAutoRotationActive] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [fullscreenItem, setFullscreenItem] = useState<CoverflowItem | null>(null);

  const activeItem = HIGHLIGHT_ITEMS[activeIndex];
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Next / Prev Handlers
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : HIGHLIGHT_ITEMS.length - 1));
    setProgress(0);
    setIsPlaying(true);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < HIGHLIGHT_ITEMS.length - 1 ? prev + 1 : 0));
    setProgress(0);
    setIsPlaying(true);
  }, []);

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      togglePlay();
    } else {
      setActiveIndex(index);
      setProgress(0);
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Drag Gesture Handler
  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -300) {
      handleNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 300) {
      handlePrev();
    }
  };

  // Auto-advance Timer with progress tracking
  useEffect(() => {
    if (!isAutoRotationActive || isHovered || fullscreenItem) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    const progressIncrement = (stepMs / AUTO_PLAY_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + progressIncrement;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isAutoRotationActive, isHovered, fullscreenItem, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section 
      id="highlights" 
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#121316] text-[#FBF9F5] relative overflow-hidden border-b border-white/10 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Dynamic Ambient Spotlight Glow behind Active Card */}
      <motion.div 
        animate={{ 
          scale: isPlaying ? [1, 1.15, 1] : 1,
          opacity: [0.18, 0.3, 0.18]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-r from-[#C85A32] via-[#E0663A] to-[#8B4513] rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse" />
            <span className="tracker-tag text-[#C85A32] text-xs uppercase tracking-widest font-bold flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5" />
              EXPERIENTIAL 3D COVERFLOW
            </span>
          </div>

          <h2 className="font-anton text-huge text-[#FBF9F5] uppercase leading-[0.95] tracking-wide">
            THE ENERGY IN MOTION.
          </h2>

          <p className="font-poppins text-base sm:text-lg font-bold text-[#C85A32] mt-2 uppercase tracking-tight flex items-center justify-center gap-2">
            <Flame className="w-4.5 h-4.5" /> Live Moments • Pop-Up Highlights • Pure Vibes
          </p>
        </div>

        {/* 2. 3D Coverflow Container with Drag Physics */}
        <motion.div 
          className="relative w-full max-w-6xl h-[480px] sm:h-[560px] md:h-[620px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ perspective: '1300px', transformStyle: 'preserve-3d' }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
        >
          {HIGHLIGHT_ITEMS.map((item, index) => {
            const offset = index - activeIndex;
            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);

            let xTranslate = 0;
            let rotateY = 0;
            let scale = 1;
            let zIndex = 40 - absOffset * 10;
            let opacity = 1;
            let brightness = 1;

            if (isCenter) {
              xTranslate = 0;
              rotateY = 0;
              scale = 1.08;
              zIndex = 50;
              opacity = 1;
              brightness = 1;
            } else if (offset < 0) {
              // Left cards
              xTranslate = offset * 115 - 75;
              rotateY = 38;
              scale = Math.max(0.72, 1 - absOffset * 0.12);
              opacity = Math.max(0.35, 1 - absOffset * 0.22);
              brightness = Math.max(0.38, 1 - absOffset * 0.28);
            } else {
              // Right cards
              xTranslate = offset * 115 + 75;
              rotateY = -38;
              scale = Math.max(0.72, 1 - absOffset * 0.12);
              opacity = Math.max(0.35, 1 - absOffset * 0.22);
              brightness = Math.max(0.38, 1 - absOffset * 0.28);
            }

            if (absOffset > 2) {
              opacity = 0;
              zIndex = 0;
            }

            return (
              <motion.div
                key={item.id}
                onClick={() => handleCardClick(index)}
                animate={{
                  x: xTranslate,
                  rotateY: rotateY,
                  scale: scale,
                  opacity: opacity,
                  z: isCenter ? 90 : -absOffset * 65,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 28,
                  mass: 0.85,
                }}
                style={{
                  zIndex: zIndex,
                  transformStyle: 'preserve-3d',
                }}
                className={`absolute w-[240px] sm:w-[300px] md:w-[340px] aspect-[9/14] rounded-3xl cursor-pointer select-none transition-shadow duration-300 ${
                  isCenter
                    ? 'ring-2 ring-[#C85A32] shadow-[0_25px_60px_-15px_rgba(200,90,50,0.45)]'
                    : 'hover:brightness-95'
                }`}
              >
                {/* Main Card Shell */}
                <div 
                  className="w-full h-full bg-[#1A1C21] rounded-3xl relative flex flex-col justify-between overflow-hidden shadow-2xl"
                  style={{ filter: `brightness(${brightness})` }}
                >
                  {/* Top Bar Floating Controls (Clean & Minimal) */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 z-30 pointer-events-auto">
                    {isCenter && (
                      <>
                        {/* Audio Toggle */}
                        <button
                          onClick={toggleMute}
                          className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-[#C85A32] transition-colors cursor-pointer shadow-lg"
                          title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                        >
                          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                        </button>

                        {/* Fullscreen Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setFullscreenItem(item);
                          }}
                          className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-[#C85A32] transition-colors cursor-pointer shadow-lg"
                          title="Fullscreen Modal"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Pure Video or Image Surface without obscuring overlays */}
                  <div className="relative w-full h-full bg-black flex items-center justify-center">
                    {isCenter && item.src ? (
                      <video
                        ref={videoRef}
                        key={item.src}
                        src={item.src}
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        className="w-full h-full object-contain bg-black"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      />
                    ) : (
                      <img
                        src={item.poster}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Subtle Play/Pause Overlay for Center Card on Click */}
                    {isCenter && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                          initial={false}
                          animate={{
                            scale: isPlaying ? 0.8 : 1.1,
                            opacity: isPlaying ? 0 : 0.95,
                          }}
                          transition={{ duration: 0.2 }}
                          className="w-14 h-14 rounded-full bg-[#C85A32] text-white flex items-center justify-center shadow-2xl"
                        >
                          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5 fill-white" />}
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. Cinematic Floor Reflection / Mirror Effect */}
                <div 
                  className="absolute top-full left-0 right-0 h-28 pointer-events-none overflow-hidden rounded-b-3xl opacity-30 blur-[1.5px]"
                  style={{
                    transform: 'rotateX(180deg) translateY(-2px)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 80%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 80%)',
                    filter: `brightness(${brightness * 0.7})`,
                  }}
                >
                  <img
                    src={item.poster}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 4. Active Title & Caption Beneath the Coverflow (Clean Minimalist Design) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mt-6 text-center max-w-xl mx-auto flex flex-col items-center"
          >
            {/* Main Title */}
            <h3 className="font-anton text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-wide">
              {activeItem.title}
            </h3>

            {/* Subtitle */}
            <p className="font-poppins text-xs sm:text-sm font-semibold text-[#C85A32] uppercase tracking-wider mt-1">
              {activeItem.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Fullscreen Theater Lightbox Modal */}
      <AnimatePresence>
        {fullscreenItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setFullscreenItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md sm:max-w-lg bg-[#121316] rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="p-4 bg-[#18191E] border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-anton text-lg text-white uppercase tracking-wide">
                    {fullscreenItem.title}
                  </h3>
                  <p className="text-[11px] text-[#A5A7AF]">{fullscreenItem.arabicTitle}</p>
                </div>
                <button
                  onClick={() => setFullscreenItem(null)}
                  className="px-3.5 py-1.5 rounded-full bg-white/10 text-white hover:bg-[#C85A32] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close ✕
                </button>
              </div>

              {/* Modal Video Player */}
              <div className="relative aspect-[9/16] w-full max-h-[75vh] bg-black flex items-center justify-center">
                {fullscreenItem.src ? (
                  <video
                    src={fullscreenItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={fullscreenItem.poster}
                    alt={fullscreenItem.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
