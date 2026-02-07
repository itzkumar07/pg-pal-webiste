import { useState } from "react";
import { addProperty } from "../api/api";

export default function AddProperty() {
  const [data, setData] = useState({ title:"", city:"", price:"", image:"", owner_id:1 });

  const submit = async e => {
    e.preventDefault();
    await addProperty(data);
    alert("Property Added");
  };

  return (
    <form className="auth-form" onSubmit={submit}>
      <h2>Add Property</h2>
      <input placeholder="Title" onChange={e=>setData({...data,title:e.target.value})}/>
      <input placeholder="City" onChange={e=>setData({...data,city:e.target.value})}/>
      <input placeholder="Price" onChange={e=>setData({...data,price:e.target.value})}/>
      <input placeholder="Image URL" onChange={e=>setData({...data,image:e.target.value})}/>
      <button>Add</button>
    </form>
  );
}
