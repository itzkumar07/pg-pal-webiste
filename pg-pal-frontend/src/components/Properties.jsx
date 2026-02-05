import { useEffect, useState } from "react";
import api from "../services/api";

export default function Properties() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/property/list.php").then(res => setList(res.data));
  }, []);

  return (
    <section className="properties">
      <h2>Our Properties</h2>
      <div className="property-grid">
        {list.map(p => (
          <div key={p.id} className="property-card">
            <h3>{p.title}</h3>
            <p>{p.city}</p>
            <strong>₹ {p.rent}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
