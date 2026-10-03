import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { MONUMENTS } from '../data/monuments';
import type { Monument } from '../types';

interface AudioContextType {
  activeMonument: Monument | null;
  activeChapterIndex: number;
  isPlaying: boolean;
  playbackRate: number;
  progress: number;
  currentTimeFormatted: string;
  totalTimeFormatted: string;
  playMonument: (monumentId: string, chapterIndex?: number) => void;
  pause: () => void;
  resume: () => void;
  restart: () => void;
  setChapter: (index: number) => void;
  setRate: (rate: number) => void;
  stop: () => void;
  isVoiceSupported: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeMonument, setActiveMonument] = useState<Monument | null>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [progress, setProgress] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<number | null>(null);
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  const currentChapter = activeMonument?.audioNarration.chapters[activeChapterIndex];
  
  // Format total duration in mm:ss
  const totalSeconds = currentChapter ? Math.max(30, Math.round(currentChapter.text.length / (14 * playbackRate))) : 60;
  
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, '0')}:${remaining.toString().padStart(2, '0')}`;
  };

  const currentTimeFormatted = formatTime(elapsedSeconds);
  const totalTimeFormatted = formatTime(totalSeconds);

  // Clear timer
  const clearProgressTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Start timer
  const startProgressTimer = () => {
    clearProgressTimer();
    timerRef.current = window.setInterval(() => {
      setElapsedSeconds((prev) => {
        const next = prev + 1;
        setProgress(Math.min(100, (next / totalSeconds) * 100));
        return next;
      });
    }, 1000);
  };

  // Cancel speech on unmount
  useEffect(() => {
    return () => {
      if (isSupported) {
        window.speechSynthesis.cancel();
      }
      clearProgressTimer();
    };
  }, [isSupported]);

  const speakText = (text: string, rate: number) => {
    if (!isSupported) return;

    window.speechSynthesis.cancel();
    clearProgressTimer();
    setElapsedSeconds(0);
    setProgress(0);

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Pick best available voice (favor Indian English or natural English)
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang === 'en-IN') ||
      voices.find(v => v.name.toLowerCase().includes('india')) ||
      voices.find(v => v.lang.startsWith('en')) ||
      voices[0];

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      startProgressTimer();
    };

    utterance.onend = () => {
      setIsPlaying(false);
      clearProgressTimer();
      setProgress(100);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      clearProgressTimer();
    };

    window.speechSynthesis.speak(utterance);
  };

  const playMonument = (monumentId: string, chapterIndex: number = 0) => {
    const found = MONUMENTS.find(m => m.id === monumentId);
    if (!found) return;

    setActiveMonument(found);
    setActiveChapterIndex(chapterIndex);
    const chapter = found.audioNarration.chapters[chapterIndex] || found.audioNarration.chapters[0];
    if (chapter) {
      speakText(chapter.text, playbackRate);
    }
  };

  const pause = () => {
    if (!isSupported) return;
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
      clearProgressTimer();
    }
  };

  const resume = () => {
    if (!isSupported) return;
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      startProgressTimer();
    } else if (currentChapter) {
      speakText(currentChapter.text, playbackRate);
    }
  };

  const restart = () => {
    if (currentChapter) {
      speakText(currentChapter.text, playbackRate);
    }
  };

  const setChapter = (index: number) => {
    if (!activeMonument) return;
    if (index >= 0 && index < activeMonument.audioNarration.chapters.length) {
      setActiveChapterIndex(index);
      const chapter = activeMonument.audioNarration.chapters[index];
      if (chapter) {
        speakText(chapter.text, playbackRate);
      }
    }
  };

  const setRate = (rate: number) => {
    setPlaybackRate(rate);
    if (isPlaying && currentChapter) {
      // Re-trigger with new rate at current progress
      speakText(currentChapter.text, rate);
    }
  };

  const stop = () => {
    if (isSupported) {
      window.speechSynthesis.cancel();
    }
    clearProgressTimer();
    setIsPlaying(false);
    setProgress(0);
    setElapsedSeconds(0);
  };

  return (
    <AudioContext.Provider
      value={{
        activeMonument,
        activeChapterIndex,
        isPlaying,
        playbackRate,
        progress,
        currentTimeFormatted,
        totalTimeFormatted,
        playMonument,
        pause,
        resume,
        restart,
        setChapter,
        setRate,
        stop,
        isVoiceSupported: isSupported
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
