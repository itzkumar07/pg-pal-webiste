import { useEffect, useState } from "react";
import api from "../services/api";
import "../css/pages/Home.css";

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/properties.php")
      .then(res => setList(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">PG FINDER</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Properties</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button className="btn-outline">Post Property</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h4>Find Your Perfect Stay</h4>
          <h1>PGs & FLATS<br />ACROSS INDIA</h1>
          <button className="btn-primary">Explore Now</button>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat-box">
          <h2>{list.length}+</h2>
          <p>Properties Listed</p>
        </div>
        <div className="stat-box">
          <h2>50+</h2>
          <p>Cities Covered</p>
        </div>
        <div className="stat-box">
          <h2>10K+</h2>
          <p>Happy Tenants</p>
        </div>
      </section>

      {/* Properties Section (API DATA) */}
      <section className="rooms">
        <h2>Available PGs & Flats</h2>

        <div className="room-grid">
          {list.map(item => (
            <div className="room-card" key={item.id}>
              <img
                src={item.image || "https://picsum.photos/400/300"}
                alt={item.title}
              />
              <div className="room-info">
                <h3>{item.title}</h3>
                <p>{item.city}</p>
                <p className="price">₹{item.rent} / month</p>
              </div>
            </div>
          ))}
        </div>

        {list.length === 0 && <p>No properties available.</p>}
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="feature-grid">
          <div>Verified Properties</div>
          <div>No Brokerage</div>
          <div>Affordable Rent</div>
          <div>Prime Locations</div>
          <div>24x7 Support</div>
          <div>Easy Booking</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>Is brokerage charged?</summary>
          <p>No, we provide zero brokerage listings.</p>
        </details>
        <details>
          <summary>Are properties verified?</summary>
          <p>Yes, all properties are verified by our team.</p>
        </details>
        <details>
          <summary>Can I post my property?</summary>
          <p>Yes, owners can post properties for free.</p>
        </details>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 PG / Flat Finder. All Rights Reserved.</p>
      </footer>
    </>
  );
}
