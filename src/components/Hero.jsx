import { Icon, openLink } from "./Icon";

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

const STATS = [
  { icon: "wifi", value: "18,000+", label: "Live Channels" },
  { icon: "monitor", value: "80,000+", label: "Movies & Series" },
  { icon: "play", value: "VOD", label: "On Demand" },
  { icon: "users", value: "Anti-Freeze", label: "Technology" },
];

export default function Hero() {
  return (
    <>
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
          <div className="hero-video-overlay" />
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

      <section className="partners">
        <div className="partners-track">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <span key={i} className="partner-logo">
              {p}
            </span>
          ))}
        </div>
      </section>

      <section className="stats-section">
        {STATS.map((stat, i) => (
          <div key={i} className="stat-card animate-on-scroll">
            <div className="stat-icon icon-animated">
              <Icon name={stat.icon} />
            </div>
            <div className="stat-value counter">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>
    </>
  );
}
