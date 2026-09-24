import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Type, Grid, Edit3, Layers } from 'lucide-react';

const alphabetSections = [
  {
    id: 'acchulu',
    title: 'అచ్చులు (Acchulu)',
    subtitle: 'The Vowels',
    description: '16 independent vowels that form the foundation of Telugu pronunciation.',
    icon: <Type className="w-8 h-8" />,
    link: '/alphabets/acchulu',
    status: 'active'
  },
  {
    id: 'hallulu',
    title: 'హల్లులు (Hallulu)',
    subtitle: 'The Consonants',
    description: '36 base consonants divided into logical phonetic groupings.',
    icon: <Grid className="w-8 h-8" />,
    link: '/alphabets/hallulu',
    status: 'inactive'
  },
  {
    id: 'gunintaalu',
    title: 'గుణింతాలు (Gunintaalu)',
    subtitle: 'Vowel Markers',
    description: 'Learn how vowels attach to consonants to form new syllables.',
    icon: <Edit3 className="w-8 h-8" />,
    link: '/alphabets/gunintaalu',
    status: 'inactive'
  },
  {
    id: 'ottulu',
    title: 'ఒత్తులు (Ottulu)',
    subtitle: 'Consonant Blends',
    description: 'Master the complex modifiers: The Headless, Twins, and Shapeshifters.',
    icon: <Layers className="w-8 h-8" />,
    link: '/alphabets/ottulu',
    status: 'inactive'
  }
];

export default function AlphabetDashboard() {
  return (
    <div className="min-h-screen bg-stone-50 p-6 font-sans">
      <div className="max-w-5xl mx-auto mt-8">
        
        {/* Navigation Bar */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-[#8C1515] transition-colors font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Alphabets (వర్ణమాల)</h1>
          <p className="text-lg text-gray-600">
            The Telugu script is deeply logical and phonetic. Proceed through these four stages to achieve full reading and writing proficiency.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-6">
          {alphabetSections.map((section) => (
            section.status === 'active' ? (
              <Link 
                key={section.id} 
                to={section.link} 
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-200 block"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-red-50 p-3 rounded-xl text-[#8C1515] mr-4">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                    <p className="text-sm font-semibold text-[#8C1515] uppercase tracking-wide">{section.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600">{section.description}</p>
              </Link>
            ) : (
              <div 
                key={section.id} 
                className="bg-gray-50 p-6 rounded-2xl border border-gray-200 opacity-60 cursor-not-allowed"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 p-3 rounded-xl text-gray-500 mr-4">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{section.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-500">{section.description}</p>
                <span className="inline-block mt-3 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-200 px-2 py-1 rounded">Coming Soon</span>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}