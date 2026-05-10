import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Eye, Wind, Moon, X, Volume2, VolumeX } from 'lucide-react';

// URL Audio Klasik & Ambient 
// KITA FOKUS KE OPENER: Menggunakan musik piano ambient murni (Sangat damai, tanpa upbeat)
const AUDIO = {
  comforter: 'https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3', 
  empowerer: 'https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3', 
  opener: 'https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3', 
  guide: 'https://cdn.pixabay.com/audio/2021/11/13/audio_cb4f1212a9.mp3', 
  grounding: 'https://cdn.pixabay.com/audio/2021/07/22/audio_9584aae297.mp3' 
};

// Data 25 Kartu
const categories = [
  {
    id: 'comforter',
    name: 'The Comforter & Healer',
    desc: 'Penenang & Penyayang. Untuk meredakan sedih, lelah mental, dan burnout.',
    color: 'from-blue-900 to-indigo-900',
    cards: [
      { name: 'Ar-Rahman', meaning: 'Yang Maha Pengasih', img: 'https://image.pollinations.ai/prompt/cinematic%20wide%20shot%20of%20calm%20infinite%20ocean%20at%20sunrise%20golden%20hour%20with%20soft%20god%20rays%20breaking%20through%20clouds%20ethereal%20lighting%20symmetrical%20composition?width=800&height=1280&nologo=true', audio: AUDIO.comforter },
      { name: 'Ar-Rahim', meaning: 'Yang Maha Penyayang', img: 'https://image.pollinations.ai/prompt/cinematic%20macro%20shot%20of%20single%20morning%20dew%20drop%20on%20bright%20green%20fern%20leaf%20reflecting%20sunlight%20ray%20lush%20rainforest%20intimate%20focus?width=800&height=1280&nologo=true', audio: AUDIO.comforter },
      { name: 'As-Salam', meaning: 'Yang Maha Pemberi Kedamaian', img: 'https://image.pollinations.ai/prompt/perfectly%20still%20mirror%20like%20mountain%20lake%20reflecting%20twilight%20sky%20soft%20dark%20blue%20and%20pastel%20purple%20gradient%20absolute%20silence%20cinematic?width=800&height=1280&nologo=true', audio: AUDIO.comforter },
      { name: 'Al-Wadud', meaning: 'Yang Maha Mengasihi', img: 'https://image.pollinations.ai/prompt/hidden%20misty%20valley%20with%20field%20of%20bioluminescent%20flowers%20glowing%20warm%20gold%20and%20soft%20pink%20sanctuary%20aura%20comforting%20ethereal%20lighting?width=800&height=1280&nologo=true', audio: AUDIO.comforter },
      { name: 'Al-Ghaffar', meaning: 'Yang Maha Pengampun', img: 'https://image.pollinations.ai/prompt/gentle%20small%20waterfall%20crystal%20clear%20water%20washing%20smooth%20river%20stones%20dry%20leaves%20washing%20away%20cleansing%20pure%20glowing%20cinematic?width=800&height=1280&nologo=true', audio: AUDIO.comforter }
    ]
  },
  {
    id: 'empowerer',
    name: 'The Empowerer & Protector',
    desc: 'Pemberdaya & Pelindung. Untuk membangkitkan keberanian dan rasa aman absolut.',
    color: 'from-amber-900 to-red-950',
    cards: [
      { name: 'Al-Aziz', meaning: 'Yang Maha Perkasa', img: 'https://image.pollinations.ai/prompt/low-angle%20shot%20of%20solid%20black%20mountain%20peak%20piercing%20through%20dark%20storm%20clouds%20vertical%20bright%20sunlight%20hitting%20the%20peak%20unshakable%20cinematic%20realism%20epic%20scale?width=800&height=1280&nologo=true', audio: AUDIO.empowerer },
      { name: 'Al-Hafizh', meaning: 'Yang Maha Memelihara', img: 'https://image.pollinations.ai/prompt/wide%20shot%20giant%20ancient%20tree%20in%20valley%20surrounded%20by%20heavy%20rain%20storm%20but%20calm%20dry%20under%20canopy%20golden%20glowing%20leaves%20forming%20protective%20transparent%20dome%20sanctuary%20cinematic?width=800&height=1280&nologo=true', audio: AUDIO.empowerer },
      { name: 'Al-Qawiy', meaning: 'Yang Maha Kuat', img: 'https://image.pollinations.ai/prompt/close-up%20slow-motion%20giant%20ocean%20wave%20crashing%20against%20massive%20unmoving%20cliff%20rock%20water%20breaking%20into%20glowing%20white%20particles%20cinematic%20powerful%20realism?width=800&height=1280&nologo=true', audio: AUDIO.empowerer },
      { name: 'Al-Wakil', meaning: 'Tempat Bersandar', img: 'https://image.pollinations.ai/prompt/bright%20serene%20majestic%20sanctuary%20with%20a%20massive%20solid%20glowing%20white%20stone%20pillar%20bathed%20in%20warm%20comforting%20golden%20sunlight%20safe%20haven%20ethereal%20bright%20optimistic%20cinematic%20realism?width=800&height=1280&nologo=true', audio: AUDIO.empowerer },
      { name: 'Al-Jabbar', meaning: 'Yang Maha Penunduk', img: 'https://image.pollinations.ai/prompt/cinematic%20macro%20shot%20cracked%20large%20crystal%20rock%20blinding%20liquid%20gold%20light%20moving%20from%20within%20sealing%20cracks%20like%20kintsugi%20pure%20light%20healing%20powerful?width=800&height=1280&nologo=true', audio: AUDIO.empowerer }
    ]
  },
  {
    id: 'opener',
    name: 'The Opener & Provider',
    desc: 'Pemberi Jalan & Rezeki. Menggeser rasa buntu menjadi optimisme dan kelimpahan.',
    color: 'from-emerald-900 to-teal-950',
    cards: [
      { name: 'Al-Fattah', meaning: 'Maha Pembuka Jalan', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20tracking%20shot%20inside%20dense%20dark%20cave%20with%20wide%20opening%20thick%20bright%20god%20rays%20sunlight%20illuminating%20dancing%20dust%20particles%20pointing%20to%20a%20smooth%20clear%20path%20cinematic%20lighting%20unreal%20engine%205?width=800&height=1280&nologo=true', audio: AUDIO.opener },
      { name: 'Ar-Razzaq', meaning: 'Maha Pemberi Rezeki', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20emerald%20green%20crystal%20clear%20water%20spring%20flowing%20from%20rocks%20in%20middle%20of%20golden%20desert%20sand%20creating%20small%20stream%20with%20lush%20green%20grass%20and%20small%20flowers%20cinematic%20lighting%20abundance?width=800&height=1280&nologo=true', audio: AUDIO.opener },
      { name: 'Al-Wahhab', meaning: 'Maha Pemberi Karunia', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20ultra-wide%20shot%20clear%20night%20sky%20milky%20way%20massive%20golden%20meteor%20shower%20falling%20onto%20grassy%20field%20turning%20into%20warm%20glowing%20light%20dust%20particles%20cinematic%20awe-inspiring%20magical?width=800&height=1280&nologo=true', audio: AUDIO.opener },
      { name: 'Al-Mughni', meaning: 'Maha Pemberi Kekayaan', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20endless%20vast%20golden%20wheat%20field%20gently%20waving%20in%20wind%20during%20golden%20hour%20sunset%20soft%20white%20clouds%20radiating%20absolute%20wealth%20and%20prosperity%20cinematic%20peaceful?width=800&height=1280&nologo=true', audio: AUDIO.opener },
      { name: 'Al-Basit', meaning: 'Maha Melapangkan', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20cinematic%20macro%20time-lapse%20beautiful%20lotus%20flower%20fully%20blooming%20on%20still%20water%20center%20emitting%20soft%20cool%20light%20blue%20glow%20relaxing%20expanding%20hyper-detailed?width=800&height=1280&nologo=true', audio: AUDIO.opener }
    ]
  },
  {
    id: 'guide',
    name: 'The Guide & Enlightener',
    desc: 'Pemberi Petunjuk. Memberikan kejernihan mutlak saat butuh fokus dan ide.',
    color: 'from-purple-900 to-fuchsia-950',
    cards: [
      { name: 'An-Nur', meaning: 'Yang Maha Bercahaya', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20medium%20shot%20inside%20pitch%20black%20ancient%20stone%20room%20glowing%20crystal%20glass%20lantern%20floating%20in%20center%20emitting%20bright%20soft%20bluish-white%20light%20piercing%20darkness%20revealing%20cosmic%20dust%20particles%20floating%20peacefully%20cinematic%20lighting%20unreal%20engine%205?width=800&height=1280&nologo=true&key=sk_ggEiQvWCbYoGWfMUuqaC0xKKaukSDhhu', audio: AUDIO.guide },
      { name: 'Al-Hadi', meaning: 'Maha Pemberi Petunjuk', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20wide%20shot%20perfectly%20calm%20frozen%20ice%20ocean%20at%20night%20clear%20night%20sky%20billions%20of%20stars%20one%20golden%20constellation%20shining%20brightest%20reflecting%20perfectly%20on%20ice%20creating%20a%20straight%20glowing%20guiding%20line%20forward%20cinematic%20ethereal?width=800&height=1280&nologo=true&key=sk_ggEiQvWCbYoGWfMUuqaC0xKKaukSDhhu', audio: AUDIO.guide },
      { name: 'Al-Khabir', meaning: 'Maha Mengetahui Detail', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20cinematic%20macro%20shot%20slow%20motion%20single%20clear%20water%20drop%20touching%20pitch%20black%20mirror-like%20still%20pool%20surface%20creating%20perfectly%20symmetrical%20circular%20ripples%20moving%20outwards%20sharp%20focus%20analytical%20vibe?width=800&height=1280&nologo=true&key=sk_ggEiQvWCbYoGWfMUuqaC0xKKaukSDhhu', audio: AUDIO.guide },
      { name: 'Al-Alim', meaning: 'Yang Maha Mengetahui', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20infinite%20surreal%20giant%20library%20one-point%20perspective%20perfectly%20symmetrical%20shelves%20filled%20with%20glowing%20scrolls%20of%20pure%20light%20instead%20of%20books%20deep%20knowledge%20database%20cinematic%20epic%20scale?width=800&height=1280&nologo=true&key=sk_ggEiQvWCbYoGWfMUuqaC0xKKaukSDhhu', audio: AUDIO.guide },
      { name: 'Al-Hakim', meaning: 'Yang Maha Bijaksana', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20low-angle%20shot%20massive%20ancient%20banyan%20tree%20roots%20firmly%20gripping%20earth%20intertwined%20with%20ancient%20temple%20ruins%20light%20mist%20silver%20moonlight%20shining%20harmony%20of%20nature%20and%20stone%20thousands%20of%20years%20old%20wisdom%20cinematic?width=800&height=1280&nologo=true&key=sk_ggEiQvWCbYoGWfMUuqaC0xKKaukSDhhu', audio: AUDIO.guide }
    ]
  },
  {
    id: 'grounding',
    name: 'The Absolute Grounding',
    desc: 'Pusat Kesadaran. Meruntuhkan ego dan menyadari posisi kita sebagai pengamat.',
    color: 'from-slate-900 to-black',
    cards: [
      { name: 'Al-Awwal', meaning: 'Yang Maha Awal', img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800', audio: AUDIO.grounding },
      { name: 'Al-Akhir', meaning: 'Yang Maha Akhir', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800', audio: AUDIO.grounding },
      { name: 'Al-Khaliq', meaning: 'Yang Maha Pencipta', img: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=800', audio: AUDIO.grounding },
      { name: 'Al-Kabir', meaning: 'Yang Maha Besar', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800', audio: AUDIO.grounding },
      { name: 'Al-Muhaymin', meaning: 'Maha Mengawasi', img: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&q=80&w=800', audio: AUDIO.grounding }
    ]
  }
];

export default function App() {
  const [view, setView] = useState('home'); 
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [isAudioMuted, setIsAudioMuted] = useState(false);

  // Gunakan Ref untuk elemen Audio DOM
  const audioRef = useRef(null);

  // --- HANDLERS ---
  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setView('gallery');
  };

  const handleCardSelect = (card) => {
    setActiveCard(card);
    setView('focus');
    setIsAudioMuted(false);
    
    // Play audio langsung menggunakan DOM element untuk nembus keamanan browser
    if (audioRef.current && card.audio) {
      audioRef.current.src = card.audio;
      audioRef.current.volume = 0.5; // Setel ke 50% supaya tidak mengagetkan
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => console.warn("Browser menahan audio sementara:", error));
      }
    }
  };

  const handleBack = () => {
    // Matikan audio saat kembali
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    if (view === 'focus') {
      setView('gallery');
      setActiveCard(null);
    } else if (view === 'gallery') {
      setView('home');
      setActiveCategory(null);
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (!isAudioMuted) {
      audioRef.current.pause();
      setIsAudioMuted(true);
    } else {
      audioRef.current.play().catch(e => console.warn("Gagal play ulang", e));
      setIsAudioMuted(false);
    }
  };

  // --- COMPONENTS ---

  const HomeScreen = () => (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif tracking-widest text-white mb-2">MR. CARD</h1>
        <p className="text-slate-400 text-sm">Pilih kategori visual anchor sesuai kondisi mentalmu saat ini.</p>
      </div>

      <div className="space-y-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategorySelect(cat)}
            className={`w-full text-left p-6 rounded-2xl bg-gradient-to-r ${cat.color} border border-white/10 hover:border-white/30 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 group`}
          >
            <h2 className="text-xl font-medium text-white mb-1 group-hover:text-amber-200 transition-colors">{cat.name}</h2>
            <p className="text-slate-300 text-sm">{cat.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );

  const GalleryScreen = () => (
    <div className="max-w-5xl mx-auto py-8 px-6 min-h-screen flex flex-col">
      <button onClick={handleBack} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors w-fit">
        <ArrowLeft className="w-5 h-5 mr-2" /> Kembali ke Kategori
      </button>

      <div className="mb-10">
        <h2 className="text-2xl font-serif text-amber-100">{activeCategory.name}</h2>
        <p className="text-slate-400 mt-1">{activeCategory.desc}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 flex-grow">
        {activeCategory.cards.map((card, idx) => (
          <div 
            key={idx}
            onClick={() => handleCardSelect(card)}
            className="relative group cursor-pointer"
          >
            <div className="aspect-[1/1.6] rounded-xl overflow-hidden border border-white/20 shadow-2xl relative transition-transform duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] bg-slate-800">
              <img 
                src={card.img} 
                alt={card.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-4 text-center">
                <h3 className="text-amber-100 font-serif text-lg md:text-xl tracking-wider">{card.name}</h3>
                <p className="text-slate-300 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">{card.meaning}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const FocusScreen = () => {
    const [instructionState, setInstructionState] = useState('hidden');
    const [zenMode, setZenMode] = useState(false); // State baru untuk efek cerah & teks pindah ke bawah

    useEffect(() => {
      const showTimer = setTimeout(() => {
        setInstructionState('visible');
      }, 2000);

      // Instruksi hilang dan Zen Mode (gambar cerah) aktif di detik ke-10
      const hideTimer = setTimeout(() => {
        setInstructionState('faded');
        setZenMode(true);
      }, 10000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }, []);

    return (
      <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 overflow-hidden">
        
        <div 
          className="absolute inset-0 opacity-20 scale-110 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"
          style={{ backgroundImage: `url(${activeCard.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        
        <div className="absolute top-6 w-full px-6 flex justify-between items-center z-20">
          <button onClick={handleBack} className="text-slate-400 hover:text-white p-2 bg-black/40 rounded-full backdrop-blur-md transition-colors">
            <X className="w-6 h-6" />
          </button>
          
          <button onClick={toggleAudio} className="text-slate-400 hover:text-white p-2 bg-black/40 rounded-full backdrop-blur-md transition-colors">
            {isAudioMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>

        <div className="relative z-10 animate-[scale-in_10s_ease-out_forwards]">
          <div className="w-[85vw] max-w-sm aspect-[1/1.6] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative bg-slate-900">
            <img src={activeCard.img} alt={activeCard.name} className="absolute inset-0 w-full h-full object-cover opacity-80" />
            
            {/* Gradient Overlay: Opacity jadi 0 (Gambar Full Cerah) saat Zen Mode */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 transition-opacity duration-[3000ms] ease-in-out ${zenMode ? 'opacity-0' : 'opacity-100'}`}></div>
            
            {/* Teks Posisi & Transisi: Pindah ke bottom (top-[75%]) dan mengecil sedikit (scale-90) */}
            <div className={`absolute left-0 w-full px-6 text-center transition-all duration-[3000ms] ease-in-out animate-[fade-in_3s_ease-out_1s_forwards] opacity-0 ${zenMode ? 'top-[75%] scale-90' : 'top-[25%] scale-100'}`}>
              <h2 className="text-4xl font-serif text-amber-100/90 tracking-[0.2em] mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">{activeCard.name}</h2>
              <p className="text-slate-200 text-sm tracking-widest uppercase opacity-90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">{activeCard.meaning}</p>
              
              {/* Pesan Sambutan & Instruksi Baru */}
              <div className={`mt-10 text-amber-50/90 font-serif text-sm leading-relaxed tracking-wide transition-opacity duration-[2000ms] ease-in-out drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${instructionState === 'visible' && !zenMode ? 'opacity-100' : 'opacity-0'}`}>
                <p className="mb-4">Assalamu’alaikum Wahai Diri!</p>
                <p className="mb-4">Terima kasih ya, kamu sudah berjuang dengan hebat hari ini…</p>
                <p>Mari, kini saatnya kamu mengambil waktu sejenak untuk menenangkan diri dan top up energi lagi 😇</p>
              </div>
            </div>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scale-in {
            0% { transform: scale(0.95); }
            100% { transform: scale(1.02); }
          }
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-amber-900">
      
      {/* ELEMEN AUDIO ASLI (Menghindari blokir autoplay dari browser) */}
      <audio ref={audioRef} loop preload="auto" />

      <div className="relative z-10">
        {view === 'home' && <HomeScreen />}
        {view === 'gallery' && <GalleryScreen />}
        {view === 'focus' && <FocusScreen />}
      </div>
    </div>
  );
}