'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

const VIDEOS = [
  { src: '/videos/testimonial-1.mp4', duration: 30 },
  { src: '/videos/testimonial-2.mp4', duration: 19 },
  { src: '/videos/testimonial-3.mp4', duration: 30 },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const goTo = useCallback((index: number) => {
    setCurrent(((index % VIDEOS.length) + VIDEOS.length) % VIDEOS.length)
  }, [])

  // Load + play whenever current changes
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.load()
    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }, [current])

  // Auto-advance when video ends
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onEnded = () => goTo(current + 1)
    video.addEventListener('ended', onEnded)
    return () => video.removeEventListener('ended', onEnded)
  }, [current, goTo])

  const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX - e.currentTarget.getBoundingClientRect().left
    const half = e.currentTarget.offsetWidth / 2
    if (x < half) {
      goTo(current - 1)
    } else {
      goTo(current + 1)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const newMuted = !muted
    setMuted(newMuted)
    if (videoRef.current) videoRef.current.muted = newMuted
  }

  return (
    <section
      id="testimonials"
      style={{ backgroundColor: '#1C355D', fontFamily: 'var(--font-plus-jakarta)' }}
    >
      {/* Section label */}
      <div style={{ padding: '36px 24px 20px' }}>
        <p style={{ color: '#C8820A', fontSize: '11px', fontWeight: 700, letterSpacing: '2.4px', textTransform: 'uppercase', margin: '0 0 8px' }}>
          Testimoni
        </p>
        <h2 style={{ color: '#fff', fontSize: '24px', fontWeight: 800, lineHeight: 1.25, margin: 0 }}>
          Kata mereka yang<br />
          <em style={{ color: '#C8820A', fontStyle: 'italic' }}>udah pesan langsung.</em>
        </h2>
      </div>

      {/* Stories player */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '9/16',
          backgroundColor: '#000',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        {/* Keyframes for progress bar */}
        <style>{`
          @keyframes storyProgress {
            from { width: 0% }
            to   { width: 100% }
          }
        `}</style>

        {/* Video */}
        <video
          ref={videoRef}
          key={current}
          src={VIDEOS[current].src}
          playsInline
          autoPlay
          muted={muted}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Top gradient for progress bar readability */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)',
          pointerEvents: 'none',
          zIndex: 6,
        }} />

        {/* Progress bars */}
        <div style={{
          position: 'absolute',
          top: '14px', left: '12px', right: '12px',
          display: 'flex',
          gap: '4px',
          zIndex: 10,
          pointerEvents: 'none',
        }}>
          {VIDEOS.map((v, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '2.5px',
                backgroundColor: 'rgba(255,255,255,0.35)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              {i < current && (
                <div style={{ width: '100%', height: '100%', backgroundColor: '#fff' }} />
              )}
              {i === current && playing && (
                <div style={{
                  width: '0%',
                  height: '100%',
                  backgroundColor: '#fff',
                  animation: `storyProgress ${v.duration}s linear forwards`,
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Tap zones */}
        <div
          onClick={handleTap}
          style={{ position: 'absolute', inset: 0, zIndex: 5 }}
        />

        {/* Left arrow */}
        <button
          onClick={(e) => { e.stopPropagation(); goTo(current - 1) }}
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(0,0,0,0.45)',
            border: '1.5px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
            fontSize: '18px',
            lineHeight: 1,
          }}
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Right arrow */}
        <button
          onClick={(e) => { e.stopPropagation(); goTo(current + 1) }}
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(0,0,0,0.45)',
            border: '1.5px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
            fontSize: '18px',
            lineHeight: 1,
          }}
          aria-label="Next"
        >
          ›
        </button>


        {/* Story counter */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '16px',
          zIndex: 10,
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: '20px',
          padding: '4px 12px',
        }}>
          <span style={{ color: '#fff', fontSize: '12px', fontWeight: 600 }}>
            {current + 1} / {VIDEOS.length}
          </span>
        </div>
      </div>
    </section>
  )
}
