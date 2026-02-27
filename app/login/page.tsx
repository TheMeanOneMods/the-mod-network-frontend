"use client";

import { useState } from "react";
import Link from "next/link";

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
        headers: { "Content-Type": "application/json" },
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
    <div className="min-h-screen flex items-center justify-center bg-[#111315] text-white px-6">

      <div className="w-full max-w-md bg-[#1a1d21] border border-[#2a2e35] rounded-lg p-8">

        <h1 className="text-2xl font-semibold mb-6 text-center">
          Account Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

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

          <div className="text-right text-sm">
            <Link
              href="/forgot-password"
              className="text-gray-400 hover:text-red-500 transition"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-md font-semibold transition"
          >
            Login
          </button>

        </form>

        {message && (
          <p className="mt-4 text-sm text-gray-400 text-center">{message}</p>
        )}

        <div className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link href="/register" className="text-red-500 hover:underline">
            Sign up
          </Link>
        </div>

      </div>

    </div>
  );
}