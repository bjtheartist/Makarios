import React from 'react';
import { User } from '../types';
import { Button } from './ui/Button';
import { User as UserIcon, Settings, CreditCard, LogOut, Bell, LogIn, Save } from 'lucide-react';

interface ProfileProps {
  user: User;
  onLogout: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {
  const isGuest = user.isGuest;

  return (
    <div className="pb-24 pt-8 px-6 bg-onyx min-h-full">
      <div className="flex flex-col items-center mb-10">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 border shadow-lg ${isGuest ? 'bg-charcoal border-dashed border-gray-600 text-gray-500' : 'bg-charcoal text-silver border-white/10'}`}>
            <UserIcon size={40} />
        </div>
        <h1 className="font-serif text-2xl font-bold text-white">{isGuest ? 'Guest User' : user.name}</h1>
        <p className="text-silver text-sm">{isGuest ? 'Explore Mode' : user.email}</p>
        
        {!isGuest && (
            <span className="mt-3 px-4 py-1 bg-gold/20 text-gold border border-gold/20 text-xs rounded-full font-medium uppercase tracking-wider">
                {user.subscriptionStatus === 'active' || user.subscriptionStatus === 'trial' ? 'Member' : 'Free Account'}
            </span>
        )}
      </div>

      {isGuest && (
        <div className="mb-8 p-6 bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-white/10 text-center">
            <Save size={32} className="mx-auto text-white mb-3" />
            <h3 className="text-white font-medium mb-2">Save Your Progress</h3>
            <p className="text-sm text-gray-400 mb-6 font-light">Create an account to sync your prayers, lessons, and bookmarks across all your devices.</p>
            <Button fullWidth onClick={onLogout} variant="primary" className="text-xs">
                Create Account / Log In
            </Button>
        </div>
      )}

      <div className="space-y-3">
        {!isGuest && (
            <button className="w-full bg-charcoal p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:bg-charcoal/80 transition-colors group">
                <div className="p-2 bg-onyx rounded-lg text-gold border border-white/5 group-hover:text-white transition-colors">
                    <CreditCard size={20} />
                </div>
                <div className="text-left flex-1">
                    <span className="block font-medium text-white">Subscription</span>
                    <span className="block text-xs text-muted">Manage your plan</span>
                </div>
            </button>
        )}

        <button className="w-full bg-charcoal p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:bg-charcoal/80 transition-colors group">
            <div className="p-2 bg-onyx rounded-lg text-gold border border-white/5 group-hover:text-white transition-colors">
                <Bell size={20} />
            </div>
            <div className="text-left flex-1">
                <span className="block font-medium text-white">Notifications</span>
                <span className="block text-xs text-muted">Daily verse alerts</span>
            </div>
        </button>

        <button className="w-full bg-charcoal p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:bg-charcoal/80 transition-colors group">
            <div className="p-2 bg-onyx rounded-lg text-gold border border-white/5 group-hover:text-white transition-colors">
                <Settings size={20} />
            </div>
            <div className="text-left flex-1">
                <span className="block font-medium text-white">Settings</span>
                <span className="block text-xs text-muted">App preferences</span>
            </div>
        </button>
      </div>

      <div className="mt-10">
        <Button variant="ghost" fullWidth onClick={onLogout} className={`${isGuest ? 'text-white' : 'text-error'} hover:bg-charcoal/50`}>
            {isGuest ? (
                <><LogIn size={18} className="mr-2" /> Log In with Account</>
            ) : (
                <><LogOut size={18} className="mr-2" /> Log Out</>
            )}
        </Button>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-xs text-muted/50">Version 1.0.0</p>
      </div>
    </div>
  );
};