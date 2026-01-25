import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './lib/AuthContext';
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
import { ViewState } from './types';

// Splash Screen Component with new branding
const SplashScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900"></div>
      
      {/* Logo and branding */}
      <div className="text-center z-10 flex flex-col items-center animate-fade-in-up">
        <div className="mb-8 relative">
          <img 
            src="/assets/logo.png" 
            alt="Makarios" 
            className="w-32 h-32 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          />
        </div>
        
        <h1 className="font-sans text-2xl tracking-[0.4em] font-light text-white mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          MAKARIOS
        </h1>
        
        {/* Loading indicator */}
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};

// Main App Content (separated for useAuth hook)
const AppContent: React.FC = () => {
  const { user, loading, signOut, updateUserSubscription } = useAuth();
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [showSplash, setShowSplash] = useState(true);

  // Show splash screen for 2.5 seconds on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Handlers
  const handleSubscribe = async () => {
    await updateUserSubscription('active');
  };

  const handleLogout = async () => {
    await signOut();
    setCurrentView('home');
  };

  // Rendering Logic

  // 1. Splash Screen (initial load)
  if (showSplash) {
    return <SplashScreen />;
  }

  // 2. Loading state (Firebase auth check)
  if (loading) {
    return <SplashScreen />;
  }

  // 3. Auth Wall
  if (!user) {
    return <Auth />;
  }

  // 4. Subscription Wall (Skipped for Guests who explore with 'active' status)
  if (user.subscriptionStatus === 'none') {
    return <Subscription onSubscribe={handleSubscribe} />;
  }

  // 5. Main App
  return (
    <Layout currentView={currentView} onChangeView={setCurrentView}>
      {currentView === 'home' && <Home onNavigate={setCurrentView} />}
      {currentView === 'videos' && <VideoLibrary onBack={() => setCurrentView('home')} />}
      {currentView === 'prayers' && <Prayers />}
      {currentView === 'profile' && <Profile user={user} onLogout={handleLogout} />}
      
      {/* Detail Views */}
      {currentView === 'trivia' && <BibleTrivia onBack={() => setCurrentView('home')} />}
      {currentView === 'lessons' && <Lessons onBack={() => setCurrentView('home')} />}
      {currentView === 'testimonies' && <Testimonies onBack={() => setCurrentView('home')} />}
      {currentView === 'commentaries' && <Commentaries onBack={() => setCurrentView('home')} />}
    </Layout>
  );
};

// Root App Component with AuthProvider
const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
