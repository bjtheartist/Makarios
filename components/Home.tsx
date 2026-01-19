import React from 'react';
import { DAILY_VERSE, PRAYER_CATEGORIES, TESTIMONIES } from '../constants';
import { PlayCircle, Heart, Book, GraduationCap, HelpCircle, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="pb-32 pt-10 px-6 space-y-12 bg-onyx min-h-full">
      {/* Header */}
      <div>
        <p className="font-light text-3xl text-white tracking-wide">Welcome Back!</p>
      </div>

      {/* Daily Verse Card */}
      <div className="bg-black rounded-lg p-8 border border-gray-800 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Book size={100} className="text-white" />
        </div>
        <h3 className="text-gray-400 font-light text-lg mb-4 tracking-wide text-center relative z-10">
            {DAILY_VERSE.reference}
        </h3>
        <p className="font-light text-xl md:text-2xl text-center leading-relaxed text-white relative z-10">
            “{DAILY_VERSE.text}”
        </p>
      </div>

      {/* Explore Grid */}
      <div>
        <h2 className="text-xl font-light text-white mb-6 tracking-wide">Explore</h2>
        <div className="grid grid-cols-2 gap-4">
          <ExploreButton 
            icon={<PlayCircle size={20} className="text-white" />} 
            label="Video Courses" 
            onClick={() => onNavigate('videos')} 
          />
          <ExploreButton 
            icon={<Heart size={20} className="text-white" />} 
            label="Testimonies" 
            onClick={() => onNavigate('testimonies')} 
          />
          <ExploreButton 
            icon={<Book size={20} className="text-white" />} 
            label="Commentaries" 
            onClick={() => onNavigate('commentaries')} 
          />
          <ExploreButton 
            icon={<GraduationCap size={20} className="text-white" />} 
            label="Lessons & quizzes" 
            onClick={() => onNavigate('lessons')} 
          />
          <ExploreButton 
            icon={<HelpCircle size={20} className="text-white" />} 
            label="Bible Trivia" 
            onClick={() => onNavigate('trivia')} 
          />
          <ExploreButton 
            icon={<div className="rotate-[-15deg]"><Heart size={20} className="text-white" /></div>} 
            label="Prayers" 
            onClick={() => onNavigate('prayers')} 
          />
        </div>
      </div>

      {/* Encouraging Testimonies */}
      <div>
        <h2 className="text-xl font-light text-white mb-6 tracking-wide">Encouraging Testimonies</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {TESTIMONIES.map((testimony) => (
             <div 
                key={testimony.id} 
                onClick={() => onNavigate('testimonies')}
                className="min-w-[300px] bg-black rounded-[2rem] p-5 flex items-center gap-4 border border-gray-900 shadow-lg cursor-pointer hover:border-gray-700 transition-colors"
             >
                <img 
                    src={testimony.thumbnailUrl} 
                    alt={testimony.name}
                    className="w-20 h-20 rounded-full object-cover grayscale border-2 border-gray-800"
                />
                <div className="flex-1">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{testimony.name}</p>
                    <p className="text-xs text-gray-300 font-light leading-relaxed mb-3 line-clamp-2">
                        {testimony.description}
                    </p>
                    <div className="flex justify-end">
                         <ArrowRight size={16} className="text-white" />
                    </div>
                </div>
             </div>
          ))}
        </div>
      </div>

      {/* Let's Pray For */}
      <div>
        <h2 className="text-xl font-light text-white mb-6 tracking-wide">Let's Pray For</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {PRAYER_CATEGORIES.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => onNavigate('prayers')}
              className="min-w-[140px] h-[160px] bg-black border border-gray-900 rounded-[2.5rem] flex flex-col items-center justify-center p-4 text-center hover:border-gray-700 transition-colors group"
            >
              <span className="text-xs text-white font-light uppercase tracking-widest leading-loose group-hover:text-white/80">
                  {cat.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper Component for Explore Grid
const ExploreButton = ({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) => (
    <button 
        onClick={onClick}
        className="bg-black h-16 rounded-full border border-gray-800 flex items-center px-6 gap-4 hover:bg-gray-900 transition-colors group"
    >
        <div className="opacity-80 group-hover:opacity-100 transition-opacity">
            {icon}
        </div>
        <span className="text-sm font-light text-white tracking-wide text-left">{label}</span>
    </button>
);