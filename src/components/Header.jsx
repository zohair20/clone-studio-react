import { Icon, openLink } from "./Icon";

export default function Header() {
  return (
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
          <button className="btn-reseller" onClick={() => openLink("telegram")}>
            <Icon name="reseller" /> Reseller Program
          </button>
        </nav>
      </div>
    </header>
  );
}
