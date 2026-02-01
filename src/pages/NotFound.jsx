import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: '#0a0a0a',
      color: '#fff'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: '#00d9a5' }}>404</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '1rem', opacity: 0.7 }}>Page not found</p>
        <a href="/" style={{ color: '#00d9a5', textDecoration: 'underline' }}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
