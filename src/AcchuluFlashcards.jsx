import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Volume2, ArrowLeft, Pencil, Grid2X2 } from 'lucide-react';

const teluguAlphabetData = [
  {
    letter: 'అ', letterTranslit: 'a',
    words: [
      { id: 'amma', full: 'అమ్మ', translit: 'Amma', english: 'Mother', image: 'amma.jpg' },
      { id: 'ayya', full: 'అయ్య', translit: 'Ayya', english: 'Father', image: 'ayya.jpg' },
      { id: 'arati', full: 'అరటి', translit: 'Arati', english: 'Banana', image: 'arati.jpg' },
      { id: 'anaasa', full: 'అనాస', translit: 'Anaasa', english: 'Pineapple', image: 'anaasa.jpg' },
    ]
  },
  {
    letter: 'ఆ', letterTranslit: 'aa',
    words: [
      { id: 'aavu', full: 'ఆవు', translit: 'Aavu', english: 'Cow', image: 'aavu.jpg' },
      { id: 'aaku', full: 'ఆకు', translit: 'Aaku', english: 'Leaf', image: 'aaku.jpg' },
      { id: 'aata', full: 'ఆట', translit: 'Aata', english: 'Play/Game', image: 'aata.jpg' },
      { id: 'aagu', full: 'ఆగు', translit: 'Aagu', english: 'Stop', image: 'aagu.jpg' },
    ]
  },
  // ... (You can copy/paste the rest of your letters here following the exact same pattern)
];

export default function AcchuluFlashcards() {
  const initialTab = teluguAlphabetData.length > 0 ? teluguAlphabetData[0].letter : '';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [viewMode, setViewMode] = useState('words'); 
  const [availableVoices, setAvailableVoices] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadVoices = () => setAvailableVoices(window.speechSynthesis.getVoices());
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Professional Audio System: Tries local MP3 first, falls back to TTS
  const playAudio = (text, audioId) => {
    setIsPlaying(true);
    
    // Attempt to play authentic local recording (e.g., 'a.mp3' or 'amma.mp3')
    const audio = new Audio(`${process.env.PUBLIC_URL}/audio/${audioId}.mp3`);
    
    audio.play().then(() => {
      audio.onended = () => setIsPlaying(false);
    }).catch(() => {
      // Fallback to Browser TTS if MP3 is missing
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'te-IN';
        const teluguVoice = availableVoices.find(v => v.lang.includes('te'));
        if (teluguVoice) utterance.voice = teluguVoice;
        utterance.rate = 0.8;
        utterance.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
      } else {
        setIsPlaying(false);
      }
    });
  };

  const activeGroup = teluguAlphabetData.find(group => group.letter === activeTab);

  const renderWord = (word) => {
      let i = 0;
      let firstPart = "";
      if (word.length > 0) { firstPart += word[i]; i++; }

      while (i < word.length) {
          const charCode = word.charCodeAt(i);
          if (
              (charCode >= 0x0C01 && charCode <= 0x0C03) || 
              (charCode >= 0x0C3E && charCode <= 0x0C56) || 
              charCode === 0x0C62 || charCode === 0x0C63
          ) {
              firstPart += word[i]; i++;
          } else { break; }
      }
      const restOfWord = word.slice(i);
      
      return (
          <div className="flex items-center justify-center">
              <span className="font-bold text-3xl md:text-5xl text-[#8C1515] mr-0.5 drop-shadow-sm">{firstPart}</span>
              <span className="font-bold text-xl md:text-3xl text-gray-800 mt-1 md:mt-2">{restOfWord}</span>
          </div>
      );
  };

  return (
    // 'h-screen overflow-hidden' completely prevents the page from scrolling
    <div className="flex flex-col items-center h-screen bg-stone-100 p-2 md:p-4 font-sans overflow-hidden">
      
      {/* Main Container dynamically fills available height */}
      <div className="max-w-6xl w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col">
        
        {/* Header Elements (Fixed Height) */}
        <div className="flex-none bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
          <Link to="/alphabets" className="text-gray-500 hover:text-[#8C1515] font-medium text-sm flex items-center transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Alphabets
          </Link>
        </div>

        <div className="flex-none bg-gradient-to-r from-[#8C1515] to-red-900 p-2 flex overflow-x-auto scrollbar-hide shadow-md z-10">
          <div className="flex gap-2 w-full max-w-4xl mx-auto">
            {teluguAlphabetData.map((group) => (
              <button 
                key={group.letter}
                onClick={() => { setActiveTab(group.letter); setViewMode('words'); }}
                className={`flex-1 py-2 px-4 rounded-xl text-xl font-bold transition-all whitespace-nowrap ${
                  activeTab === group.letter ? 'bg-white text-[#8C1515] shadow-inner scale-105' : 'hover:bg-white/20 text-white opacity-90'
                }`}
              >
                {group.letter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-none flex justify-center gap-4 p-3 md:p-4 bg-stone-50 border-b border-gray-200">
          <button 
            onClick={() => setViewMode('trace')}
            className={`flex items-center px-6 py-2 rounded-full font-bold transition-all ${
              viewMode === 'trace' ? 'bg-[#8C1515] text-white shadow-md scale-105' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            <Pencil className="w-4 h-4 mr-2" /> Trace {activeGroup?.letter}
          </button>
          <button 
            onClick={() => setViewMode('words')}
            className={`flex items-center px-6 py-2 rounded-full font-bold transition-all ${
              viewMode === 'words' ? 'bg-[#8C1515] text-white shadow-md scale-105' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            <Grid2X2 className="w-4 h-4 mr-2" /> Words with {activeGroup?.letter}
          </button>
        </div>

        {/* Dynamic Canvas Area (Shrinks/Grows to fit remaining space) */}
        <div className="flex-1 min-h-0 bg-stone-100 relative p-2 md:p-4 flex items-center justify-center">
          
          {viewMode === 'trace' && (
            <div className="flex flex-col md:flex-row w-full h-full bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative">
              <div 
                className="flex-1 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 bg-stone-50 relative group cursor-pointer" 
                onClick={() => playAudio(activeGroup?.letter, activeGroup?.letterTranslit)}
              >
                <button className="absolute top-4 left-4 p-3 bg-white hover:bg-gray-100 rounded-full shadow-md text-gray-700 transition-all z-10">
                  <Volume2 className={`w-6 h-6 ${isPlaying ? 'text-[#8C1515] animate-pulse' : ''}`} />
                </button>
                <span className="text-[8rem] md:text-[14rem] font-bold text-[#8C1515] drop-shadow-sm leading-none group-hover:scale-105 transition-transform duration-300">
                  {activeGroup?.letter}
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center bg-white relative">
                <div className="w-full h-full relative flex items-center justify-center p-4">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/${activeGroup?.letterTranslit}-trace.gif`} 
                    alt={`Trace ${activeGroup?.letter}`}
                    className="max-w-full max-h-full object-contain relative z-10"
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} 
                  />
                  {/* Fallback box if GIF is missing */}
                  <div className="hidden absolute inset-0 m-8 border-4 border-dashed border-gray-300 rounded-3xl flex-col items-center justify-center text-gray-400 z-0">
                    <Pencil className="w-8 h-8 mb-2 opacity-50" />
                    <p className="text-center px-4 text-sm">Add <strong>{activeGroup?.letterTranslit}-trace.gif</strong> to /public/images/</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {viewMode === 'words' && (
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Anchor Button */}
              <div 
                className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#8C1515] hover:bg-red-900 text-white rounded-full items-center justify-center shadow-2xl z-20 border-8 border-stone-100 cursor-pointer transition-colors group"
                onClick={() => playAudio(activeGroup?.letter, activeGroup?.letterTranslit)}
              >
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-bold leading-none mt-2">{activeGroup?.letter}</span>
                  <Volume2 className="w-5 h-5 mt-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Strict Flex Grid to constrain height */}
              <div className="grid grid-cols-2 gap-2 md:gap-4 w-full h-full max-h-full">
                {activeGroup?.words.map((word) => (
                  <div 
                    key={word.id} 
                    onClick={() => playAudio(word.full, word.id)}
                    className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#8C1515] cursor-pointer h-full min-h-0"
                  >
                    {/* Fixed Top */}
                    <div className="flex-none bg-stone-50 py-1 md:py-2 text-center border-b border-gray-200 flex items-center justify-center relative">
                      {renderWord(word.full)}
                      <Volume2 className="hidden md:block absolute right-3 w-4 h-4 text-gray-400" />
                    </div>
                    
                    {/* Dynamic Middle (Image strictly contained) */}
                    <div className="flex-1 min-h-0 relative bg-gray-100">
                      <img 
                        src={`${process.env.PUBLIC_URL}/images/${word.image}`} 
                        alt={word.english} 
                        className="absolute inset-0 w-full h-full object-cover object-top" 
                        onError={(e) => { 
                          e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80'; 
                        }}
                      />
                    </div>
                    
                    {/* Fixed Bottom */}
                    <div className="flex-none p-1 md:p-2 text-center bg-white border-t border-gray-200">
                      <div className="text-[#8C1515] font-bold uppercase tracking-widest text-xs">{word.translit}</div>
                      <div className="text-gray-600 font-medium text-xs md:text-sm">{word.english}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}