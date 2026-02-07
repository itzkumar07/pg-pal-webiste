import { useEffect, useState } from "react";
import { getProperties } from "../api/api";
import PropertyCard from "../components/property/PropertyCard";

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getProperties().then(res => setList(res.data));
  }, []);

  return (
    <div style={{display:"flex",gap:"20px",flexWrap:"wrap",padding:"20px"}}>
      {list.map(p => <PropertyCard key={p.id} data={p} />)}
    </div>
  );
}
