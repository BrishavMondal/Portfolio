"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log(form);

    alert("Message submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
      />

      <textarea
        rows={6}
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
      />

      <button
        className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-black transition hover:scale-105"
      >
        Send Message
      </button>
    </form>
  );
}