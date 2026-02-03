import { useState } from "react";
import { Icon, openLink } from "./Icon";

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

const PLAN_FEATURES = [
  "HD/4K/FHD/HD/SD Quality",
  "+20,000 Channels",
  "+100,000 Movies & TV Shows",
  "99.99% Uptime",
  "REAL SUPPORT 24/7",
  "7 days money back guarantee",
];

export default function Pricing() {
  const [activeDevice, setActiveDevice] = useState(1);

  return (
    <>
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
                {PLAN_FEATURES.map((f, j) => (
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
    </>
  );
}
