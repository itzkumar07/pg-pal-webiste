import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      background: "#fff"
    }}>
      <h3 style={{ marginBottom: 8 }}>{property.title}</h3>

      <p><strong>City:</strong> {property.city}</p>
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Rent:</strong> ₹{property.rent} / month</p>

      <div style={{ marginTop: 12 }}>
        <Link
          to={`/property/${property.id}`}
          style={{
            padding: "6px 12px",
            background: "#2563eb",
            color: "#fff",
            textDecoration: "none",
            borderRadius: 4
          }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
