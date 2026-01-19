import React, { useState } from 'react';
import { VIDEO_COURSES } from '../constants';
import { VideoCourse } from '../types';
import { Play, ArrowLeft, Clock } from 'lucide-react';

interface VideoLibraryProps {
  onBack?: () => void;
}

export const VideoLibrary: React.FC<VideoLibraryProps> = ({ onBack }) => {
  const [activeVideo, setActiveVideo] = useState<VideoCourse | null>(null);

  if (activeVideo) {
    return (
      <div className="fixed inset-0 bg-onyx z-50 flex flex-col">
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            {/* Mock Video Player */}
            <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
                <Play size={48} className="text-white opacity-50" />
            </div>
            <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 left-4 p-2 bg-black/40 rounded-full text-white backdrop-blur-sm border border-white/10"
            >
                <ArrowLeft size={20} />
            </button>
        </div>
        
        <div className="flex-1 bg-onyx text-white p-6 overflow-y-auto">
            <h2 className="font-serif text-2xl font-bold mb-3">{activeVideo.title}</h2>
            <div className="flex items-center text-silver text-sm mb-6">
                <Clock size={16} className="mr-2 text-gold" />
                <span>{activeVideo.duration}</span>
                <span className="mx-2 text-muted">•</span>
                <span>Video Course</span>
            </div>
            <p className="text-silver/80 leading-relaxed">
                {activeVideo.description}
            </p>
            
            <div className="mt-8 pt-8 border-t border-charcoal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-6">Up Next</h3>
                {VIDEO_COURSES.filter(v => v.id !== activeVideo.id).map(v => (
                    <div key={v.id} onClick={() => setActiveVideo(v)} className="flex gap-4 mb-6 cursor-pointer group">
                        <div className="w-28 h-16 bg-charcoal rounded-lg flex-none overflow-hidden relative border border-white/5">
                             <img src={v.thumbnailUrl} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                             <div className="absolute inset-0 flex items-center justify-center">
                                <Play size={16} fill="white" className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                             </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="font-medium text-white text-sm group-hover:text-gold transition-colors">{v.title}</h4>
                            <span className="text-xs text-muted mt-1">{v.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 pt-8 px-6 bg-onyx min-h-full">
      <h1 className="font-serif text-3xl font-bold text-white mb-8">Video Courses</h1>
      
      <div className="grid gap-6">
        {VIDEO_COURSES.map((course) => (
          <div 
            key={course.id} 
            onClick={() => setActiveVideo(course)}
            className="group bg-charcoal rounded-2xl overflow-hidden cursor-pointer active:scale-[0.98] transition-all border border-white/5"
          >
            <div className="relative aspect-video bg-onyx">
              <img 
                src={course.thumbnailUrl} 
                alt={course.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl group-hover:scale-110 transition-transform">
                    <Play size={20} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium">
                {course.duration}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{course.title}</h3>
              <p className="text-silver text-sm line-clamp-2 leading-relaxed">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};