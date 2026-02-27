"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      "https://themodnetwork-api.caleab-h-harless.workers.dev/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      setMessage("Login successful!");
    } else {
      setMessage("Invalid credentials.");
    }
  };

  return (
    <div className="max-w-md mx-auto py-24 px-6">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold"
        >
          Login
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-gray-400">{message}</p>}
    </div>
  );
}