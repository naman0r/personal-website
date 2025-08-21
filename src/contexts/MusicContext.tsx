"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";

interface MusicContextType {
  isPlaying: boolean;
  isMuted: boolean;
  hasConsented: boolean;
  volume: number;
  currentTrack: string;
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
  const [volume, setVolumeState] = useState(0.2); // 30% volume by default
  const [currentTrack, setCurrentTrack] = useState("/sounds/fastLife.mp3");
  const [isInitialized, setIsInitialized] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  // Reset consent only on initial mount, not on route changes
  useEffect(() => {
    if (!isInitialized) {
      setHasConsented(true); // Ensure consent is set
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Determine which track to play based on route
  useEffect(() => {
    console.log("Current pathname:", pathname); // Debug log
    const isProjectPage = pathname.startsWith("/projects");
    const newTrack = isProjectPage
      ? "/sounds/clubhouse.mp3"
      : "/sounds/fastLife.mp3";

    console.log("Is project page:", isProjectPage, "New track:", newTrack); // Debug log

    if (newTrack !== currentTrack) {
      console.log("Switching track from", currentTrack, "to", newTrack); // Debug log
      setCurrentTrack(newTrack);
    }
  }, [pathname, currentTrack]);

  // Initialize audio element
  useEffect(() => {
    console.log("Audio effect triggered. Current track:", currentTrack); // Debug log
    const wasPlaying = audioRef.current && !audioRef.current.paused;
    const currentTime = audioRef.current?.currentTime || 0;
    console.log(
      "Was playing:",
      wasPlaying,
      "Has consented:",
      hasConsented,
      "Current time:",
      currentTime
    ); // Debug log

    // Only recreate audio element if the track has changed
    if (
      !audioRef.current ||
      audioRef.current.src !== window.location.origin + currentTrack
    ) {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      audioRef.current = new Audio(currentTrack);
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;

      // Set the current time to preserve playback position
      audioRef.current.currentTime = currentTime;
    }

    // If music was playing OR if we have consent, continue/start playing the new track
    if ((wasPlaying || isPlaying) && hasConsented) {
      console.log("Attempting to play new track..."); // Debug log
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("New track playing successfully"); // Debug log
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Track switch play failed:", error);
            setIsPlaying(false);
          });
      }
    } else {
      setIsPlaying(false);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrack, volume, isMuted, hasConsented, isPlaying]);

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
        currentTrack,
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
