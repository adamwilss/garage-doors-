"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Send } from "lucide-react";

const serviceOptions = [
  "Garage doors",
  "Garage door repair",
  "Garage door automation",
  "Gates",
  "Servicing",
  "Other",
];

const urgencyOptions = ["Not urgent", "Within a week", "Within 48 hours", "Emergency"];

const contactMethods = ["Phone", "Email", "WhatsApp"];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    service: "",
    urgency: "",
    message: "",
    contactMethod: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <ScrollReveal>
        <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Thank you</h3>
          <p className="text-slate-600 dark:text-slate-400">
            We have received your enquiry and will be in touch shortly to arrange your free
            quotation.
          </p>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6 lg:p-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white bg-white dark:bg-[#0f0f0f] focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Phone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white bg-white dark:bg-[#0f0f0f] focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white bg-white dark:bg-[#0f0f0f] focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="postcode" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Postcode *
            </label>
            <input
              id="postcode"
              name="postcode"
              type="text"
              required
              value={form.postcode}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white bg-white dark:bg-[#0f0f0f] focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Service needed
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white bg-white dark:bg-[#0f0f0f] focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
            >
              <option value="">Select a service</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Urgency
            </label>
            <select
              id="urgency"
              name="urgency"
              value={form.urgency}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white bg-white dark:bg-[#0f0f0f] focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
            >
              <option value="">Select urgency</option>
              {urgencyOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project, existing door or gate, and any preferences..."
            className="w-full px-4 py-2.5 border border-slate-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white bg-white dark:bg-[#0f0f0f] focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-y"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Preferred contact method</p>
          <div className="flex flex-wrap gap-3">
            {contactMethods.map((method) => (
              <label key={method} className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  checked={form.contactMethod === method}
                  onChange={handleChange}
                  className="w-4 h-4 text-accent border-slate-300 dark:border-[#333] focus:ring-accent"
                />
                <span className="text-sm text-slate-700 dark:text-slate-300">{method}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-600 text-white rounded-md font-semibold text-base transition-colors"
        >
          <Send className="w-4 h-4" />
          Request a free quote
        </button>
      </form>
    </ScrollReveal>
  );
}
