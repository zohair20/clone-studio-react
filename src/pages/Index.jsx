import { useState } from "react";
import "../App.css";

// Contact links - centralized
const WHATSAPP_LINK = "https://wa.me/1234567890";
const TELEGRAM_LINK = "https://t.me/4kspaceiptv";

// Icônes outline (stroke) et filled (fill) fusionnées en un seul composant
const ICONS_OUTLINE = {
  home: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
  plans: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </>
  ),
  channels: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </>
  ),
  setup: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </>
  ),
  reseller: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  arrow: (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12,5 19,12 12,19" />
    </>
  ),
  gift: (
    <>
      <polyline points="20,12 20,22 4,22 4,12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </>
  ),
  check: <polyline points="20,6 9,17 4,12" />,
  cart: (
    <>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </>
  ),
  zap: <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  star: (
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
  ),
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </>
  ),
  play: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" />
      <line x1="17" y1="17" x2="22" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </>
  ),
  chevronDown: <polyline points="6,9 12,15 18,9" />,
  checkCircle: (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22,4 12,14.01 9,11.01" />
    </>
  ),
  headphones: (
    <>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </>
  ),
  refresh: (
    <>
      <polyline points="23,4 23,10 17,10" />
      <polyline points="1,20 1,14 7,14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </>
  ),
  playBtn: <polygon points="5,3 19,12 5,21" fill="currentColor" />,
};
const ICONS_FILLED = {
  apple: (
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  ),
  android: (
    <path d="M17.523 15.341c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91m-11.046 0c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91m11.405-6.02l1.99-3.46c.11-.19.05-.44-.14-.55-.19-.11-.44-.05-.55.14l-2.02 3.51c-1.52-.69-3.23-1.08-5.14-1.08s-3.62.39-5.14 1.08l-2.02-3.51c-.11-.19-.36-.25-.55-.14-.19.11-.25.36-.14.55l1.99 3.46C2.79 11.29.5 14.59.5 18.5h23c0-3.91-2.29-7.21-5.62-9.18" />
  ),
  amazon: (
    <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.383-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66.708-3.726 4.07-4.85 7.085-4.85 1.54 0 3.556.41 4.77 1.576 1.54 1.436 1.394 3.352 1.394 5.438v4.923c0 1.481.616 2.13 1.192 2.929.204.287.249.63-.01.839-.647.541-1.794 1.537-2.423 2.099l-.041-.003z" />
  ),
  windows: (
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  ),
  whatsapp: (
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  ),
  telegram: (
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  ),
};

const Icon = ({ name, variant = "outline", className = "" }) => {
  const filled = variant === "filled";
  const path = filled ? ICONS_FILLED[name] : ICONS_OUTLINE[name];
  if (!path) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      {path}
    </svg>
  );
};

// Icône appareil (TV, Smart TV ou filled)
const DeviceIcon = ({ type, className = "" }) => {
  if (type === "tv") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={className}
      >
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
        <text
          x="12"
          y="17"
          textAnchor="middle"
          fontSize="7"
          fill="currentColor"
          fontWeight="bold"
        >
          TV
        </text>
      </svg>
    );
  }
  if (type === "smartTv") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={className}
      >
        <rect x="2" y="7" width="20" height="12" rx="2" />
        <path d="M12 19v2" />
        <path d="M8 21h8" />
        <path d="M7 3l5 4 5-4" />
      </svg>
    );
  }
  return <Icon name={type} variant="filled" className={className} />;
};

// Data
const PLANS = [
  { duration: "3 Months", originalPrice: 65, currentPrice: 45, save: 30 },
  {
    duration: "12 Months",
    originalPrice: 150,
    currentPrice: 80,
    save: 46,
    featured: true,
  },
  { duration: "6 Months", originalPrice: 90, currentPrice: 59, save: 34 },
];

const FEATURES = [
  {
    icon: "zap",
    title: "Lightning Fast",
    desc: "Zero buffering with our advanced CDN technology",
  },
  {
    icon: "shield",
    title: "Secure & Reliable",
    desc: "Military-grade encryption and 99.9% uptime guarantee",
  },
  {
    icon: "users",
    title: "Multiple Devices",
    desc: "Watch on TV, phone, tablet, and computer simultaneously",
  },
  {
    icon: "star",
    title: "Premium Content",
    desc: "Latest movies, series, and live sports in 4K quality",
  },
  {
    icon: "monitor",
    title: "Cross-Device Compatibility",
    desc: "Stream on any device, including smart TVs, Firestick, Android boxes, and phones.",
  },
  {
    icon: "play",
    title: "Reliable Uptime",
    desc: "Experience uninterrupted streaming with our 99.99% uptime guarantee.",
  },
];

const DEVICES = [
  { icon: "apple", name: "Apple Devices", desc: "iPhone, iPad, Mac, Apple TV" },
  {
    icon: "android",
    name: "Android Devices",
    desc: "All Android smartphones and tablets",
  },
  { icon: "tv", name: "TV Boxes", desc: "All major TV box brands" },
  { icon: "amazon", name: "Amazon FireStick", desc: "Fire TV & FireStick" },
  {
    icon: "smartTv",
    name: "Smart TVs",
    desc: "Samsung, Xiaomi, Google TVs, and more",
  },
  {
    icon: "windows",
    name: "Windows Devices",
    desc: "PCs, laptops, and Windows phones",
  },
];

const FAQS = [
  {
    q: "What is 4K Station IPTV?",
    a: "4K Station IPTV is a premium streaming service that offers over 20,000 channels, movies, and TV shows in stunning 4K quality.",
  },
  {
    q: "How many devices can I use simultaneously?",
    a: "Depending on your plan, you can use 1, 2, or 3 devices simultaneously.",
  },
  {
    q: "Do you offer 4K content?",
    a: "Yes! We offer a wide selection of 4K/UHD content including movies, TV shows, and live sports.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, we offer a free 24-hour trial so you can experience our premium service risk-free.",
  },
  {
    q: "What devices are supported?",
    a: "We support all major platforms including Smart TVs, Android, iOS, Firestick, Windows, and more.",
  },
  {
    q: "How reliable is the service?",
    a: "Our service guarantees 99.99% uptime with advanced CDN technology for buffer-free streaming.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel your subscription at any time. We offer a 7-day money-back guarantee.",
  },
  {
    q: "Do you provide customer support?",
    a: "Yes, we provide 24/7 customer support via live chat, email, and WhatsApp.",
  },
];

const GUARANTEES = [
  {
    icon: "checkCircle",
    title: "100% Secure Checkout",
    desc: "Your payment is 100% safe",
  },
  {
    icon: "headphones",
    title: "24/7 Customer Support",
    desc: "Our dedicated team is always here to help",
  },
  {
    icon: "shield",
    title: "7-Day Satisfaction Guarantee",
    desc: "Try our service risk-free for 7 days",
  },
  { icon: "refresh", title: "Easy Returns", desc: "Hassle-free return policy" },
];

const CHANNELS = [
  { name: "Europe", regions: 6 },
  { name: "Asia", regions: 6 },
  { name: "America", regions: 5 },
  { name: "Africa", regions: 1 },
  { name: "Oceania", regions: 2 },
];

const PARTNERS = [
  "ITV",
  "Sky",
  "Comedy Central",
  "Nickelodeon",
  "Paramount+",
  "Sky Sports",
  "MTV",
  "Disney+",
  "Prime Video",
  "NETFLIX",
  "BT Sport",
  "beIN",
  "BBC",
];

const Index = () => {
  const [activeDevice, setActiveDevice] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);

  const openLink = (type) =>
    window.open(type === "whatsapp" ? WHATSAPP_LINK : TELEGRAM_LINK, "_blank");

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <a href="#home" className="logo">
            <span className="logo-4k">4K</span>
            <span className="logo-space">SPACE</span>
          </a>
          <nav className="nav">
            <ul className="nav-links">
              <li>
                <a href="#home" className="nav-link">
                  <Icon name="home" /> Home
                </a>
              </li>
              <li>
                <a href="#plans" className="nav-link">
                  <Icon name="plans" /> Plans
                </a>
              </li>
              <li>
                <a href="#channels" className="nav-link">
                  <Icon name="channels" /> Channels List
                </a>
              </li>
              <li>
                <a href="#setup" className="nav-link">
                  <Icon name="setup" /> Setup Guide
                </a>
              </li>
            </ul>
            <button
              className="btn-reseller"
              onClick={() => openLink("telegram")}
            >
              <Icon name="reseller" /> Reseller Program
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            poster="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1920&q=80"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        <div className="hero-container">
          <span className="hero-badge animate-pulse-glow">
            <Icon name="playBtn" /> PREMIUM STREAMING
          </span>
          <h1 className="hero-title animate-fade-in-up">
            The Ultimate <span className="highlight animate-glow">4K IPTV</span>{" "}
            Experience
          </h1>
          <p className="hero-description animate-fade-in-up delay-1">
            Enjoy crystal clear streaming with 18,000+ channels, movies, and
            sports.
          </p>
          <div className="hero-features animate-fade-in-up delay-2">
            <span className="feature-item">
              <Icon name="check" /> Works on all devices
            </span>
            <span className="feature-item">
              <Icon name="check" /> No contracts
            </span>
            <span className="feature-item">
              <Icon name="check" /> 24/7 support
            </span>
          </div>
          <div className="hero-buttons animate-fade-in-up delay-3">
            <button
              className="btn-primary btn-animated"
              onClick={() => openLink("whatsapp")}
            >
              Get Started <Icon name="arrow" />
            </button>
            <button
              className="btn-secondary btn-animated"
              onClick={() => openLink("telegram")}
            >
              <Icon name="gift" /> Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners">
        <div className="partners-track">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <span key={i} className="partner-logo">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        {[
          { icon: "wifi", value: "18,000+", label: "Live Channels" },
          { icon: "monitor", value: "80,000+", label: "Movies & Series" },
          { icon: "play", value: "VOD", label: "On Demand" },
          { icon: "users", value: "Anti-Freeze", label: "Technology" },
        ].map((stat, i) => (
          <div key={i} className="stat-card animate-on-scroll">
            <div className="stat-icon icon-animated">
              <Icon name={stat.icon} />
            </div>
            <div className="stat-value counter">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="pricing-section" id="plans">
        <div className="pricing-header">
          <h2 className="pricing-title">
            Choose Your <span className="highlight">Perfect Plan</span>
          </h2>
          <p className="pricing-subtitle">
            Unlock premium streaming with flexible pricing options tailored to
            your needs.
          </p>
        </div>
        <div className="device-toggle">
          <div className="toggle-container">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`toggle-btn ${activeDevice === num ? "active" : ""}`}
                onClick={() => setActiveDevice(num)}
              >
                <Icon name="zap" /> {num} Device{num > 1 ? "s" : ""}
              </button>
            ))}
          </div>
        </div>
        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card animate-on-scroll ${
                plan.featured ? "featured" : ""
              }`}
            >
              {plan.featured && (
                <div className="best-value-badge animate-bounce-subtle">
                  <Icon name="star" /> BEST VALUE
                </div>
              )}
              <div className="save-badge">{plan.save}% OFF</div>
              <div className="plan-duration">{plan.duration}</div>
              <div className="plan-price">
                <span className="original-price">${plan.originalPrice}</span>
                <span className="current-price">
                  ${plan.currentPrice * activeDevice}
                </span>
              </div>
              <ul className="plan-features">
                {[
                  "HD/4K/FHD/HD/SD Quality",
                  "+20,000 Channels",
                  "+100,000 Movies & TV Shows",
                  "99.99% Uptime",
                  "REAL SUPPORT 24/7",
                  "7 days money back guarantee",
                ].map((f, j) => (
                  <li key={j} className="plan-feature">
                    <Icon name="check" /> {f}
                  </li>
                ))}
              </ul>
              <button
                className="btn-buy btn-animated"
                onClick={() => openLink("whatsapp")}
              >
                <Icon name="cart" /> Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trial */}
      <section className="trial-section">
        <button
          className="btn-trial btn-animated animate-pulse-glow"
          onClick={() => openLink("telegram")}
        >
          <Icon name="gift" /> Request FREE 24-Hour Trial
        </button>
        <p className="trial-note">
          Experience our premium service risk-free.{" "}
          <strong>No credit card required.</strong>
        </p>
      </section>

      {/* Features */}
      <section className="features-section" id="setup">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose <span className="highlight">4K Space</span>?
            </h2>
            <p className="section-subtitle">
              Experience the future of entertainment with our cutting-edge IPTV
              technology
            </p>
          </div>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="feature-card animate-on-scroll"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="feature-icon icon-animated">
                  <Icon name={f.icon} />
                </div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-description">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices */}
      <section className="devices-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Works on All Your <span className="highlight">Devices</span>
            </h2>
          </div>
          <div className="devices-grid">
            {DEVICES.slice(0, 4).map((d, i) => (
              <div key={i} className="device-card animate-on-scroll">
                <div className="device-icon icon-animated">
                  <DeviceIcon type={d.icon} />
                </div>
                <h3 className="device-name">{d.name}</h3>
                <p className="device-description">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="devices-grid-bottom">
            {DEVICES.slice(4).map((d, i) => (
              <div key={i} className="device-card animate-on-scroll">
                <div className="device-icon icon-animated">
                  <DeviceIcon type={d.icon} />
                </div>
                <h3 className="device-name">{d.name}</h3>
                <p className="device-description">{d.desc}</p>
              </div>
            ))}
          </div>
          <p className="devices-note">
            Enjoy seamless streaming experience across all major platforms and
            devices.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Frequently Asked <span className="highlight">Questions</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about 4K Station IPTV service
            </p>
          </div>
          <div className="faq-container">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? "open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q} <Icon name="chevronDown" />
                </button>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="guarantee-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Your Satisfaction is <span className="highlight">Guaranteed</span>
            </h2>
            <p className="section-subtitle">
              We stand behind our products and services with these promises
            </p>
          </div>
          <div className="guarantee-grid">
            {GUARANTEES.map((g, i) => (
              <div key={i} className="guarantee-card animate-on-scroll">
                <div className="guarantee-icon icon-animated">
                  <Icon name={g.icon} />
                </div>
                <h3 className="guarantee-title">{g.title}</h3>
                <p className="guarantee-description">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="channels-section" id="channels">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title channels-title">
              Premium <span className="highlight">Channels</span>
            </h2>
            <p className="section-subtitle channels-subtitle">
              Crystal Clear Quality, Worldwide Entertainment
            </p>
            <p className="section-subtitle">
              Explore our collection of 4K/UHD channels, live sports, movies &
              global entertainment
            </p>
          </div>
          <div className="channels-container">
            {CHANNELS.map((ch, i) => (
              <div key={i} className="channel-region">
                <button className="region-header">
                  <div className="region-info">
                    <span>{ch.name}</span>
                    <span className="region-badge">
                      {ch.regions} region{ch.regions > 1 ? "s" : ""}
                    </span>
                  </div>
                  <Icon name="chevronDown" />
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
              The ultimate IPTV experience with 10,000+ channels in stunning 4K
              quality.
            </p>
            <div className="footer-social">
              <button
                className="social-btn whatsapp"
                onClick={() => openLink("whatsapp")}
              >
                <Icon name="whatsapp" variant="filled" />
              </button>
              <button
                className="social-btn telegram"
                onClick={() => openLink("telegram")}
              >
                <Icon name="telegram" variant="filled" />
              </button>
            </div>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Service</h4>
            <div className="footer-links">
              <a href="#plans" className="footer-link">
                Pricing Plans
              </a>
              <a href="#setup" className="footer-link">
                Setup Guide
              </a>
              <a href="#channels" className="footer-link">
                Channels List
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <div className="footer-links">
              <button
                className="footer-link-btn"
                onClick={() => openLink("whatsapp")}
              >
                WhatsApp Support
              </button>
              <button
                className="footer-link-btn"
                onClick={() => openLink("telegram")}
              >
                Telegram Support
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2024 4K Space. All rights reserved.
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <button
          className="floating-btn telegram animate-float"
          onClick={() => openLink("telegram")}
          title="Telegram"
        >
          <Icon name="telegram" variant="filled" />
        </button>
        <button
          className="floating-btn contact animate-pulse-border"
          onClick={() => openLink("whatsapp")}
        >
          Contact us
        </button>
        <button
          className="floating-btn whatsapp animate-float"
          onClick={() => openLink("whatsapp")}
          title="WhatsApp"
          style={{ animationDelay: "0.5s" }}
        >
          <Icon name="whatsapp" variant="filled" />
        </button>
      </div>
    </div>
  );
};

export default Index;
