// src/App.tsx
import "./App.css";                     // optional
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Popular from "./components/Popular";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Popular />
      <Footer />
    </>
  );
}
