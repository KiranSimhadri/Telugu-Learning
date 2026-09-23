import React, { useState } from 'react';
import { Volume2, Eye, EyeOff, Image as ImageIcon } from 'lucide-react';

// --- ROBUST IMAGE COMPONENT ---
const CardImage = ({ src, alt }) => {
  const [imageStatus, setImageStatus] = useState('loading');

  return (
    <div className="w-full h-40 bg-gray-100 rounded-t-2xl overflow-hidden relative border-b border-gray-100">
      {imageStatus === 'loading' && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-gray-400 opacity-50" />
        </div>
      )}
      {imageStatus === 'error' && (
        <div className="absolute inset-0 bg-red-50 flex flex-col items-center justify-center text-red-300 p-2">
            <ImageIcon className="w-8 h-8 mb-1" />
            <span className="text-xs text-center font-medium">Image unavailable</span>
        </div>
      )}
      <img 
        src={src} 
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageStatus('loaded')}
        onError={() => setImageStatus('error')}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// --- ACCHULU DATA (Crowdsourced from Students) ---
const acchuluData = [
  {
    letter: 'అ',
    title: 'అ (A)',
    words: [
      { id: 'a1', prefix: 'అ', suffix: 'మ్మ', full: 'అమ్మ', translit: 'Amma', english: 'Mother', image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=400&q=80' },
      { id: 'a2', prefix: 'అ', suffix: 'మ్మాయి', full: 'అమ్మాయి', translit: 'Ammayi', english: 'Girl', image: 'https://images.unsplash.com/photo-1517677129300-07b130802f46?w=400&q=80' },
      { id: 'a3', prefix: 'అ', suffix: 'వును', full: 'అవును', translit: 'Avunu', english: 'Yes', image: 'https://images.unsplash.com/photo-1584282574681-3604f3586ff5?w=400&q=80' },
      { id: 'a4', prefix: 'అ', suffix: 'క్కడ', full: 'అక్కడ', translit: 'Akkada', english: 'There', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80' },
      { id: 'a5', prefix: 'అ', suffix: 'క్షరం', full: 'అక్షరం', translit: 'Aksharam', english: 'Letter/Alphabet', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80' },
    ]
  },
  {
    letter: 'ఆ',
    title: 'ఆ (Aa)',
    words: [
      { id: 'aa1', prefix: 'ఆ', suffix: 'కలి', full: 'ఆకలి', translit: 'Aakali', english: 'Hunger', image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&q=80' },
      { id: 'aa2', prefix: 'ఆ', suffix: 'కు', full: 'ఆకు', translit: 'Aaku', english: 'Leaf', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&q=80' },
      { id: 'aa3', prefix: 'ఆ', suffix: 'నందం', full: 'ఆనందం', translit: 'Aanandam', english: 'Happiness', image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&q=80' },
      { id: 'aa4', prefix: 'ఆ', suffix: 'వేశం', full: 'ఆవేశం', translit: 'Aavesham', english: 'Emotion/Anger', image: 'https://images.unsplash.com/photo-1544215286-a979ce8590cb?w=400&q=80' },
    ]
  },
  {
    letter: 'ఇ',
    title: 'ఇ (I)',
    words: [
      { id: 'i1', prefix: 'ఇ', suffix: 'దిగో', full: 'ఇదిగో', translit: 'Idigo', english: 'Here it is', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80' },
      { id: 'i2', prefix: 'ఇ', suffix: 'ష్టం', full: 'ఇష్టం', translit: 'Ishtam', english: 'Favorite/Liking', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&q=80' },
      { id: 'i3', prefix: 'ఇ', suffix: 'డ్లీ', full: 'ఇడ్లీ', translit: 'Idli', english: 'Idli', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80' },
      { id: 'i4', prefix: 'ఇ', suffix: 'ద్దరు', full: 'ఇద్దరు', translit: 'Iddaru', english: 'Two people', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80' },
    ]
  },
  {
    letter: 'ఈ',
    title: 'ఈ (Ee)',
    words: [
      { id: 'ee1', prefix: 'ఈ', suffix: 'గ', full: 'ఈగ', translit: 'Eega', english: 'Housefly', image: 'https://images.unsplash.com/photo-1590502593747-422e067c2349?w=400&q=80' },
      { id: 'ee2', prefix: 'ఈ', suffix: 'త', full: 'ఈత', translit: 'Eetha', english: 'Swimming', image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&q=80' },
      { id: 'ee3', prefix: 'ఈ', suffix: 'క', full: 'ఈక', translit: 'Eeka', english: 'Feather', image: 'https://images.unsplash.com/photo-1515589652516-1f9e2b83ebde?w=400&q=80' },
    ]
  },
  {
    letter: 'ఉ',
    title: 'ఉ (U)',
    words: [
      { id: 'u1', prefix: 'ఉ', suffix: 'డత', full: 'ఉడత', translit: 'Udata', english: 'Squirrel', image: 'https://images.unsplash.com/photo-1507666405895-422eee7d517f?w=400&q=80' },
      { id: 'u2', prefix: 'ఉ', suffix: 'ప్పు', full: 'ఉప్పు', translit: 'Uppu', english: 'Salt', image: 'https://images.unsplash.com/photo-1628268909376-e8c5dfdc7ee5?w=400&q=80' },
      { id: 'u3', prefix: 'ఉ', suffix: 'ల్లిపాయ', full: 'ఉల్లిపాయ', translit: 'Ullipaya', english: 'Onion', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&q=80' },
    ]
  },
  {
    letter: 'ఊ',
    title: 'ఊ (Oo)',
    words: [
      { id: 'oo1', prefix: 'ఊ', suffix: 'రు', full: 'ఊరు', translit: 'Ooru', english: 'Village/Town', image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=400&q=80' },
      { id: 'oo2', prefix: 'ఊ', suffix: 'యల', full: 'ఊయల', translit: 'Ooyala', english: 'Swing', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80' },
      { id: 'oo3', prefix: 'ఊ', suffix: 'పిరి', full: 'ఊపిరి', translit: 'Oopiri', english: 'Breath', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80' },
    ]
  }
];

export default function AcchuluFlashcards() {
  const [activeTab, setActiveTab] = useState(acchuluData[0].letter);
  const [showHints, setShowHints] = useState(true);

  const activeGroup = acchuluData.find(group => group.letter === activeTab);

  const playAudio = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'te-IN';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-[100dvh] bg-red-50 p-2 md:p-6 font-sans">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white flex flex-col h-auto min-h-[85vh]">
        
        {/* Header Tabs & Controls */}
        <div className="bg-[#8C1515] p-3 flex justify-between items-center text-white shadow-md z-10 sticky top-0 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 w-full">
            {acchuluData.map((group) => (
              <button 
                key={group.letter}
                onClick={() => setActiveTab(group.letter)}
                className={`flex-1 py-2 px-4 rounded-xl text-xl font-bold transition-all ${
                  activeTab === group.letter 
                    ? 'bg-white text-[#8C1515] shadow-inner' 
                    : 'hover:bg-white/20 text-white opacity-90'
                }`}
              >
                {group.letter}
              </button>
            ))}
          </div>
          
          {/* Challenge Mode Toggle */}
          <button 
            onClick={() => setShowHints(!showHints)} 
            className="ml-4 p-3 bg-red-900/50 rounded-full hover:bg-red-900 transition-colors shadow-lg border border-red-800"
            title={showHints ? "Hide English & Transliteration" : "Show English & Transliteration"}
          >
            {showHints ? <Eye className="w-5 h-5 text-red-100" /> : <EyeOff className="w-5 h-5 text-red-100" />}
          </button>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 p-6 bg-red-50/30 overflow-y-auto animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Words starting with '{activeGroup.letter}'</h2>
            <p className="text-gray-500 mt-2">Click any card to hear the pronunciation.</p>
          </div>
          
          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeGroup.words.map((item) => (
              <div 
                  key={item.id} 
                  onClick={() => playAudio(item.full)}
                  className="bg-white rounded-2xl shadow-sm border border-red-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 hover:border-red-300 transition-all cursor-pointer group"
              >
                  {/* Image Slot */}
                  <CardImage src={item.image} alt={item.english} />
                  
                  {/* Text Content */}
                  <div className="p-5 w-full flex flex-col items-center">
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">
                          <span style={{ color: '#8C1515' }}>{item.prefix}</span>
                          {item.suffix}
                      </h3>
                      
                      {/* Hint Container (Collapses when Challenge Mode is active) */}
                      <div className={`flex flex-col items-center w-full transition-all duration-300 ${showHints ? 'opacity-100 max-h-20 mt-2' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                          <p className="text-[#8C1515] text-sm font-semibold tracking-wide uppercase">{item.translit}</p>
                          <div className="h-px bg-gray-200 w-3/4 my-2"></div>
                          <p className="text-gray-600 font-medium">{item.english}</p>
                      </div>
                  </div>

                  {/* Audio Icon Hint */}
                  <div className="w-full bg-gray-50 p-3 rounded-b-2xl border-t border-gray-100 flex justify-center text-gray-400 group-hover:text-[#8C1515] transition-colors">
                      <Volume2 className="w-5 h-5" />
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}