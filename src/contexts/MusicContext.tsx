"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from "react";

interface MusicContextType {
  isPlaying: boolean;
  isMuted: boolean;
  hasConsented: boolean;
  volume: number;
  togglePlay: () => void;
  toggleMute: () => void;
  setConsent: (consent: boolean) => void;
  setVolume: (volume: number) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasConsented, setHasConsented] = useState<boolean | null>(null);
  const [volume, setVolumeState] = useState(0.3); // 30% volume by default
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio("/sounds/fastLife.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    // Reset consent on each page load - don't persist
    setHasConsented(false);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [volume]);

  // Handle auto-play when consent is given
  useEffect(() => {
    if (hasConsented && audioRef.current && !isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Auto-play prevented:", error);
          });
      }
    }
  }, [hasConsented]);

  const togglePlay = () => {
    if (!audioRef.current || !hasConsented) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Play failed:", error);
          });
      }
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    const newMutedState = !isMuted;
    audioRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  };

  const setConsent = (consent: boolean) => {
    setHasConsented(consent);
    // Don't persist consent to localStorage anymore

    if (!consent && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        isMuted,
        hasConsented: hasConsented === true,
        volume,
        togglePlay,
        toggleMute,
        setConsent,
        setVolume,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}
