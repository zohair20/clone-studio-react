import { useState } from "react";
import { Icon, DeviceIcon, openLink } from "./Icon";

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

export default function Content() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openChannel, setOpenChannel] = useState(null);

  return (
    <>
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
              <div
                key={i}
                className={`channel-region ${openChannel === i ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="region-header"
                  onClick={() => setOpenChannel(openChannel === i ? null : i)}
                >
                  <div className="region-info">
                    <span>{ch.name}</span>
                    <span className="region-badge">
                      {ch.regions} region{ch.regions > 1 ? "s" : ""}
                    </span>
                  </div>
                  <Icon name="chevronDown" />
                </button>
                <div className="region-list">
                  <div className="region-list-inner">
                    {Array.from({ length: ch.regions }, (_, j) => (
                      <span key={j} className="region-item">
                        {ch.name} – Region {j + 1}
                      </span>
                    ))}
                  </div>
                </div>
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
    </>
  );
}
