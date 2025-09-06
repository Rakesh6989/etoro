"use client";
import { useState } from "react";

const SignupForm = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    terms: false,
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.username || !form.password) {
      alert("Please fill all required fields!");
      return;
    }
    if (!form.terms || !form.privacy) {
      alert("Please accept Terms & Privacy Policy!");
      return;
    }
    console.log("Form Data:", form);
    alert("Account Created Successfully!");
    setForm({
      email: "",
      username: "",
      password: "",
      terms: false,
      privacy: false,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-center text-2xl font-bold mb-4">Join eToro</h2>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-2 border rounded-full py-2 hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">Or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded focus:outline-none focus:ring focus:ring-emerald-400"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 rounded focus:outline-none focus:ring focus:ring-emerald-400"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded focus:outline-none focus:ring focus:ring-emerald-400"
            value={form.password}
            onChange={handleChange}
            required
          />

          {/* Checkboxes */}
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
            />
            I acknowledge the eToro (Seychelles) Ltd{" "}
            <a href="#" className="text-emerald-600 underline">
              Terms & Conditions
            </a>
            .
          </label>

          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="privacy"
              checked={form.privacy}
              onChange={handleChange}
            />
            I acknowledge that my information will be used in accordance with
            the{" "}
            <a href="#" className="text-emerald-600 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-emerald-600 underline">
              Cookie Policy
            </a>
            .
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-full font-semibold transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
