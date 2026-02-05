
import { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async e => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("password", password);
    const res = await api.post("/register.php", form);
    alert(res.data);
  };

  return (
    <form onSubmit={submit} style={{ padding: 20 }}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} /><br /><br />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br /><br />
      <button>Register</button>
    </form>
  );
}
