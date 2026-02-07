import { Link } from "react-router-dom";
import { Icon, openLink } from "./Icon";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-4k">4K</span>
          <span className="logo-space">SPACE</span>
        </Link>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/" 
              onClick={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
              className="nav-link">
                <Icon name="home" /> Home
              </Link>
            </li>
            <li>
              <a href="/#plans" className="nav-link">
                <Icon name="plans" /> Plans
              </a>
            </li>
            <li>
              <a href="/#channels" className="nav-link">
                <Icon name="channels" /> Channels List
              </a>
            </li>
            <li>
              <Link to="/home"
               onClick={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
              className="nav-link">
                <Icon name="setup" /> Setup Guide
              </Link>
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
