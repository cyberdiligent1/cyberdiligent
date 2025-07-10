import React from "react";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-teal-900  text-gray-800 font-sans px-6 py-16">
      {" "}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl dark:text-gray-50 md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg mb-4 dark:text-gray-50">
          At Cyberdiligent, we don’t just deliver services — we help you lead
          with certainty. Whether navigating evolving threats, regulatory
          complexity, or AI governance, our expert advisory gives you the
          clarity to act, the control to adapt, and the confidence to grow
          securely.
        </p>
        <p className="font-bold mt-4 mb-8 dark:text-gray-50">
          Let’s connect.
          <br />
          <span className="text-teal-600 inline-flex items-center gap-1">
            <Mail className="w-5 h-5" /> Complete the form or email us directly.
          </span>
          <br />A member of our team will respond within one business day.
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
        <form className="grid md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              First Name
            </label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Last Name
            </label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none"
              type="text"
              placeholder="Doe"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Message *
            </label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none"
              rows={5}
              placeholder="Tell us about your needs..."
              required
            />
          </div>
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-600 hover:to-green-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
