import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white text-black" style={{ fontFamily: '"Inter", sans-serif' }}>
      <main className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-center font-bold text-sm leading-snug max-w-3xl mx-auto">
          At Cyberdiligent, we don't just deliver services — we help you lead with certainty. Whether navigating evolving threats, regulatory complexity, or AI governance, our expert advisory gives you the clarity to act, the control to adapt, and the confidence to grow securely.
        </p>
        <p className="text-center font-bold text-sm leading-snug max-w-3xl mx-auto mt-4">
          Let's connect.
          <br />
          Reach out today to discover how we can partner to protect what matters most — and move your business forward with purpose and precision.
        </p>
        <p className="text-center font-bold text-sm leading-snug max-w-3xl mx-auto mt-4">
          <i className="far fa-calendar-alt mr-1"></i>
          Complete the form or email us directly. A member of our team will respond within one business day.
        </p>

        <form className="mt-8 space-y-6 max-w-3xl mx-auto">
          <div>
            <label className="block text-sm font-normal mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full bg-[#b3b1bf] placeholder-[#7a778a] text-sm py-3 px-4 focus:outline-none"
              id="name"
              name="name"
              placeholder="Your name"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm font-normal mb-1" htmlFor="lastname">
              Last name
            </label>
            <input
              className="w-full bg-[#b3b1bf] placeholder-[#7a778a] text-sm py-3 px-4 focus:outline-none"
              id="lastname"
              name="lastname"
              placeholder="Your last name"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm font-normal mb-1" htmlFor="email">
              Your email*
            </label>
            <input
              className="w-full bg-[#b3b1bf] placeholder-[#7a778a] text-sm py-3 px-4 focus:outline-none"
              id="email"
              name="email"
              placeholder="Your email address"
              required
              type="email"
            />
          </div>
          <div>
            <label className="block text-sm font-normal mb-1" htmlFor="message">
              Message*
            </label>
            <textarea
              className="w-full bg-[#b3b1bf] placeholder-[#7a778a] text-sm py-3 px-4 resize-y focus:outline-none"
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              rows="4"
            ></textarea>
          </div>
          <button
            className="mt-4 bg-[#5eead4] text-white text-sm font-normal rounded-full px-8 py-2.5 hover:bg-[#4bd9c3] transition-colors"
            type="submit"
          >
            Submit
          </button>
        </form>

        <footer className="mt-12 text-center font-bold text-sm max-w-3xl mx-auto">
          <p>(682)-990-5950</p>
          <p>info@cyberdiligent.net</p>
          <a className="text-[#2a7a8c] underline inline-block mt-1" href="#">
            in
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Contact;