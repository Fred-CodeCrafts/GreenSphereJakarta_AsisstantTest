import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Here's my message: ${message}`;
    const whatsappURL = `https://wa.me/085288948880?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
