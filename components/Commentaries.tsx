import React from 'react';
import { ArrowLeft, Book } from 'lucide-react';

interface CommentariesProps {
  onBack: () => void;
}

export const Commentaries: React.FC<CommentariesProps> = ({ onBack }) => {
  return (
    <div className="h-full flex flex-col bg-onyx px-6 pt-8 pb-24">
       <div className="flex items-center gap-4 mb-8">
            <button 
                onClick={onBack}
                className="p-2 -ml-2 hover:bg-gray-800 rounded-full text-white"
            >
                <ArrowLeft size={24} />
            </button>
            <h1 className="font-light text-3xl text-white tracking-wide">Commentaries</h1>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-full bg-charcoal border border-gray-800 flex items-center justify-center mb-6 shadow-lg shadow-gold/5">
                <Book size={40} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-serif text-white mb-3">Coming Soon</h2>
            <div className="h-0.5 w-12 bg-white/20 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 font-light max-w-xs leading-relaxed text-sm">
                We are currently curating in-depth commentaries to help you dive deeper into the Word. Stay tuned for updates.
            </p>
        </div>
    </div>
  );
};