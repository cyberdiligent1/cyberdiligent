import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef();
  const [modal, setModal] = React.useState({
    show: false,
    success: true,
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const timeInput = document.getElementById("email-time");
    timeInput.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setModal({
            show: true,
            success: true,
            message:
              "Message sent successfully! We will respond within one business day",
          });
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setModal({
            show: true,
            success: false,
            message: "Failed to send message. Try again later.",
          });
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-teal-900 text-gray-800 font-sans px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl dark:text-gray-50 md:text-5xl font-bold mb-6">
          Get in Touch
        </h1>
        <p className="text-lg mb-4 dark:text-gray-50">
          At Cyberdiligent, we don’t just deliver services — we help you lead
          with certainty. Whether navigating evolving threats, regulatory
          complexity, or AI governance, our expert advisory gives you the
          clarity to act, the control to adapt, and the confidence to grow
          securely.
        </p>
        <p className="font-bold mt-4 mb-8 dark:text-gray-50">
          Let’s connect. <br />
          <span className="text-teal-600 inline-flex items-center gap-1">
            <Mail className="w-5 h-5" /> Complete the form or email us directly.
          </span>
          <br />A member of our team will respond within one business day.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              First Name
            </label>
            <input
              name="firstName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Jane"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Last Name
            </label>
            <input
              name="lastName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Doe"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Tell us about your needs..."
            />
          </div>

          <input type="hidden" name="time" id="email-time" />

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
      {modal.show && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg shadow-teal-900 p-6 max-w-sm w-full text-center space-y-4">
            <h2
              className={`text-lg font-semibold ${
                modal.success
                  ? "text-green-600 dark:text-green-700"
                  : "text-red-600 dark:text-red-700"
              }`}
            >
              {modal.success ? "Success" : "Error"}
            </h2>
            <p className="text-gray-700 dark:text-teal-500">{modal.message}</p>
            <button
              onClick={() => setModal({ ...modal, show: false })}
              className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-600 hover:to-green-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
