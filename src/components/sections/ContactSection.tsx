"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0f172a] text-white py-24 px-6 md:px-12 lg:px-24"
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Contact Me</h2>
        <p className="text-gray-400 mb-8">
          Want to collaborate or have a question? Reach out and I'll get back to
          you shortly.
        </p>

        <form
          action="https://formspree.io/f/mrgnqvvn" // Replace with your actual form link
          method="POST"
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-6"
        >
          <div className="text-left space-y-1">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full bg-[#1e293b] border border-gray-600 rounded-md px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>

          <div className="text-left space-y-1">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="_replyto"
              id="email"
              required
              className="w-full bg-[#1e293b] border border-gray-600 rounded-md px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="text-left space-y-1">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full bg-[#1e293b] border border-gray-600 rounded-md px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all w-full font-semibold"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
