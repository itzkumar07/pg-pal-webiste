import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Owner Dashboard</h2>
      <Link to="/add-property">Add Property</Link>
    </div>
  );
}

