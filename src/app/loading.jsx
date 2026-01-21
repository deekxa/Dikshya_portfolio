'use client'
import { useEffect, useState } from 'react'
import './loading-styles.css'

export default function Loading() {
  const [typedText, setTypedText] = useState('')
  const [activeKey, setActiveKey] = useState(null)
  const [stage, setStage] = useState('typing') // typing -> complete -> falling -> done
  const fullName = "Dikshya Khanal"

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setTypedText(fullName.slice(0, index + 1))
        setActiveKey(fullName[index])
        index++
      } else {
        clearInterval(typingInterval)
        setActiveKey(null) // Clear active key when typing completes
        // Quick Mac-like timing
        setTimeout(() => {
          setStage('complete')
          // Show completion briefly
          setTimeout(() => {
            setStage('falling')
            // Fast fall animation
            setTimeout(() => {
              setStage('done')
            }, 2000)
          }, 1500)
        }, 1000)
      }
    }, 150) // Faster typing speed

    return () => clearInterval(typingInterval)
  }, [])

  if (stage === 'done') return null

  return (
    <div className={`loading-screen ${stage === 'falling' ? 'fade-out' : ''}`}>
      {/* Animated Code Background */}
      <div className={`code-rain ${stage === 'falling' ? 'fall-bg' : ''}`}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="code-line"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          >
            {['const', 'function', 'import', 'export', 'return', '{ }', '< >', '=>'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      {/* Floating Dev Icons */}
      <div className={`dev-icons ${stage === 'falling' ? 'fall-icons' : ''}`}>
        <div className="icon-float" style={{ top: '10%', left: '10%', animationDelay: '0s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="2"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
          </svg>
        </div>
        <div className="icon-float" style={{ top: '20%', right: '15%', animationDelay: '1s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        </div>
        <div className="icon-float" style={{ bottom: '20%', left: '20%', animationDelay: '2s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
        </div>
        <div className="icon-float" style={{ bottom: '15%', right: '25%', animationDelay: '3s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18M9 21V9"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className={`loading-content ${stage === 'complete' ? 'pulse-effect' : ''} ${stage === 'falling' ? 'fall-down' : ''}`}>
        {/* Typing Terminal */}
        <div className={`typing-terminal ${stage === 'complete' ? 'expand-glow' : ''} ${stage === 'falling' ? 'terminal-fall' : ''}`}>
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="terminal-title">developer.js</span>
          </div>
          <div className="terminal-body">
            <span className="terminal-prompt">$</span>
            <span className={`typed-name ${stage === 'complete' ? 'name-complete' : ''} ${stage === 'falling' ? 'name-fall' : ''}`}>
              {typedText}
            </span>
            {stage === 'typing' && <span className="cursor-blink">|</span>}
          </div>
        </div>

        {/* 3D Keyboard */}
        <div className={`keyboard-3d ${stage === 'falling' ? 'keyboard-fall' : ''}`}>
          {[
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
            ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
          ].map((row, rowIndex) => (
            <div key={rowIndex} className="key-row">
              {row.map((key) => (
                <div
                  key={key}
                  className={`key-3d ${activeKey?.toUpperCase() === key ? 'active' : ''}`}
                >
                  {key}
                </div>
              ))}
            </div>
          ))}
          <div className="key-row">
            <div className={`key-3d space-key ${activeKey === ' ' ? 'active' : ''}`}> </div>
          </div>
        </div>

        {/* Loading Text */}
        {stage === 'typing' && (
          <div className="loading-subtitle">
            <span className="subtitle-text">Frontend Developer</span>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        {/* Completion Effect */}
        {stage === 'complete' && (
          <div className="completion-message">
            <div className="checkmark">✓</div>
            <div className="completion-text">Portfolio Loaded!</div>
          </div>
        )}
      </div>

      {/* Grid Lines */}
      <div className={`grid-overlay ${stage === 'falling' ? 'grid-fall' : ''}`}>
        {[...Array(20)].map((_, i) => (
          <div key={`h-${i}`} className="grid-line horizontal" style={{ top: `${i * 5}%` }}></div>
        ))}
        {[...Array(20)].map((_, i) => (
          <div key={`v-${i}`} className="grid-line vertical" style={{ left: `${i * 5}%` }}></div>
        ))}
      </div>

      {/* Particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className={`particle ${stage === 'falling' ? 'particle-fall' : ''}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        ></div>
      ))}

      {/* Explosion Effect on Fall */}
      {stage === 'falling' && (
        <div className="explosion-overlay">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="explosion-particle"
              style={{
                left: '50%',
                top: '50%',
                '--angle': `${(360 / 60) * i}deg`,
                '--distance': `${300 + Math.random() * 400}px`,
                animationDelay: `${Math.random() * 0.2}s`
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  )
}
