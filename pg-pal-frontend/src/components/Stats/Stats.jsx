import './Stats.css';

export default function Stats() {
  const stats = [
    {
      number: "98%",
      label: "Happy Guests",
      description: "From 900+ reviews"
    },
    {
      number: "150+",
      label: "Premium Properties",
      description: "Across major cities"
    },
    {
      number: "25K+",
      label: "Bookings",
      description: "Successfully completed"
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <h2 className="stat-number">{stat.number}</h2>
            <h3 className="stat-label">{stat.label}</h3>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}