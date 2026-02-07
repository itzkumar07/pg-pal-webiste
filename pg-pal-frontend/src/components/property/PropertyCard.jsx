import "./PropertyCard.css";

export default function PropertyCard({ data }) {
  return (
    <div className="property-card">
      <img src={data.image} alt="property" />
      <h3>{data.title}</h3>
      <p>{data.city}</p>
      <p className="price">₹ {data.price} / month</p>
    </div>
  );
}
