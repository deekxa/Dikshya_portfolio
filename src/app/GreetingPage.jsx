'use client';

import { useEffect, useState } from 'react';
import './greeting-page.css';

// Flag SVG components
const FlagGB = () => (
  <svg viewBox="0 0 60 30" className="flag-svg">
    <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
    <clipPath id="t"><path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-30 h30 z"/></clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const FlagNP = () => (
  <div className="flag-svg" style={{background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px'}}>
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Nepal_%28with_spacing%2C_aspect_ratio_4-3%29.svg/500px-Flag_of_Nepal_%28with_spacing%2C_aspect_ratio_4-3%29.svg.png"
      alt="Nepal Flag"
      style={{width: '100%', height: '100%', objectFit: 'contain'}}
    />
  </div>
);

const FlagFR = () => (
  <svg viewBox="0 0 900 600" className="flag-svg">
    <rect fill="#002395" width="900" height="600"/>
    <rect fill="#FFF" x="300" width="300" height="600"/>
    <rect fill="#ED2939" x="600" width="300" height="600"/>
  </svg>
);

const FlagJP = () => (
  <svg viewBox="0 0 900 600" className="flag-svg">
    <rect fill="#fff" width="900" height="600"/>
    <circle fill="#BC002D" cx="450" cy="300" r="180"/>
  </svg>
);

const FlagES = () => (
  <svg viewBox="0 0 900 600" className="flag-svg">
    <rect fill="#AA151B" width="900" height="600"/>
    <rect fill="#F1BF00" y="150" width="900" height="300"/>
  </svg>
);

const FlagDE = () => (
  <svg viewBox="0 0 900 600" className="flag-svg">
    <rect fill="#000" width="900" height="600"/>
    <rect fill="#D00" y="200" width="900" height="200"/>
    <rect fill="#FFCE00" y="400" width="900" height="200"/>
  </svg>
);

const FlagIT = () => (
  <svg viewBox="0 0 900 600" className="flag-svg">
    <rect fill="#009246" width="900" height="600"/>
    <rect fill="#fff" x="300" width="300" height="600"/>
    <rect fill="#CE2B37" x="600" width="300" height="600"/>
  </svg>
);

const FlagKR = () => (
  <svg viewBox="0 0 900 600" className="flag-svg">
    <rect fill="#fff" width="900" height="600"/>
    <circle fill="none" stroke="#C60C30" strokeWidth="60" cx="450" cy="300" r="120"/>
    <circle fill="#003478" cx="450" cy="300" r="90"/>
  </svg>
);

// Multi-language greetings
const greetings = [
  { text: 'Hello World', lang: 'English', flag: <FlagGB /> },
  { text: 'नमस्ते संसार', lang: 'Nepali', flag: <FlagNP /> },
  { text: 'Bonjour le Monde', lang: 'French', flag: <FlagFR /> },
  { text: 'こんにちは世界', lang: 'Japanese', flag: <FlagJP /> },
  { text: 'Hola Mundo', lang: 'Spanish', flag: <FlagES /> },
  { text: 'Hallo Welt', lang: 'German', flag: <FlagDE /> },
  { text: 'Ciao Mondo', lang: 'Italian', flag: <FlagIT /> },
  { text: '안녕하세요 세계', lang: 'Korean', flag: <FlagKR /> },
];

export default function GreetingPage({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 600); // Fast transition
      return () => clearTimeout(timer);
    } else {
      // Quick exit after last greeting
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onComplete();
        }, 600);
      }, 800); // Brief pause on last greeting
      return () => clearTimeout(exitTimer);
    }
  }, [currentIndex, onComplete]);

  return (
    <div className={`greeting-page ${isExiting ? 'fade-exit' : ''}`}>
      {/* Animated Background */}
      <div className="greeting-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="greeting-particles">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="greeting-content">
        {/* Current Greeting */}
        <div className="greeting-display">
          <div className="flag-icon">{greetings[currentIndex].flag}</div>
          <h1 className="greeting-text">{greetings[currentIndex].text}</h1>
          <p className="language-name">{greetings[currentIndex].lang}</p>
        </div>

        {/* Progress Dots */}
        <div className="greeting-progress">
          {greetings.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${index === currentIndex ? 'active' : ''} ${
                index < currentIndex ? 'completed' : ''
              }`}
            />
          ))}
        </div>
      </div>

      {/* Ripple Effect on Exit */}
      {isExiting && (
        <div className="exit-ripple">
          <div className="ripple-circle ripple-1"></div>
          <div className="ripple-circle ripple-2"></div>
          <div className="ripple-circle ripple-3"></div>
        </div>
      )}
    </div>
  );
}
