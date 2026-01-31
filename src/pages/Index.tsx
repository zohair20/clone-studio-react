import { useState } from 'react';
import '../App.css';

// Icons as simple SVG components
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const PlansIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="16"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);

const ChannelsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="9" y1="21" x2="9" y2="9"/>
  </svg>
);

const SetupIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const ResellerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

const GiftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,12 20,22 4,22 4,12"/>
    <rect x="2" y="7" width="20" height="5"/>
    <line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
  </svg>
);

const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
    <line x1="7" y1="2" x2="7" y2="22"/>
    <line x1="17" y1="2" x2="17" y2="22"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <line x1="2" y1="7" x2="7" y2="7"/>
    <line x1="2" y1="17" x2="7" y2="17"/>
    <line x1="17" y1="17" x2="22" y2="17"/>
    <line x1="17" y1="7" x2="22" y2="7"/>
  </svg>
);

const WifiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
    <line x1="12" y1="20" x2="12.01" y2="20"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22,4 12,14.01 9,11.01"/>
  </svg>
);

const HeadphonesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
);

const RefreshIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23,4 23,10 17,10"/>
    <polyline points="1,20 1,14 7,14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22,2 15,22 11,13 2,9 22,2"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.341c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91m-11.046 0c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91m11.405-6.02l1.99-3.46c.11-.19.05-.44-.14-.55-.19-.11-.44-.05-.55.14l-2.02 3.51c-1.52-.69-3.23-1.08-5.14-1.08s-3.62.39-5.14 1.08l-2.02-3.51c-.11-.19-.36-.25-.55-.14-.19.11-.25.36-.14.55l1.99 3.46C2.79 11.29.5 14.59.5 18.5h23c0-3.91-2.29-7.21-5.62-9.18"/>
  </svg>
);

const TvIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
    <text x="12" y="17" textAnchor="middle" fontSize="7" fill="currentColor" fontWeight="bold">TV</text>
  </svg>
);

const AmazonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.383-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66.708-3.726 4.07-4.85 7.085-4.85 1.54 0 3.556.41 4.77 1.576 1.54 1.436 1.394 3.352 1.394 5.438v4.923c0 1.481.616 2.13 1.192 2.929.204.287.249.63-.01.839-.647.541-1.794 1.537-2.423 2.099l-.041-.003z"/>
  </svg>
);

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
  </svg>
);

const SmartTvIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="12" rx="2"/>
    <path d="M12 19v2"/>
    <path d="M8 21h8"/>
    <path d="M7 3l5 4 5-4"/>
  </svg>
);

const Index = () => {
  const [activeDevice, setActiveDevice] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    { duration: '3 Months', originalPrice: 65, currentPrice: 45, save: 30 },
    { duration: '12 Months', originalPrice: 150, currentPrice: 80, save: 46, featured: true },
    { duration: '6 Months', originalPrice: 90, currentPrice: 59, save: 34 },
  ];

  const features = [
    { icon: <ZapIcon />, title: 'Lightning Fast', description: 'Zero buffering with our advanced CDN technology' },
    { icon: <ShieldIcon />, title: 'Secure & Reliable', description: 'Military-grade encryption and 99.9% uptime guarantee' },
    { icon: <UsersIcon />, title: 'Multiple Devices', description: 'Watch on TV, phone, tablet, and computer simultaneously' },
    { icon: <StarIcon />, title: 'Premium Content', description: 'Latest movies, series, and live sports in 4K quality' },
    { icon: <MonitorIcon />, title: 'Cross-Device Compatibility', description: 'Stream on any device, including smart TVs, Firestick, Android boxes, and phones.' },
    { icon: <PlayIcon />, title: 'Reliable Uptime', description: 'Experience uninterrupted streaming with our 99.99% uptime guarantee.' },
  ];

  const devices = [
    { icon: <AppleIcon />, name: 'Apple Devices', description: 'iPhone, iPad, Mac, Apple TV' },
    { icon: <AndroidIcon />, name: 'Android Devices', description: 'All Android smartphones and tablets' },
    { icon: <TvIcon />, name: 'TV Boxes', description: 'All major TV box brands' },
    { icon: <AmazonIcon />, name: 'Amazon FireStick', description: 'Fire TV & FireStick' },
    { icon: <SmartTvIcon />, name: 'Smart TVs', description: 'Samsung, Xiaomi, Google TVs, and more' },
    { icon: <WindowsIcon />, name: 'Windows Devices', description: 'PCs, laptops, and Windows phones' },
  ];

  const faqs = [
    { question: 'What is 4K Station IPTV?', answer: '4K Station IPTV is a premium streaming service that offers over 20,000 channels, movies, and TV shows in stunning 4K quality.' },
    { question: 'How many devices can I use simultaneously?', answer: 'Depending on your plan, you can use 1, 2, or 3 devices simultaneously.' },
    { question: 'Do you offer 4K content?', answer: 'Yes! We offer a wide selection of 4K/UHD content including movies, TV shows, and live sports.' },
    { question: 'Is there a free trial available?', answer: 'Yes, we offer a free 24-hour trial so you can experience our premium service risk-free.' },
    { question: 'What devices are supported?', answer: 'We support all major platforms including Smart TVs, Android, iOS, Firestick, Windows, and more.' },
    { question: 'How reliable is the service?', answer: 'Our service guarantees 99.99% uptime with advanced CDN technology for buffer-free streaming.' },
    { question: 'Can I cancel my subscription anytime?', answer: 'Yes, you can cancel your subscription at any time. We offer a 7-day money-back guarantee.' },
    { question: 'Do you provide customer support?', answer: 'Yes, we provide 24/7 customer support via live chat, email, and WhatsApp.' },
  ];

  const guarantees = [
    { icon: <CheckCircleIcon />, title: '100% Secure Checkout', description: 'Your payment is 100% safe' },
    { icon: <HeadphonesIcon />, title: '24/7 Customer Support', description: 'Our dedicated team is always here to help' },
    { icon: <ShieldIcon />, title: '7-Day Satisfaction Guarantee', description: 'Try our service risk-free for 7 days' },
    { icon: <RefreshIcon />, title: 'Easy Returns', description: 'Hassle-free return policy' },
  ];

  const channels = [
    { name: 'Europe', regions: 6 },
    { name: 'Asia', regions: 6 },
    { name: 'America', regions: 5 },
    { name: 'Africa', regions: 1 },
    { name: 'Oceania', regions: 2 },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-4k">4K</span>
            <span className="logo-space">SPACE</span>
          </div>
          <nav className="nav">
            <ul className="nav-links">
              <li><a href="#home" className="nav-link"><HomeIcon /> Home</a></li>
              <li><a href="#plans" className="nav-link"><PlansIcon /> Plans</a></li>
              <li><a href="#channels" className="nav-link"><ChannelsIcon /> Channels List</a></li>
              <li><a href="#setup" className="nav-link"><SetupIcon /> Setup Guide</a></li>
            </ul>
            <button className="btn-reseller">
              <ResellerIcon /> Reseller Program
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <span className="hero-badge">PREMIUM STREAMING</span>
          <h1 className="hero-title">
            The Ultimate <span className="highlight">4K IPTV</span> Experience
          </h1>
          <p className="hero-description">
            Enjoy crystal clear streaming with 18,000+ channels, movies, and sports.
          </p>
          <div className="hero-features">
            <span>Works on all devices</span>
            <span>• No contracts</span>
            <span>• 24/7 support</span>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">
              Get Started <ArrowIcon />
            </button>
            <button className="btn-secondary">
              <GiftIcon /> Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners">
        <div className="partners-track">
          {['ITV', 'Sky', 'Comedy Central', 'Nickelodeon', 'Paramount+', 'Sky Sports', 'MTV', 'Disney+', 'Prime Video', 'NETFLIX', 'BT Sport', 'beIN', 'BBC', 'ITV', 'Sky', 'Comedy Central', 'Nickelodeon', 'Paramount+', 'Sky Sports', 'MTV', 'Disney+', 'Prime Video', 'NETFLIX', 'BT Sport', 'beIN', 'BBC'].map((partner, i) => (
            <span key={i} style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', opacity: 0.7, whiteSpace: 'nowrap' }}>{partner}</span>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-icon"><WifiIcon /></div>
          <div className="stat-value">18,000+</div>
          <div className="stat-label">Live Channels</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><MonitorIcon /></div>
          <div className="stat-value">80,000+</div>
          <div className="stat-label">Movies & Series</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><PlayIcon /></div>
          <div className="stat-value">VOD</div>
          <div className="stat-label">On Demand</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><UsersIcon /></div>
          <div className="stat-value">Anti-Freeze</div>
          <div className="stat-label">Technology</div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="plans">
        <div className="pricing-header">
          <h2 className="pricing-title">Choose Your <span className="highlight">Perfect Plan</span></h2>
          <p className="pricing-subtitle">Unlock premium streaming with flexible pricing options tailored to your needs.</p>
        </div>

        <div className="device-toggle">
          <div className="toggle-container">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`toggle-btn ${activeDevice === num ? 'active' : ''}`}
                onClick={() => setActiveDevice(num)}
              >
                <ZapIcon /> {num} Device{num > 1 ? 's' : ''}
              </button>
            ))}
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && (
                <div className="best-value-badge">
                  <StarIcon /> BEST VALUE
                </div>
              )}
              <div className="save-badge">Save {plan.save}%</div>
              <div className="plan-duration">{plan.duration}</div>
              <div className="plan-price">
                <span className="original-price">${plan.originalPrice}</span>
                <span className="current-price">${plan.currentPrice}</span>
              </div>
              <ul className="plan-features">
                <li className="plan-feature"><CheckIcon /> HD/4K/FHD/HD/SD Quality</li>
                <li className="plan-feature"><CheckIcon /> +20,000 Channels</li>
                <li className="plan-feature"><CheckIcon /> +100,000 Movies & TV Shows</li>
                <li className="plan-feature"><CheckIcon /> 99.99% Uptime</li>
                <li className="plan-feature"><CheckIcon /> REAL SUPPORT 24/7</li>
                <li className="plan-feature"><CheckIcon /> 7 days money back guarantee</li>
              </ul>
              <button className="btn-buy">
                <CartIcon /> Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trial Section */}
      <section className="trial-section">
        <button className="btn-trial">
          <GiftIcon /> Request FREE 24-Hour Trial
        </button>
        <p className="trial-note">Experience our premium service risk-free. <strong>No credit card required.</strong></p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose <span className="highlight">4K Space</span>?</h2>
            <p className="section-subtitle">Experience the future of entertainment with our cutting-edge IPTV technology</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="devices-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Works on All Your Devices</h2>
          </div>
          <div className="devices-grid">
            {devices.slice(0, 4).map((device, index) => (
              <div key={index} className="device-card">
                <div className="device-icon">{device.icon}</div>
                <h3 className="device-name">{device.name}</h3>
                <p className="device-description">{device.description}</p>
              </div>
            ))}
          </div>
          <div className="devices-grid-bottom">
            {devices.slice(4).map((device, index) => (
              <div key={index} className="device-card">
                <div className="device-icon">{device.icon}</div>
                <h3 className="device-name">{device.name}</h3>
                <p className="device-description">{device.description}</p>
              </div>
            ))}
          </div>
          <p className="devices-note">Enjoy seamless streaming experience across all major platforms and devices.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
            <p className="section-subtitle">Everything you need to know about 4K Station IPTV service</p>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  {faq.question}
                  <ChevronDownIcon />
                </button>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="guarantee-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Your Satisfaction is Guaranteed</h2>
            <p className="section-subtitle">We stand behind our products and services with these promises</p>
          </div>
          <div className="guarantee-grid">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="guarantee-card">
                <div className="guarantee-icon">{guarantee.icon}</div>
                <h3 className="guarantee-title">{guarantee.title}</h3>
                <p className="guarantee-description">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="channels-section" id="channels">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title channels-title">Premium Channels</h2>
            <p className="section-subtitle channels-subtitle">Crystal Clear Quality, Worldwide Entertainment</p>
            <p className="section-subtitle">Explore our collection of 4K/UHD channels, live sports, movies & global entertainment</p>
          </div>
          <div className="channels-container">
            {channels.map((channel, index) => (
              <div key={index} className="channel-region">
                <button className="region-header">
                  <div className="region-info">
                    <span>{channel.name}</span>
                    <span className="region-badge">{channel.regions} region{channel.regions > 1 ? 's' : ''}</span>
                  </div>
                  <ChevronDownIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-4k">4K</span>
              <span className="logo-space">SPACE</span>
            </div>
            <p className="footer-description">
              The ultimate IPTV experience with 10,000+ channels in stunning 4K quality.
            </p>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Service</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">Pricing Plans</a>
              <a href="#" className="footer-link">Setup Guide</a>
            </div>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">FAQ</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2024 4K Station. All rights reserved.
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <button className="floating-btn telegram">
          <SendIcon />
        </button>
        <button className="floating-btn contact">
          Contact us
        </button>
        <button className="floating-btn whatsapp">
          <PhoneIcon />
        </button>
      </div>
    </div>
  );
};

export default Index;
