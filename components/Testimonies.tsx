import React from 'react';
import { useTestimonies } from '../lib/useContent';
import { ArrowLeft, PlayCircle } from 'lucide-react';

interface TestimoniesProps {
  onBack: () => void;
}

export const Testimonies: React.FC<TestimoniesProps> = ({ onBack }) => {
  const { data: testimonies, loading } = useTestimonies();

  return (
    <div className="pb-24 pt-8 px-6 bg-onyx min-h-full">
        <div className="flex items-center gap-4 mb-8">
            <button 
                onClick={onBack}
                className="p-2 -ml-2 hover:bg-gray-800 rounded-full text-white"
            >
                <ArrowLeft size={24} />
            </button>
            <h1 className="font-light text-3xl text-white tracking-wide">Testimonies</h1>
        </div>

        <div className="grid gap-6">
            {testimonies.map((t) => (
                <div key={t.id} className="bg-black rounded-[2rem] overflow-hidden border border-gray-800 group cursor-pointer hover:border-gray-600 transition-all">
                    <div className="flex p-6 gap-5">
                        <img 
                            src={t.thumbnailUrl} 
                            alt={t.name}
                            className="w-16 h-16 rounded-full object-cover grayscale border-2 border-gray-800 group-hover:border-white transition-colors"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-white font-medium text-lg leading-tight mb-1">{t.title}</h3>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">{t.name}</p>
                                </div>
                                <PlayCircle size={24} className="text-gray-600 group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-sm text-gray-400 font-light leading-relaxed">
                                {t.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};