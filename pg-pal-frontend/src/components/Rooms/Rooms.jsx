import { useState } from "react";
import "./Rooms.css";

export default function Rooms() {
  const [activeCategory, setActiveCategory] = useState("all");

  const properties = [
    {
      id: 1,
      title: "Deluxe Suite",
      category: "hotel",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
      price: "₹5,000",
      period: "night",
      beds: 2,
      area: "45 sqm",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Premium PG Room",
      category: "pg",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071",
      price: "₹8,000",
      period: "month",
      beds: 1,
      area: "20 sqm",
      rating: 4.6,
    },
    {
      id: 3,
      title: "Executive Room",
      category: "hotel",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074",
      price: "₹7,500",
      period: "night",
      beds: 2,
      area: "50 sqm",
      rating: 4.9,
    },
    {
      id: 4,
      title: "Luxury Flat",
      category: "flat",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080",
      price: "₹25,000",
      period: "month",
      beds: 3,
      area: "120 sqm",
      rating: 4.7,
    },
    {
      id: 5,
      title: "Cozy PG Room",
      category: "pg",
      image:
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057",
      price: "₹6,500",
      period: "month",
      beds: 1,
      area: "18 sqm",
      rating: 4.5,
    },
    {
      id: 6,
      title: "Studio Apartment",
      category: "flat",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070",
      price: "₹15,000",
      period: "month",
      beds: 1,
      area: "35 sqm",
      rating: 4.8,
    },
  ];

  const filteredProperties =
    activeCategory === "all"
      ? properties
      : properties.filter((p) => p.category === activeCategory);

  return (
    <section className="rooms-section">
      <div className="rooms-header">
        <p className="section-subtitle">EXPLORE OUR COLLECTION</p>
        <h2 className="section-title">Our Exquisite Rooms Collections</h2>

        <div className="category-filters">
          <button
            className={activeCategory === "all" ? "active" : ""}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          <button
            className={activeCategory === "hotel" ? "active" : ""}
            onClick={() => setActiveCategory("hotel")}
          >
            Hotels
          </button>
          <button
            className={activeCategory === "pg" ? "active" : ""}
            onClick={() => setActiveCategory("pg")}
          >
            PG Rooms
          </button>
          <button
            className={activeCategory === "flat" ? "active" : ""}
            onClick={() => setActiveCategory("flat")}
          >
            Flats
          </button>
        </div>
      </div>

      <div className="rooms-grid">
        {filteredProperties.map((property, index) => (
          <div
            key={property.id}
            className="room-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="room-image">
              <img src={property.image} alt={property.title} />
              <div className="room-overlay">
                <button className="view-details">View Details</button>
              </div>
            </div>
            <div className="room-info">
              <div className="room-header">
                <h3 className="room-title">{property.title}</h3>
                <div className="room-rating">
                  <span>★</span> {property.rating}
                </div>
              </div>
              <div className="room-features">
                <span className="feature">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  {property.area}
                </span>
                <span className="feature">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  {property.beds} Bed{property.beds > 1 ? "s" : ""}
                </span>
              </div>
              <div className="room-footer">
                <div className="room-price">
                  <span className="price">{property.price}</span>
                  <span className="period">/ {property.period}</span>
                </div>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
