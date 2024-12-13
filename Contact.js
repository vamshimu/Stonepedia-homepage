import React from 'react';

const Contact = () => (
  <section id="contact" className="py-12 bg-gray-100">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="block w-full p-3 mb-4 border rounded" />
        <input type="email" placeholder="Your Email" className="block w-full p-3 mb-4 border rounded" />
        <textarea placeholder="Your Message" className="block w-full p-3 mb-4 border rounded h-32"></textarea>
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600">Send</button>
      </form>
    </div>
  </section>
);

export default Contact;
