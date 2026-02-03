import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Content from "./components/Content";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Pricing />
      <Content />
    </div>
  );
}
