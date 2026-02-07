import { useState } from "react";
import { loginUser } from "../../api/api";
import "./Auth.css";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);
    alert(res.data.status === "success" ? "Login Success" : "Invalid Login");
  };

  return (
    <form className="auth-form" onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <button>Login</button>
    </form>
  );
}
