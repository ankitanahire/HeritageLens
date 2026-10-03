import React from 'react';
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import type { Monument } from '../types';

interface AudioPlayerProps {
  monument: Monument;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ monument }) => {
  const {
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
    isVoiceSupported
  } = useAudio();

  const isCurrentMonumentActive = activeMonument?.id === monument.id;
  const currentChapterIndex = isCurrentMonumentActive ? activeChapterIndex : 0;
  const currentChapter = monument.audioNarration.chapters[currentChapterIndex];

  const handleTogglePlay = () => {
    if (!isCurrentMonumentActive) {
      playMonument(monument.id, 0);
    } else if (isPlaying) {
      pause();
    } else {
      resume();
    }
  };

  const speeds = [0.75, 1.0, 1.25, 1.5];

  return (
    <div
      style={{
        backgroundColor: '#1f1714',
        border: '1px solid rgba(194, 139, 91, 0.3)',
        borderRadius: '12px',
        padding: '1.75rem',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem'
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(194, 139, 91, 0.2)',
              border: '1px solid #c28b5b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#d89e68'
            }}
          >
            <Volume2 size={22} />
          </div>
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#c28b5b',
                fontWeight: 700
              }}
            >
              Listen to History • Voice Narrator
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: '#f5eee6'
              }}
            >
              {monument.audioNarration.title}
            </h3>
          </div>
        </div>

        {/* Animated Soundwave Bars */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '24px' }}>
          <span className={`audio-bar-1`} style={{ width: '3px', background: isPlaying && isCurrentMonumentActive ? '#c28b5b' : '#3a2d27', borderRadius: '2px' }} />
          <span className={`audio-bar-2`} style={{ width: '3px', background: isPlaying && isCurrentMonumentActive ? '#d89e68' : '#3a2d27', borderRadius: '2px' }} />
          <span className={`audio-bar-3`} style={{ width: '3px', background: isPlaying && isCurrentMonumentActive ? '#c28b5b' : '#3a2d27', borderRadius: '2px' }} />
          <span className={`audio-bar-4`} style={{ width: '3px', background: isPlaying && isCurrentMonumentActive ? '#d89e68' : '#3a2d27', borderRadius: '2px' }} />
          <span className={`audio-bar-5`} style={{ width: '3px', background: isPlaying && isCurrentMonumentActive ? '#c28b5b' : '#3a2d27', borderRadius: '2px' }} />
        </div>
      </div>

      {/* Spoken Text Transcript Display */}
      <div
        style={{
          backgroundColor: '#15100d',
          border: '1px solid rgba(194, 139, 91, 0.15)',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          fontSize: '0.925rem',
          color: '#e2d7c9',
          lineHeight: 1.6,
          fontStyle: 'italic',
          borderLeft: '4px solid #c28b5b'
        }}
      >
        "{currentChapter?.text || 'Press Play to hear historical storytelling in natural voice.'}"
      </div>

      {/* Progress Bar & Timers */}
      <div>
        <div
          style={{
            height: '6px',
            backgroundColor: '#271e1a',
            borderRadius: '3px',
            overflow: 'hidden',
            cursor: 'pointer',
            position: 'relative'
          }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickPercent = ((e.clientX - rect.left) / rect.width) * 100;
            // jump chapter based on percentage
            const chapIdx = Math.min(
              monument.audioNarration.chapters.length - 1,
              Math.floor((clickPercent / 100) * monument.audioNarration.chapters.length)
            );
            if (!isCurrentMonumentActive) {
              playMonument(monument.id, chapIdx);
            } else {
              setChapter(chapIdx);
            }
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${isCurrentMonumentActive ? progress : 0}%`,
              backgroundColor: '#c28b5b',
              transition: 'width 0.3s ease'
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.8rem',
            color: '#8e8073',
            marginTop: '0.4rem'
          }}
        >
          <span>{isCurrentMonumentActive ? currentTimeFormatted : '00:00'}</span>
          <span style={{ color: '#c28b5b', fontWeight: 600 }}>
            {currentChapter?.title || 'Chapter 1'}
          </span>
          <span>{isCurrentMonumentActive ? totalTimeFormatted : monument.audioNarration.totalDuration}</span>
        </div>
      </div>

      {/* Player Controls Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '0.5rem',
          borderTop: '1px solid rgba(194, 139, 91, 0.15)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Main Play / Pause Button */}
          <button
            onClick={handleTogglePlay}
            aria-label={isPlaying && isCurrentMonumentActive ? 'Pause' : 'Play'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#c28b5b',
              color: '#ffffff',
              padding: '0.75rem 1.4rem',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.9rem',
              boxShadow: '0 4px 12px rgba(194, 139, 91, 0.3)',
              transition: 'all 0.2s ease'
            }}
          >
            {isPlaying && isCurrentMonumentActive ? (
              <>
                <Pause size={18} fill="#ffffff" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play size={18} fill="#ffffff" />
                <span>Play Voice</span>
              </>
            )}
          </button>

          {/* Restart Button */}
          <button
            onClick={() => {
              if (isCurrentMonumentActive) {
                restart();
              } else {
                playMonument(monument.id, 0);
              }
            }}
            aria-label="Restart story"
            title="Restart current chapter"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.75rem 1rem',
              backgroundColor: 'rgba(39, 30, 26, 0.8)',
              border: '1px solid rgba(194, 139, 91, 0.25)',
              borderRadius: '6px',
              color: '#c9bcaf',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'all 0.2s ease'
            }}
          >
            <RotateCcw size={16} />
            <span>Restart</span>
          </button>
        </div>

        {/* Playback Speed Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#8e8073', marginRight: '0.2rem' }}>Speed:</span>
          {speeds.map((s) => (
            <button
              key={s}
              onClick={() => setRate(s)}
              style={{
                padding: '0.3rem 0.55rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                borderRadius: '4px',
                backgroundColor: playbackRate === s ? '#c28b5b' : 'rgba(39, 30, 26, 0.8)',
                color: playbackRate === s ? '#15100d' : '#c9bcaf',
                border: '1px solid rgba(194, 139, 91, 0.25)',
                transition: 'all 0.15s ease'
              }}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>

      {/* Chapters Selection List */}
      <div>
        <h4
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.825rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#8e8073',
            marginBottom: '0.65rem'
          }}
        >
          Story Chapters
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
          {monument.audioNarration.chapters.map((chap, idx) => {
            const isSelected = isCurrentMonumentActive && currentChapterIndex === idx;
            return (
              <button
                key={chap.id}
                onClick={() => {
                  if (isCurrentMonumentActive) {
                    setChapter(idx);
                  } else {
                    playMonument(monument.id, idx);
                  }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 0.85rem',
                  backgroundColor: isSelected ? 'rgba(194, 139, 91, 0.18)' : '#18120f',
                  border: isSelected ? '1px solid #c28b5b' : '1px solid rgba(194, 139, 91, 0.12)',
                  borderRadius: '6px',
                  color: isSelected ? '#f5eee6' : '#c9bcaf',
                  fontSize: '0.825rem',
                  fontWeight: isSelected ? 600 : 400,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>{chap.title}</span>
                <span style={{ fontSize: '0.75rem', color: isSelected ? '#c28b5b' : '#8e8073' }}>
                  {chap.duration}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {!isVoiceSupported && (
        <div style={{ color: '#d89e68', fontSize: '0.75rem', textAlign: 'center' }}>
          Note: Web Speech API is not supported in this browser. Visual narration display active.
        </div>
      )}
    </div>
  );
};
