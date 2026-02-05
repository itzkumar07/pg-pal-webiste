const services = [
  "Personal Parking",
  "Affluence Gym",
  "Bluetooth Shower",
  "Face Recognition",
  "Vending Machine",
  "Security Guard 24/7",
  "Premium Laundry",
  "High Speed Wifi"
];

export default function Services() {
  return (
    <section className="services">
      <h2>Services We Offer</h2>
      <div className="service-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">{s}</div>
        ))}
      </div>
      <button className="outline-btn">Click To Know More</button>
    </section>
  );
}
