import React, { useState } from 'react';
import { PRAYER_CATEGORIES, PRAYERS } from '../constants';
import { Prayer } from '../types';
import { ArrowLeft, Heart, Share, Users, Compass, Sun, Briefcase, Activity } from 'lucide-react';
import { Button } from './ui/Button';

// Icon mapping
const IconMap: Record<string, any> = {
    Heart, Users, Compass, Sun, Briefcase, Activity
};

interface PrayersProps {
    // Props if needed
}

export const Prayers: React.FC<PrayersProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activePrayer, setActivePrayer] = useState<Prayer | null>(null);

  // Detail View
  if (activePrayer) {
    return (
      <div className="fixed inset-0 bg-onyx z-50 flex flex-col overflow-y-auto pb-safe">
         <div className="sticky top-0 bg-onyx/90 backdrop-blur-md border-b border-gray-900 p-4 flex items-center justify-between z-10">
            <button 
                onClick={() => setActivePrayer(null)}
                className="p-2 -ml-2 hover:bg-gray-800 rounded-full text-white"
            >
                <ArrowLeft size={24} />
            </button>
            <div className="flex gap-2">
                 <button className="p-2 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors">
                    <Heart size={20} />
                </button>
                <button className="p-2 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors">
                    <Share size={20} />
                </button>
            </div>
         </div>

         <div className="p-6 max-w-2xl mx-auto w-full flex-1 flex flex-col">
            <div className="mb-10 text-center">
                <h2 className="font-serif text-2xl text-white mb-2">{activePrayer.title}</h2>
                <div className="h-0.5 w-12 bg-white/20 mx-auto rounded-full"></div>
            </div>

            <div className="bg-charcoal rounded-[2rem] p-8 mb-8 border border-gray-800 relative shadow-2xl">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 text-center">Scripture Foundation</h3>
                <p className="font-serif italic text-xl text-white leading-relaxed mb-6 text-center opacity-90">
                    "{activePrayer.scripture}"
                </p>
                <p className="text-xs font-medium text-gray-400 text-center tracking-widest uppercase">— {activePrayer.scriptureReference}</p>
            </div>

            <div className="mb-12">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-6 text-center">Prayer</h3>
                <div className="prose prose-invert prose-lg text-gray-300 leading-9 font-light text-center">
                    {activePrayer.content}
                </div>
            </div>

            <div className="mt-auto mb-8">
                 <Button fullWidth variant="outline" onClick={() => setActivePrayer(null)} className="border-white/20 text-white hover:bg-white/5">
                    Amen
                 </Button>
            </div>
         </div>
      </div>
    );
  }

  // List View (Filtered by Category)
  if (selectedCategory) {
    const categoryTitle = PRAYER_CATEGORIES.find(c => c.id === selectedCategory)?.title;
    const categoryPrayers = PRAYERS.filter(p => p.categoryId === selectedCategory);

    return (
        <div className="pb-24 pt-8 px-6 min-h-full bg-onyx">
            <div className="flex items-center gap-4 mb-8">
                <button 
                    onClick={() => setSelectedCategory(null)}
                    className="p-2 -ml-2 hover:bg-gray-800 rounded-full text-white"
                >
                    <ArrowLeft size={24} />
                </button>
                <h1 className="font-light text-2xl text-white tracking-widest uppercase">{categoryTitle}</h1>
            </div>

            <div className="space-y-4">
                {categoryPrayers.length > 0 ? (
                    categoryPrayers.map(prayer => (
                        <div 
                            key={prayer.id}
                            onClick={() => setActivePrayer(prayer)}
                            className="bg-black border border-gray-800 p-6 rounded-[1.5rem] cursor-pointer hover:border-white/30 transition-all group"
                        >
                            <h3 className="font-medium text-lg text-white mb-2 group-hover:text-gray-200 transition-colors">{prayer.title}</h3>
                            <p className="text-xs text-gray-500 truncate uppercase tracking-wider">{prayer.scriptureReference}</p>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 opacity-50">
                        <Heart size={48} className="mx-auto mb-4 text-gray-600" />
                        <p className="text-gray-400 font-light">More prayers coming soon.</p>
                    </div>
                )}
            </div>
        </div>
    );
  }

  // Category Grid View
  return (
    <div className="pb-24 pt-8 px-6 bg-onyx min-h-full">
      <h1 className="font-light text-3xl text-white mb-2 tracking-wide">Prayer Guides</h1>
      <p className="text-gray-500 mb-8 font-light">Select a topic to focus your heart.</p>
      
      <div className="grid grid-cols-2 gap-4">
        {PRAYER_CATEGORIES.map((category) => {
            const Icon = IconMap[category.icon] || Heart;
            return (
                <button 
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="bg-black h-40 rounded-[2rem] border border-gray-900 flex flex-col items-center justify-center gap-4 p-4 hover:border-gray-700 transition-all group"
                >
                    <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                        <Icon size={28} strokeWidth={1} />
                    </div>
                    <span className="text-white text-xs font-light tracking-[0.2em] uppercase text-center leading-relaxed">
                        {category.title}
                    </span>
                </button>
            );
        })}
      </div>
    </div>
  );
};