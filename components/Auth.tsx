import React, { useState } from 'react';
import { Button } from './ui/Button';
import { User } from '../types';
import { Crown } from 'lucide-react';

interface AuthProps {
  onLogin: (user: User) => void;
  onGuestLogin: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onLogin, onGuestLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLogin({
        id: 'user_123',
        email,
        name: email.split('@')[0],
        subscriptionStatus: 'none'
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full px-6 py-12 bg-onyx text-white">
      <div className="w-full max-w-sm">
        <div className="text-center mb-12 flex flex-col items-center">
            <Crown size={48} strokeWidth={1} className="text-gray-300 mb-6" />
            <h1 className="font-sans text-xl tracking-[0.3em] font-light text-white mb-2">
                MAKARIOS
            </h1>
        </div>

        <div className="mb-10 text-center">
            <h2 className="text-2xl font-light text-white mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-500 text-sm font-light">
              {isLogin ? 'Enter your details to sign in.' : 'Start your journey today.'}
            </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-6 py-4 bg-charcoal border border-gray-800 rounded-full text-white placeholder-gray-600 focus:outline-none focus:border-white/50 text-sm font-light transition-colors"
                  placeholder="Email address"
                />
            </div>

            <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-6 py-4 bg-charcoal border border-gray-800 rounded-full text-white placeholder-gray-600 focus:outline-none focus:border-white/50 text-sm font-light transition-colors"
                  placeholder="Password"
                />
            </div>

            <div className="pt-4">
              <Button type="submit" fullWidth disabled={loading} variant="primary">
                {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
              </Button>
            </div>
        </form>

        <div className="mt-8 text-center space-y-4">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="block w-full text-sm font-light text-gray-400 hover:text-white transition-colors"
            >
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span className="text-white underline underline-offset-4 decoration-white/30">{isLogin ? "Sign up" : "Sign in"}</span>
            </button>
            
            <div className="flex items-center gap-4 px-8 opacity-50">
                <div className="h-px bg-gray-700 flex-1"></div>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Or</span>
                <div className="h-px bg-gray-700 flex-1"></div>
            </div>

            <Button 
                variant="ghost" 
                onClick={onGuestLogin}
                className="text-gray-400 hover:text-white font-normal tracking-wider text-xs"
            >
                Continue as Guest
            </Button>
        </div>
      </div>
    </div>
  );
};