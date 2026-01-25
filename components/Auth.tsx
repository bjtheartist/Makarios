import React, { useState } from 'react';
import { Button } from './ui/Button';
import { useAuth } from '../lib/AuthContext';

export const Auth: React.FC = () => {
  const { signIn, signUp, signInWithGoogle, signInAsGuest } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password, name || email.split('@')[0]);
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      // User-friendly error messages
      if (err.code === 'auth/user-not-found') {
        setError('No account found with this email. Please sign up.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
    } catch (err: any) {
      console.error('Google sign-in error:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        // User closed the popup, no need to show error
      } else {
        setError('Google sign-in failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInAsGuest();
    } catch (err) {
      console.error('Guest login error:', err);
      setError('Guest login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full px-6 py-12 bg-onyx text-white">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-12 flex flex-col items-center">
          <img 
            src="/assets/logo.png" 
            alt="Makarios" 
            className="w-20 h-20 object-contain mb-6"
          />
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

        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-800 rounded-lg text-red-300 text-sm text-center">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-6 py-4 bg-charcoal border border-gray-800 rounded-full text-white placeholder-gray-600 focus:outline-none focus:border-white/50 text-sm font-light transition-colors"
                placeholder="Your name"
              />
            </div>
          )}

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
            onClick={() => {
              setIsLogin(!isLogin);
              setError(null);
            }}
            className="block w-full text-sm font-light text-gray-400 hover:text-white transition-colors"
          >
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span className="text-white underline underline-offset-4 decoration-white/30">
              {isLogin ? "Sign up" : "Sign in"}
            </span>
          </button>
          
          <div className="flex items-center gap-4 px-8 opacity-50">
            <div className="h-px bg-gray-700 flex-1"></div>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Or</span>
            <div className="h-px bg-gray-700 flex-1"></div>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-charcoal border border-gray-800 rounded-full text-white hover:border-white/50 text-sm font-light transition-colors disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <Button 
            variant="ghost" 
            onClick={handleGuestLogin}
            disabled={loading}
            className="text-gray-400 hover:text-white font-normal tracking-wider text-xs"
          >
            Continue as Guest
          </Button>
        </div>
      </div>
    </div>
  );
};
