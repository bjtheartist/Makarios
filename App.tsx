import React, { useState, useEffect } from 'react';
import { Auth } from './components/Auth';
import { Subscription } from './components/Subscription';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { VideoLibrary } from './components/VideoLibrary';
import { Prayers } from './components/Prayers';
import { Profile } from './components/Profile';
import { BibleTrivia } from './components/BibleTrivia';
import { Lessons } from './components/Lessons';
import { Testimonies } from './components/Testimonies';
import { Commentaries } from './components/Commentaries';
import { User, ViewState } from './types';

const App: React.FC = () => {
  // State
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial load / check for session
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  // Handlers
  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const handleGuestLogin = () => {
    setUser({
        id: 'guest',
        name: 'Guest',
        email: '',
        subscriptionStatus: 'active', // Allow guests to explore without hitting the paywall immediately
        isGuest: true
    });
  };

  const handleSubscribe = () => {
    if (user) {
      setUser({ ...user, subscriptionStatus: 'active' });
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  // Rendering Logic

  // 1. Splash Screen
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-black text-white relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-gray-800 rounded-full blur-[100px] opacity-20"></div>

        <div className="text-center z-10 flex flex-col items-center animate-fade-in-up">
            <img
              src="/assets/makarios-icon.png"
              alt="Makarios"
              className="w-20 h-20 mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
            <h1 className="font-sans text-2xl tracking-[0.4em] font-light bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                MAKARIOS
            </h1>
        </div>
      </div>
    );
  }

  // 2. Auth Wall
  if (!user) {
    return <Auth onLogin={handleLogin} onGuestLogin={handleGuestLogin} />;
  }

  // 3. Subscription Wall (Skipped for Guests who explore with 'active' status temporarily)
  if (user.subscriptionStatus === 'none') {
    return <Subscription onSubscribe={handleSubscribe} />;
  }

  // 4. Main App
  return (
    <Layout currentView={currentView} onChangeView={setCurrentView}>
      {currentView === 'home' && <Home onNavigate={setCurrentView} />}
      {currentView === 'videos' && <VideoLibrary onBack={() => setCurrentView('home')} />}
      {currentView === 'prayers' && <Prayers />}
      {currentView === 'profile' && <Profile user={user} onLogout={handleLogout} />}
      
      {/* Detail Views - Rendered within Layout but handle their own back navigation */}
      {currentView === 'trivia' && <BibleTrivia onBack={() => setCurrentView('home')} />}
      {currentView === 'lessons' && <Lessons onBack={() => setCurrentView('home')} />}
      {currentView === 'testimonies' && <Testimonies onBack={() => setCurrentView('home')} />}
      {currentView === 'commentaries' && <Commentaries onBack={() => setCurrentView('home')} />}
    </Layout>
  );
};

export default App;