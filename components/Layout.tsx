import React from 'react';
import { Home, PlayCircle, Heart, User, Sparkles } from 'lucide-react';
import { ViewState } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onChangeView }) => {
  const navItems = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'prayers', label: 'PRAYER', icon: Heart }, // Swapped order based on mockup
    { id: 'videos', label: 'VIDEOS', icon: PlayCircle },
    { id: 'profile', label: 'ME', icon: User },
  ];

  return (
    <div className="h-full max-w-md mx-auto bg-onyx relative flex flex-col overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
            {children}
        </main>

        {/* Bottom Navigation */}
        <div className="absolute bottom-6 left-4 right-4 bg-black rounded-[3rem] border border-gray-800 px-6 py-4 z-40 shadow-2xl">
            <div className="flex justify-between items-center px-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentView === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onChangeView(item.id as ViewState)}
                            className="flex flex-col items-center justify-center w-16 group"
                        >
                            <div className={`mb-1 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                                <Icon 
                                    size={24} 
                                    strokeWidth={1.5}
                                    className={`${isActive ? 'text-white fill-white' : 'text-gray-500'}`} 
                                />
                            </div>
                            <span className={`text-[9px] font-medium tracking-widest ${isActive ? 'text-white' : 'text-gray-600'}`}>
                                {item.label}
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
    </div>
  );
};