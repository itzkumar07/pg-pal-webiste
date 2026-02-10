import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle">DISCOVER YOUR PERFECT STAY</p>
        <h1 className="hero-title">
          WELCOME TO OUR LUXURIOUS
          <br />
          <span className="highlight">PG & FLATS</span>
        </h1>
        <button className="hero-cta">BOOK NOW</button>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL DOWN</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
