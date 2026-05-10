import React, { useState, useEffect, useRef } from 'react'; [cite: 1]
import { ArrowLeft, Eye, Wind, Moon, X, Volume2, VolumeX } from 'lucide-react'; [cite: 1]

const AUDIO = { [cite: 2]
  comforter: 'https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3', 
  empowerer: 'https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3', 
  opener: 'https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3', 
  guide: 'https://cdn.pixabay.com/audio/2021/11/13/audio_cb4f1212a9.mp3', 
  grounding: 'https://cdn.pixabay.com/audio/2021/07/22/audio_9584aae297.mp3' 
};

const categories = [ [cite: 3]
  {
    id: 'comforter',
    name: 'The Comforter & Healer',
    desc: 'Penenang & Penyayang. Untuk meredakan sedih, lelah mental, dan burnout.', [cite: 3, 4]
    color: 'from-blue-900 to-indigo-900', [cite: 4]
    cards: [
      { name: 'Ar-Rahman', meaning: 'Yang Maha Pengasih', img: 'https://image.pollinations.ai/prompt/cinematic%20wide%20shot%20of%20calm%20infinite%20ocean%20at%20sunrise%20golden%20hour%20with%20soft%20god%20rays%20breaking%20through%20clouds%20ethereal%20lighting%20symmetrical%20composition?width=800&height=1280&nologo=true', audio: AUDIO.comforter }, [cite: 4]
      { name: 'Ar-Rahim', meaning: 'Yang Maha Penyayang', img: 'https://image.pollinations.ai/prompt/cinematic%20macro%20shot%20of%20single%20morning%20dew%20drop%20on%20bright%20green%20fern%20leaf%20reflecting%20sunlight%20ray%20lush%20rainforest%20intimate%20focus?width=800&height=1280&nologo=true', audio: AUDIO.comforter }, [cite: 4]
      { name: 'As-Salam', meaning: 'Yang Maha Pemberi Kedamaian', img: 'https://image.pollinations.ai/prompt/perfectly%20still%20mirror%20like%20mountain%20lake%20reflecting%20twilight%20sky%20soft%20dark%20blue%20and%20pastel%20purple%20gradient%20absolute%20silence%20cinematic?width=800&height=1280&nologo=true', audio: AUDIO.comforter }, [cite: 4]
      { name: 'Al-Wadud', meaning: 'Yang Maha Mengasihi', img: 'https://image.pollinations.ai/prompt/hidden%20misty%20valley%20with%20field%20of%20bioluminescent%20flowers%20glowing%20warm%20gold%20and%20soft%20pink%20sanctuary%20aura%20comforting%20ethereal%20lighting?width=800&height=1280&nologo=true', audio: AUDIO.comforter }, [cite: 4]
      { name: 'Al-Ghaffar', meaning: 'Yang Maha Pengampun', img: 'https://image.pollinations.ai/prompt/gentle%20small%20waterfall%20crystal%20clear%20water%20washing%20smooth%20river%20stones%20dry%20leaves%20washing%20away%20cleansing%20pure%20glowing%20cinematic?width=800&height=1280&nologo=true', audio: AUDIO.comforter } [cite: 4, 5]
    ]
  },
  {
    id: 'empowerer',
    name: 'The Empowerer & Protector',
    desc: 'Pemberdaya & Pelindung. Untuk membangkitkan keberanian dan rasa aman absolut.', [cite: 5, 6]
    color: 'from-amber-900 to-red-950', [cite: 6]
    cards: [
      { name: 'Al-Aziz', meaning: 'Yang Maha Perkasa', img: 'https://image.pollinations.ai/prompt/low-angle%20shot%20of%20solid%20black%20mountain%20peak%20piercing%20through%20dark%20storm%20clouds%20vertical%20bright%20sunlight%20hitting%20the%20peak%20unshakable%20cinematic%20realism%20epic%20scale?width=800&height=1280&nologo=true', audio: AUDIO.empowerer }, [cite: 6]
      { name: 'Al-Hafizh', meaning: 'Yang Maha Memelihara', img: 'https://image.pollinations.ai/prompt/wide%20shot%20giant%20ancient%20tree%20in%20valley%20surrounded%20by%20heavy%20rain%20storm%20but%20calm%20dry%20under%20canopy%20golden%20glowing%20leaves%20forming%20protective%20transparent%20dome%20sanctuary%20cinematic?width=800&height=1280&nologo=true', audio: AUDIO.empowerer }, [cite: 6]
      { name: 'Al-Qawiy', meaning: 'Yang Maha Kuat', img: 'https://image.pollinations.ai/prompt/close-up%20slow-motion%20giant%20ocean%20wave%20crashing%20against%20massive%20unmoving%20cliff%20rock%20water%20breaking%20into%20glowing%20white%20particles%20cinematic%20powerful%20realism?width=800&height=1280&nologo=true', audio: AUDIO.empowerer }, [cite: 6]
      { name: 'Al-Wakil', meaning: 'Tempat Bersandar', img: 'https://image.pollinations.ai/prompt/bright%20serene%20majestic%20sanctuary%20with%20a%20massive%20solid%20glowing%20white%20stone%20pillar%20bathed%20in%20warm%20comforting%20golden%20sunlight%20safe%20haven%20ethereal%20bright%20optimistic%20cinematic%20realism?width=800&height=1280&nologo=true', audio: AUDIO.empowerer }, [cite: 6]
      { name: 'Al-Jabbar', meaning: 'Yang Maha Penunduk', img: 'https://image.pollinations.ai/prompt/cinematic%20macro%20shot%20cracked%20large%20crystal%20rock%20blinding%20liquid%20gold%20light%20moving%20from%20within%20sealing%20cracks%20like%20kintsugi%20pure%20light%20healing%20powerful?width=800&height=1280&nologo=true', audio: AUDIO.empowerer } [cite: 6, 7]
    ]
  },
  {
    id: 'opener',
    name: 'The Opener & Provider',
    desc: 'Pemberi Jalan & Rezeki. Menggeser rasa buntu menjadi optimisme dan kelimpahan.', [cite: 7, 8]
    color: 'from-emerald-900 to-teal-950', [cite: 8]
    cards: [
      { name: 'Al-Fattah', meaning: 'Maha Pembuka Jalan', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20tracking%20shot%20inside%20dense%20dark%20cave%20with%20wide%20opening%20thick%20bright%20god%20rays%20sunlight%20illuminating%20dancing%20dust%20particles%20pointing%20to%20a%20smooth%20clear%20path%20cinematic%20lighting%20unreal%20engine%205?width=800&height=1280&nologo=true', audio: AUDIO.opener }, [cite: 8]
      { name: 'Ar-Razzaq', meaning: 'Maha Pemberi Rezeki', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20emerald%20green%20crystal%20clear%20water%20spring%20flowing%20from%20rocks%20in%20middle%20of%20golden%20desert%20sand%20creating%20small%20stream%20with%20lush%20green%20grass%20and%20small%20flowers%20cinematic%20lighting%20abundance?width=800&height=1280&nologo=true', audio: AUDIO.opener }, [cite: 8]
      { name: 'Al-Wahhab', meaning: 'Maha Pemberi Karunia', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20ultra-wide%20shot%20clear%20night%20sky%20milky%20way%20massive%20golden%20meteor%20shower%20falling%20onto%20grassy%20field%20turning%20into%20warm%20glowing%20light%20dust%20particles%20cinematic%20awe-inspiring%20magical?width=800&height=1280&nologo=true', audio: AUDIO.opener }, [cite: 8]
      { name: 'Al-Mughni', meaning: 'Maha Pemberi Kekayaan', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20endless%20vast%20golden%20wheat%20field%20gently%20waving%20in%20wind%20during%20golden%20hour%20sunset%20soft%20white%20clouds%20radiating%20absolute%20wealth%20and%20prosperity%20cinematic%20peaceful?width=800&height=1280&nologo=true', audio: AUDIO.opener }, [cite: 8]
      { name: 'Al-Basit', meaning: 'Maha Melapangkan', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20cinematic%20macro%20time-lapse%20beautiful%20lotus%20flower%20fully%20blooming%20on%20still%20water%20center%20emitting%20soft%20cool%20light%20blue%20glow%20relaxing%20expanding%20hyper-detailed?width=800&height=1280&nologo=true', audio: AUDIO.opener } [cite: 8, 9]
    ]
  },
  {
    id: 'guide',
    name: 'The Guide & Enlightener',
    desc: 'Pemberi Petunjuk. Memberikan kejernihan mutlak saat butuh fokus dan ide.', [cite: 9, 10]
    color: 'from-purple-900 to-fuchsia-950', [cite: 10]
    cards: [
      { name: 'An-Nur', meaning: 'Yang Maha Bercahaya', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20medium%20shot%20inside%20pitch%20black%20ancient%20stone%20room%20glowing%20crystal%20glass%20lantern%20floating%20in%20center%20emitting%20bright%20soft%20bluish-white%20light%20piercing%20darkness%20revealing%20cosmic%20dust%20particles%20floating%20peacefully%20cinematic%20lighting%20unreal%20engine%205?width=800&height=1280&nologo=true&key=sk_ggEiQvWCbYoGWfMUuqaC0xKKaukSDhhu', audio: AUDIO.guide }, [cite: 10]
      { name: 'Al-Hadi', meaning: 'Maha Pemberi Petunjuk', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20wide%20shot%20perfectly%20calm%20frozen%20ice%20ocean%20at%20night%20clear%20night%20sky%20billions%20of%20stars%20one%20golden%20constellation%20shining%20brightest%20reflecting%20perfectly%20on%20ice%20creating%20a%20straight%20glowing%20guiding%20line%20forward%20cinematic%20ethereal?width=800&height=1280&nologo=true&key=sk_ggEiQvWCbYoGWfMUuqaC0xKKaukSDhhu', audio: AUDIO.guide }, [cite: 10]
      { name: 'Al-Khabir', meaning: 'Maha Mengetahui Detail', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20cinematic%20macro%20shot%20slow%20motion%20single%20clear%20water%20drop%20touching%20pitch%20black%20mirror-like%20still%20pool%20surface%20creating%20perfectly%20symmetrical%20circular%20ripples%20moving%20outwards%20sharp%20focus%20analytical%20vibe?width=800&height=1280&nologo=true&key=sk_ggEiQvWCbYoGWfMUuqaC0xKKaukSDhhu', audio: AUDIO.guide }, [cite: 10]
      { name: 'Al-Alim', meaning: 'Yang Maha Mengetahui', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20infinite%20surreal%20giant%20library%20one-point%20perspective%20perfectly%20symmetrical%20shelves%20filled%20with%20glowing%20scrolls%20of%20pure%20light%20instead%20of%20books%20deep%20knowledge%20database%20cinematic%20epic%20scale?width=800&height=1280&nologo=true&key=sk_ggEiQvWCbYoGWfMUuqaC0xKKaukSDhhu', audio: AUDIO.guide }, [cite: 10]
      { name: 'Al-Hakim', meaning: 'Yang Maha Bijaksana', img: 'https://image.pollinations.ai/prompt/8k%20resolution%20hyper-detailed%20low-angle%20shot%20massive%20ancient%20banyan%20tree%20roots%20firmly%20gripping%20earth%20intertwined%20with%20ancient%20temple%20ruins%20light%20mist%20silver%20moonlight%20shining%20harmony%20of%20nature%20and%20stone%20thousands%20of%20years%20old%20wisdom%20cinematic?width=800&height=1280&nologo=true&key=sk_ggEiQvWCbYoGWfMUuqaC0xKKaukSDhhu', audio: AUDIO.guide } [cite: 10, 11]
    ]
  },
  {
    id: 'grounding',
    name: 'The Absolute Grounding',
    desc: 'Pusat Kesadaran. Meruntuhkan ego dan menyadari posisi kita sebagai pengamat.', [cite: 11, 12]
    color: 'from-slate-900 to-black', [cite: 12]
    cards: [
      { name: 'Al-Awwal', meaning: 'Yang Maha Awal', img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800', audio: AUDIO.grounding }, [cite: 12]
      { name: 'Al-Akhir', meaning: 'Yang Maha Akhir', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800', audio: AUDIO.grounding }, [cite: 12]
      { name: 'Al-Khaliq', meaning: 'Yang Maha Pencipta', img: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=800', audio: AUDIO.grounding }, [cite: 12]
      { name: 'Al-Kabir', meaning: 'Yang Maha Besar', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800', audio: AUDIO.grounding }, [cite: 12]
      { name: 'Al-Muhaymin', meaning: 'Maha Mengawasi', img: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&q=80&w=800', audio: AUDIO.grounding } [cite: 12, 13]
    ]
  }
];

export default function App() {
  const [view, setView] = useState('home'); [cite: 13]
  const [activeCategory, setActiveCategory] = useState(null); [cite: 14]
  const [activeCard, setActiveCard] = useState(null); [cite: 14]
  const [isAudioMuted, setIsAudioMuted] = useState(false); [cite: 14]
  const audioRef = useRef(null); [cite: 15]

  const handleCategorySelect = (category) => { [cite: 16]
    setActiveCategory(category); [cite: 16]
    setView('gallery'); [cite: 16]
  };

  const handleCardSelect = (card) => { [cite: 17]
    setActiveCard(card); [cite: 17]
    setView('focus'); [cite: 17]
    setIsAudioMuted(false); [cite: 17]
    if (audioRef.current && card.audio) { [cite: 18]
      audioRef.current.src = card.audio; [cite: 18]
      audioRef.current.volume = 0.5; [cite: 19]
      const playPromise = audioRef.current.play(); [cite: 19]
      if (playPromise !== undefined) { [cite: 20]
        playPromise.catch(error => console.warn("Browser block:", error)); [cite: 20, 21]
      }
    }
  };

  const handleBack = () => { [cite: 21]
    if (audioRef.current) audioRef.current.pause(); [cite: 21, 22]
    if (view === 'focus') { [cite: 22]
      setView('gallery'); [cite: 22]
      setActiveCard(null); [cite: 22]
    } else if (view === 'gallery') { [cite: 23]
      setView('home'); [cite: 23]
      setActiveCategory(null); [cite: 23]
    }
  };

  const toggleAudio = () => { [cite: 24]
    if (!audioRef.current) return; [cite: 24]
    if (!isAudioMuted) { [cite: 25]
      audioRef.current.pause(); [cite: 25]
      setIsAudioMuted(true); [cite: 25]
    } else { [cite: 26]
      audioRef.current.play().catch(e => console.warn("Fail", e)); [cite: 26]
      setIsAudioMuted(false); [cite: 26]
    }
  };

  const HomeScreen = () => ( [cite: 27]
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif tracking-widest text-white mb-2">MR. CARD</h1> [cite: 27]
        <p className="text-slate-400 text-sm">Pilih kategori visual anchor sesuai kondisi mentalmu saat ini.</p> [cite: 27]
      </div>
      <div className="space-y-4">
        {categories.map((cat) => ( [cite: 27]
          <button key={cat.id} onClick={() => handleCategorySelect(cat)} className={`w-full text-left p-6 rounded-2xl bg-gradient-to-r ${cat.color} border border-white/10 hover:border-white/30 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 group`}> [cite: 28, 29]
            <h2 className="text-xl font-medium text-white mb-1 group-hover:text-amber-200 transition-colors">{cat.name}</h2> [cite: 28]
            <p className="text-slate-300 text-sm">{cat.desc}</p> [cite: 28]
          </button>
        ))}
      </div>
    </div>
  );

  const GalleryScreen = () => ( [cite: 30]
    <div className="max-w-5xl mx-auto py-8 px-6 min-h-screen flex flex-col">
      <button onClick={handleBack} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors w-fit"> [cite: 30]
        <ArrowLeft className="w-5 h-5 mr-2" /> Kembali ke Kategori [cite: 30]
      </button>
      <div className="mb-10">
        <h2 className="text-2xl font-serif text-amber-100">{activeCategory.name}</h2> [cite: 30]
        <p className="text-slate-400 mt-1">{activeCategory.desc}</p> [cite: 30]
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 flex-grow">
        {activeCategory.cards.map((card, idx) => ( [cite: 31]
          <div key={idx} onClick={() => handleCardSelect(card)} className="relative group cursor-pointer"> [cite: 31]
            <div className="aspect-[1/1.6] rounded-xl overflow-hidden border border-white/20 shadow-2xl relative transition-transform duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] bg-slate-800"> [cite: 31, 32]
              <img src={card.img} alt={card.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /> [cite: 32]
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div> [cite: 32]
              <div className="absolute bottom-0 left-0 w-full p-4 text-center"> [cite: 33]
                <h3 className="text-amber-100 font-serif text-lg md:text-xl tracking-wider">{card.name}</h3> [cite: 33]
                <p className="text-slate-300 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">{card.meaning}</p> [cite: 33]
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const FocusScreen = () => { [cite: 35]
    const [instructionState, setInstructionState] = useState('hidden'); [cite: 35]
    const [zenMode, setZenMode] = useState(false); [cite: 35]

    useEffect(() => { [cite: 36]
      const showTimer = setTimeout(() => setInstructionState('visible'), 2000); [cite: 36]
      const hideTimer = setTimeout(() => { [cite: 36]
        setInstructionState('faded'); [cite: 36]
        setZenMode(true); [cite: 36]
      }, 10000); [cite: 36]
      return () => { clearTimeout(showTimer); clearTimeout(hideTimer); }; [cite: 37]
    }, []);

    return ( [cite: 38]
      <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20 scale-110 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" style={{ backgroundImage: `url(${activeCard.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} /> [cite: 38]
        <div className="absolute top-6 w-full px-6 flex justify-between items-center z-20"> [cite: 39]
          <button onClick={handleBack} className="text-slate-400 hover:text-white p-2 bg-black/40 rounded-full backdrop-blur-md transition-colors"><X className="w-6 h-6" /></button> [cite: 39]
          <button onClick={toggleAudio} className="text-slate-400 hover:text-white p-2 bg-black/40 rounded-full backdrop-blur-md transition-colors"> [cite: 39]
            {isAudioMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />} [cite: 39, 40]
          </button>
        </div>
        <div className="relative z-10 animate-[scale-in_10s_ease-out_forwards]"> [cite: 40]
          <div className="w-[85vw] max-w-sm aspect-[1/1.6] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative bg-slate-900"> [cite: 40]
            <img src={activeCard.img} alt={activeCard.name} className="absolute inset-0 w-full h-full object-cover opacity-80" /> [cite: 40]
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 transition-opacity duration-[3000ms] ease-in-out ${zenMode ? 'opacity-0' : 'opacity-100'}`}></div> [cite: 41, 42]
            <div className={`absolute left-0 w-full px-6 text-center transition-all duration-[3000ms] ease-in-out animate-[fade-in_3s_ease-out_1s_forwards] opacity-0 ${zenMode ? 'top-[75%] scale-90' : 'top-[25%] scale-100'}`}> [cite: 42, 43]
              <h2 className="text-4xl font-serif text-amber-100/90 tracking-[0.2em] mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">{activeCard.name}</h2> [cite: 43]
              <p className="text-slate-200 text-sm tracking-widest uppercase opacity-90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">{activeCard.meaning}</p> [cite: 43]
              <div className={`mt-10 text-amber-50/90 font-serif text-sm leading-relaxed tracking-wide transition-opacity duration-[2000ms] ease-in-out drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${instructionState === 'visible' && !zenMode ? 'opacity-100' : 'opacity-0'}`}> [cite: 44]
                <p className="mb-4">Assalamu’alaikum Wahai Diri!</p> [cite: 44]
                <p className="mb-4">Terima kasih ya, kamu sudah berjuang dengan hebat hari ini…</p> [cite: 44]
                <p>Mari, kini saatnya kamu mengambil waktu sejenak untuk menenangkan diri dan top up energi lagi 😇</p> [cite: 44]
              </div>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `@keyframes scale-in { 0% { transform: scale(0.95); } 100% { transform: scale(1.02); } } @keyframes fade-in { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); [cite_start]} }`}} /> [cite: 45, 46, 47, 48, 49]
      </div>
    );
  };

  return ( [cite: 50]
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-amber-900"> [cite: 50]
      <audio ref={audioRef} loop preload="auto" /> [cite: 50]
      <div className="relative z-10"> [cite: 50]
        {view === 'home' && <HomeScreen />} [cite: 50]
        {view === 'gallery' && <GalleryScreen />} [cite: 50]
        {view === 'focus' && <FocusScreen />} [cite: 50]
      </div>
    </div> [cite: 51]
  );
}
