import { useState } from "react";
import { registerUser } from "../../api/api";
import "./Auth.css";

export default function RegisterForm() {
  const [form, setForm] = useState({ name:"", email:"", password:"" });

  const submit = async (e) => {
    e.preventDefault();
    await registerUser(form);
    alert("Registered Successfully");
  };

  return (
    <form className="auth-form" onSubmit={submit}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <button>Register</button>
    </form>
  );
}
