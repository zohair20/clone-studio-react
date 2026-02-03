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

const MOVIES = [
  {
    img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
    title: "Sisu",
  },
  {
    img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop",
    title: "IT Chapter Two",
  },
  {
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    title: "The Matrix",
  },
  {
    img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop",
    title: "Premier League",
  },
];
const FEATURES = [
  { icon: "wifi", title: "Live Updates", desc: "Real-time streaming" },
  { icon: "monitor", title: "4K Quality", desc: "Ultra HD visuals" },
  { icon: "play", title: "+18K Channels", desc: "All world wide" },
  { icon: "slash", title: "No Buffering", desc: "Smooth playback" },
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
            poster="4K STATION.webm"
          >
            <source
              src="4K STATION.webm"
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
      {/*   ICI */}

      <section className="media-section">
        <div className="section-header text-center">
          <h2>
            Popular <span className="highlight">Movies, Series & Sports</span>
          </h2>
          <p>Immerse yourself in world-class entertainment.</p>
        </div>

        <div className="slider-container">
          <div className="infinite-track">
            {/* Doublina l-array bach t-ban infinite */}
            {[...MOVIES, ...MOVIES].map((movie, i) => (
              <div key={i} className="media-card-slider">
                <img src={movie.img} alt={movie.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Section Stats & Features - Jat men be3d */}
      <section className="stats-section">
        {FEATURES.map((feat, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon">
              <Icon name={feat.icon} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{feat.title}</div>
              <div className="stat-label">{feat.desc}</div>
            </div>
          </div>
        ))}
      </section>
      {/* Section Movies & Sports */}
      {/* <section className="media-section">
        <div className="section-header">
          <h2>
            Popular <span className="highlight">Movies, Series & Sports</span>
          </h2>
          <p>
            Immerse yourself in world-class entertainment with crystal-clear 4K
            resolution.
          </p>
        </div>

        <div className="media-grid">
          {MOVIES.map((movie, i) => (
            <div key={i} className="media-card">
              <img src={movie.img} alt={movie.title} />
            </div>
          ))}
        </div>
      </section> */}
      {/* Section Features/Stats */}
      {/* <div className="features-grid">
          {FEATURES.map((feat, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon-wrapper">
                <Icon name={feat.icon} />
              </div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section> */}
    </>
  );
}
