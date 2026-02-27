"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      "https://themodnetwork-api.caleab-h-harless.workers.dev/api/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();

    if (data.success) {
      setMessage("Account created successfully!");
    } else {
      setMessage("Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111315] text-white px-6">

      <div className="w-full max-w-md bg-[#1a1d21] border border-[#2a2e35] rounded-lg p-8">

        <h1 className="text-2xl font-semibold mb-6 text-center">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 bg-[#111315] border border-[#2a2e35] rounded-md focus:border-red-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-[#111315] border border-[#2a2e35] rounded-md focus:border-red-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-md font-semibold transition"
          >
            Register
          </button>

        </form>

        {message && (
          <p className="mt-4 text-sm text-gray-400 text-center">{message}</p>
        )}

        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-red-500 hover:underline">
            Login
          </Link>
        </div>

      </div>

    </div>
  );
}