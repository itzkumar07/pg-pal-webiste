import './Amenities.css';

export default function Amenities() {
  const amenities = [
    {
      icon: "🏊",
      title: "Swimming Pool",
      description: "Enjoy our Olympic-sized pool with panoramic city views"
    },
    {
      icon: "🍽️",
      title: "Fine Dining",
      description: "Experience world-class cuisine from our Michelin-star chefs"
    },
    {
      icon: "💪",
      title: "Fitness Center",
      description: "State-of-the-art gym equipment available 24/7"
    },
    {
      icon: "🧘",
      title: "Spa & Wellness",
      description: "Rejuvenate with our luxury spa treatments and yoga sessions"
    },
    {
      icon: "📶",
      title: "High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet"
    },
    {
      icon: "🚗",
      title: "Valet Parking",
      description: "Convenient 24/7 valet parking service for your vehicle"
    }
  ];

  return (
    <section className="amenities-section">
      <div className="amenities-container">
        <div className="amenities-header">
          <p className="section-subtitle">WORLD-CLASS FACILITIES</p>
          <h2 className="section-title">Enjoy Superior Views from Every Apartment</h2>
        </div>

        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="amenity-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="amenity-icon">{amenity.icon}</div>
              <h3 className="amenity-title">{amenity.title}</h3>
              <p className="amenity-description">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}