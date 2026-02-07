// App.jsx
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Content from "./components/Content";
import InstallationGuidege from "./components/installation-guide"; // Assure-toi de créer ce composant
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  // Page principale qui contient tes composants
  function MainPage() {
    return (
      <div className="app">
        
        <Hero />
        <Pricing />
        <Content />
      </div>
    );
  }

  return (
    <BrowserRouter>
      {/* Navbar simple pour naviguer */}
      <Header/>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<InstallationGuidege />} />
      </Routes>
    </BrowserRouter>
  );
}
