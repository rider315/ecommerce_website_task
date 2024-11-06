import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-2/3 p-4 border rounded-md bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone *"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 mb-4"
        rows="5"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 focus:outline-none">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
