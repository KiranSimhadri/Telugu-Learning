import React from 'react';
import { Link } from 'react-router-dom';
import { Type, BookOpen, Activity, MessageCircle } from 'lucide-react';

// Centralized configuration array for easy addition/deletion of modules
const learningModules = [
  {
    id: 'alphabets',
    title: 'Alphabets (వర్ణమాల)',
    description: 'Master the script: Acchulu (Vowels), Hallulu (Consonants), Gunintaalu, and Ottulu.',
    icon: <Type className="w-8 h-8" />,
    link: '/alphabets', // <-- Change this line
    status: 'active'
      // Removed the extra closing brace here
  },
  {
    id: 'vocabulary',
    title: 'Vocabulary (పదకోశం)',
    description: 'Build your word bank: Numbers, Places, Food, and Traditional Moon Phases.',
    icon: <BookOpen className="w-8 h-8" />,
    link: '/vocabulary',
    status: 'inactive'
  },
  {
    id: 'verbs',
    title: 'Verbs & Tenses (క్రియలు)',
    description: 'Learn action words and how to conjugate them in past, present, and future.',
    icon: <Activity className="w-8 h-8" />,
    link: '/verbs',
    status: 'inactive'
  },
  {
    id: 'sentences',
    title: 'Sentences (వాక్యాలు)',
    description: 'Construct full sentences, ask questions, and engage in daily conversation.',
    icon: <MessageCircle className="w-8 h-8" />,
    link: '/sentences',
    status: 'inactive'
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto mt-12">
        
        <header className="mb-14 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Telugu Learning Portal</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive, interactive platform designed to take you from foundational script recognition to conversational fluency.
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-6">
          {learningModules.map((module) => (
            module.status === 'active' ? (
              <Link 
                key={module.id} 
                to={module.link} 
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-200 group block flex items-start"
              >
                <div className="bg-red-50 min-w-[4rem] h-16 rounded-full flex items-center justify-center mr-6 group-hover:bg-[#8C1515] text-[#8C1515] group-hover:text-white transition-colors">
                  {module.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{module.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{module.description}</p>
                </div>
              </Link>
            ) : (
              <div 
                key={module.id} 
                className="bg-gray-50 p-8 rounded-3xl border border-gray-200 opacity-60 flex items-start cursor-not-allowed"
              >
                <div className="bg-gray-200 min-w-[4rem] h-16 rounded-full flex items-center justify-center mr-6 text-gray-400">
                  {module.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{module.title} <span className="text-sm font-normal text-gray-500 ml-2">(Coming Soon)</span></h2>
                  <p className="text-gray-600 leading-relaxed">{module.description}</p>
                </div>
              </div>
            )
          ))}
        </div>

      </div>
    </div>
  );
}