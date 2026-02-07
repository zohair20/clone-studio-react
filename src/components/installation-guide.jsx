import React, { useState } from 'react';
import { ChevronRight, Tv, Box, Smartphone, Apple } from 'lucide-react';
import './installation-guide.css';

export default function InstallationGuide() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const devices = [
    { 
      icon: <Tv size={24} />, 
      name: 'Amazon Fire TV Stick and Fire TV Cube',
      id: 'fire-tv'
    },
    { 
      icon: <Box size={24} />, 
      name: 'Android BOX (TV boxes)',
      id: 'android-box'
    },
    { 
      icon: <Tv size={24} />, 
      name: 'Smart TVs (Samsung, LG)',
      id: 'samsung-lg'
    },
    { 
      icon: <Tv size={24} />, 
      name: 'Smart TVs (Hisense, Toshiba)',
      id: 'hisense-toshiba'
    },
    { 
      icon: <Tv size={24} />, 
      name: 'Smart TVs (Android TVs, Sony, etc.)',
      id: 'android-tvs'
    },
    { 
      icon: <Apple size={24} />, 
      name: 'Apple TV & Apple Box',
      id: 'apple-tv'
    },
    { 
      icon: <Tv size={24} />, 
      name: 'Other Smart TVs',
      id: 'other-tvs'
    },
    { 
      icon: <Box size={24} />, 
      name: 'MAG Boxes and STB',
      id: 'mag-stb'
    },
    { 
      icon: <Smartphone size={24} />, 
      name: 'Android (Smartphones, Tablets)',
      id: 'android-mobile'
    },
    { 
      icon: <Smartphone size={24} />, 
      name: 'iOS (iPhone and iPad)',
      id: 'ios-mobile'
    }
  ];

  return (
    <div className="installation-container">
      {/* Decorative background elements */}
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />

      <div className="content-wrapper">
        {/* Header Badge */}
        <div className="header-section">
          <span className="step-badge">Step-by-Step</span>
        </div>

        {/* Main Title */}
        <h1 className="main-title">
          Installation <span className="title-highlight">Guide</span>
        </h1>

        {/* Subtitle */}
        <p className="subtitle">
          Follow these steps to set up your IPTV service on your device
        </p>

        {/* Device List */}
        <div className="device-list">
          {devices.map((device, index) => (
            <div
              key={device.id}
              className="device-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="device-content">
                <div className="icon-container">
                  <div className="device-icon">
                    {device.icon}
                  </div>
                </div>
                <span className="device-name">{device.name}</span>
              </div>
              <ChevronRight size={20} className="chevron-icon" />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="footer-section">
          <p className="footer-text">
            Select your device to view detailed installation instructions
          </p>
        </div>
      </div>
    </div>
  );
}

