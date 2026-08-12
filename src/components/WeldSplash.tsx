'use client'

import { useEffect, useState } from 'react'

const WELD_PATH = 'M48 148 L672 148'

type Phase = 'run' | 'exit' | 'done'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function WeldSplash() {
  const [phase, setPhase] = useState<Phase>('run')

  useEffect(() => {
    if (prefersReducedMotion()) {
      setPhase('done')
      return
    }

    document.documentElement.classList.add('splash-lock')

    const exitTimer = window.setTimeout(() => setPhase('exit'), 2600)
    const doneTimer = window.setTimeout(() => setPhase('done'), 3200)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(doneTimer)
      document.documentElement.classList.remove('splash-lock')
    }
  }, [])

  useEffect(() => {
    if (phase === 'done') {
      document.documentElement.classList.remove('splash-lock')
    }
  }, [phase])

  if (phase === 'done') return null

  return (
    <div
      className={`weld-splash${phase === 'exit' ? ' is-exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Eurotech"
    >
      <div className="weld-splash-plate" aria-hidden="true" />
      <div className="weld-splash-stage">
        <svg
          className="weld-splash-art"
          viewBox="0 0 720 220"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="weld-molten" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffb347" />
              <stop offset="45%" stopColor="#ff661d" />
              <stop offset="100%" stopColor="#ffd27a" />
            </linearGradient>
            <linearGradient id="weld-cool" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#d8d0ea" />
            </linearGradient>
            <filter id="weld-glow" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            className="weld-track"
            d={WELD_PATH}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="10"
            strokeLinecap="round"
          />

          <path
            className="weld-bead"
            d={WELD_PATH}
            fill="none"
            stroke="url(#weld-molten)"
            strokeWidth="7"
            strokeLinecap="round"
            filter="url(#weld-glow)"
          />

          <path
            className="weld-bead-core"
            d={WELD_PATH}
            fill="none"
            stroke="#fff6e8"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.85"
          />

          <g className="weld-torch">
            <animateMotion
              dur="0.7s"
              begin="0.15s"
              fill="freeze"
              path={WELD_PATH}
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            />
            <circle r="5" fill="#fff" />
            <circle
              r="11"
              fill="none"
              stroke="#ff661d"
              strokeWidth="2"
              opacity="0.9"
            />
            <circle
              className="weld-spark-ring"
              r="18"
              fill="none"
              stroke="#ffb347"
              strokeWidth="1.5"
            />
            <g className="weld-sparks" fill="#ffd27a">
              <circle className="weld-spark s1" r="1.6" />
              <circle className="weld-spark s2" r="1.2" />
              <circle className="weld-spark s3" r="1.4" />
              <circle className="weld-spark s4" r="1.1" />
            </g>
          </g>

          <text
            className="weld-word-stroke"
            x="360"
            y="108"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="800"
            fontSize="72"
            letterSpacing="-2.5"
            fill="none"
            stroke="url(#weld-molten)"
            strokeWidth="2.4"
            filter="url(#weld-glow)"
          >
            Eurotech
          </text>
          <text
            className="weld-word-fill"
            x="360"
            y="108"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="800"
            fontSize="72"
            letterSpacing="-2.5"
            fill="url(#weld-cool)"
          >
            Eurotech
          </text>
        </svg>

        <p className="weld-splash-tag">Training &amp; Certification</p>
      </div>
    </div>
  )
}
