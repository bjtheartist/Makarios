import React, { useState } from 'react';
import { useLessons } from '../lib/useContent';
import { Lesson } from '../types';
import { ArrowLeft, BookOpen, Check } from 'lucide-react';
import { Button } from './ui/Button';

interface LessonsProps {
  onBack: () => void;
}

export const Lessons: React.FC<LessonsProps> = ({ onBack }) => {
  const { data: lessons, loading } = useLessons();
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  
  // Lesson Reader View
  if (activeLesson) {
    return (
      <div className="fixed inset-0 bg-onyx z-50 flex flex-col overflow-hidden">
         {/* Header */}
         <div className="bg-onyx/90 backdrop-blur-md border-b border-gray-800 p-4 flex items-center justify-between z-10">
            <button 
                onClick={() => {
                    if(showQuiz) setShowQuiz(false);
                    else setActiveLesson(null);
                }}
                className="p-2 -ml-2 hover:bg-gray-800 rounded-full text-white"
            >
                <ArrowLeft size={24} />
            </button>
            <span className="text-sm font-light tracking-widest uppercase text-white">
                {showQuiz ? 'Quiz' : 'Lesson'}
            </span>
            <div className="w-8"></div> {/* Spacer */}
         </div>

         <div className="flex-1 overflow-y-auto p-6 pb-32">
            {!showQuiz ? (
                <>
                    <div className="mb-8 text-center">
                        <span className="text-xs text-gold uppercase tracking-[0.2em]">{activeLesson.scriptureReference}</span>
                        <h2 className="text-2xl font-serif text-white mt-2 mb-6">{activeLesson.title}</h2>
                        <div className="w-12 h-px bg-gray-700 mx-auto"></div>
                    </div>
                    <div className="prose prose-invert prose-lg mx-auto font-light leading-loose text-gray-300">
                        {activeLesson.content.split('\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-6">{paragraph}</p>
                        ))}
                    </div>
                    <div className="mt-12">
                         <Button fullWidth onClick={() => setShowQuiz(true)} variant="primary">
                            Take Quiz
                         </Button>
                    </div>
                </>
            ) : (
                <div className="max-w-md mx-auto">
                    {activeLesson.quiz.map((q, qIdx) => (
                        <div key={qIdx} className="mb-10">
                            <h3 className="text-lg text-white font-medium mb-4">{qIdx + 1}. {q.question}</h3>
                            <div className="space-y-3">
                                {q.options.map((opt, oIdx) => (
                                    <div key={oIdx} className="flex items-center p-4 rounded-xl bg-charcoal border border-gray-800">
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${oIdx === q.correctAnswer ? 'border-green-500 bg-green-500/20' : 'border-gray-600'}`}>
                                            {oIdx === q.correctAnswer && <Check size={12} className="text-green-500" />}
                                        </div>
                                        <span className="text-gray-300 font-light text-sm">{opt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <Button fullWidth onClick={() => setActiveLesson(null)} variant="outline">
                        Complete Lesson
                    </Button>
                </div>
            )}
         </div>
      </div>
    );
  }

  // Lesson List View
  return (
    <div className="pb-24 pt-8 px-6 bg-onyx min-h-full">
        <div className="flex items-center gap-4 mb-8">
            <button 
                onClick={onBack}
                className="p-2 -ml-2 hover:bg-gray-800 rounded-full text-white"
            >
                <ArrowLeft size={24} />
            </button>
            <h1 className="font-light text-3xl text-white tracking-wide">Lessons</h1>
        </div>
      
      <div className="space-y-4">
        {lessons.map((lesson) => (
            <div 
                key={lesson.id}
                onClick={() => setActiveLesson(lesson)}
                className="bg-black p-6 rounded-[1.5rem] border border-gray-800 flex items-center justify-between cursor-pointer group hover:border-gray-600 transition-all"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center text-white border border-gray-700">
                        <BookOpen size={20} />
                    </div>
                    <div>
                        <h3 className="text-white font-medium text-lg">{lesson.title}</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{lesson.scriptureReference}</p>
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                     <ArrowLeft size={14} className="rotate-180" />
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};