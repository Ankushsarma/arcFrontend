import React, { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider, isConfigured } from "../lib/firebase.ts";

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  loginAsGuest: () => void;
  logout: () => Promise<void>;
  isFirebaseConfigured: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(isConfigured); // only show loading if firebase is configured

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    if (!auth) {
      console.warn(
        "Firebase is not configured. Add VITE_FIREBASE_* env vars to .env.local",
      );
      return;
    }
    await signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    if (!auth) return;
    await signOut(auth);
  };

  const loginAsGuest = () => {
    setCurrentUser({
      uid: "guest-user",
      email: "guest@arcvion.app",
      displayName: "Guest Engineer",
      isAnonymous: true,
      photoURL: null,
    } as User);
    setLoading(false);
  };

  const value: AuthContextType = {
    currentUser,
    loading,
    loginWithGoogle,
    loginAsGuest,
    logout,
    isFirebaseConfigured: isConfigured,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
