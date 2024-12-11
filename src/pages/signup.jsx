
import React from "react";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.includes("@")) newErrors.email = "Invalid email";
    if (password.length <8) newErrors.password = "Invalid password";
    if (!name) newErrors.name = "Name is required";
    if (!phone) newErrors.phone = "Phone number is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Signup successful");
      setEmail("");
      setPassword("");
      setName("");
      setPhone("")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-400">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl">signup Form</h2>
        <div className="mb-2">
          <label className="text-center text-gray-800">Name:</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="text-center text-gray-800">Phone:</label>
          <input
            type="integer"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className=" text-blue-950 "
          />
        </div>
        <div className="mb-2">
          <label className="text-center text-gray-800">Emali:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" text-blue-950 "
          />
        </div>
        <div className="mb-2">
          <label className="text-center text-gray-800">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-400">
            signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;