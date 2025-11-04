// src/App.tsx
import "./App.css";                     // optional
import { Navbar, Footer } from "./components/common";
import { Hero, Features, Popular } from "./components/homePage";

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
