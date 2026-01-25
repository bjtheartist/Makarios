import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  User as FirebaseUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInAnonymously,
  signOut as firebaseSignOut,
  updateProfile
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider } from './firebase';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInAsGuest: () => Promise<void>;
  signOut: () => Promise<void>;
  updateUserSubscription: (status: 'none' | 'trial' | 'active') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper to create/update user document in Firestore
async function createOrUpdateUserDoc(firebaseUser: FirebaseUser, additionalData?: Partial<User>): Promise<User> {
  const userRef = doc(db, 'users', firebaseUser.uid);
  const userSnap = await getDoc(userRef);
  
  if (userSnap.exists()) {
    // User exists, return their data
    const data = userSnap.data();
    return {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      name: data.name || firebaseUser.displayName || 'User',
      subscriptionStatus: data.subscriptionStatus || 'none',
      isGuest: data.isGuest || firebaseUser.isAnonymous
    };
  } else {
    // Create new user document
    const newUser: User = {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      name: additionalData?.name || firebaseUser.displayName || 'User',
      subscriptionStatus: additionalData?.subscriptionStatus || 'active', // Default to active for MVP
      isGuest: firebaseUser.isAnonymous
    };
    
    await setDoc(userRef, {
      ...newUser,
      createdAt: serverTimestamp(),
      progress: {
        completedLessons: [],
        completedVideos: [],
        prayersRead: [],
        savedPrayers: [],
        quizScores: {},
        currentStreak: 0,
        longestStreak: 0,
        lastActiveDate: null,
        lastPrayerId: null,
        lastWatchedVideoId: null
      }
    });
    
    return newUser;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        setFirebaseUser(fbUser);
        try {
          const appUser = await createOrUpdateUserDoc(fbUser);
          setUser(appUser);
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Fallback user object
          setUser({
            id: fbUser.uid,
            email: fbUser.email || '',
            name: fbUser.displayName || 'User',
            subscriptionStatus: 'active',
            isGuest: fbUser.isAnonymous
          });
        }
      } else {
        setFirebaseUser(null);
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      if (result.user) {
        await updateProfile(result.user, { displayName: name });
        await createOrUpdateUserDoc(result.user, { name });
      }
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } finally {
      setLoading(false);
    }
  };

  const signInAsGuest = async () => {
    setLoading(true);
    try {
      const result = await signInAnonymously(auth);
      if (result.user) {
        await createOrUpdateUserDoc(result.user, { 
          name: 'Guest', 
          subscriptionStatus: 'active' // Guests get full access for MVP
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
    setUser(null);
    setFirebaseUser(null);
  };

  const updateUserSubscription = async (status: 'none' | 'trial' | 'active') => {
    if (firebaseUser && user) {
      const userRef = doc(db, 'users', firebaseUser.uid);
      await setDoc(userRef, { subscriptionStatus: status }, { merge: true });
      setUser({ ...user, subscriptionStatus: status });
    }
  };

  const value = {
    user,
    firebaseUser,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signInAsGuest,
    signOut,
    updateUserSubscription
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
