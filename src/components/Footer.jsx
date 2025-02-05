import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "" 
  });

  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");
    const count = storedCount && !isNaN(storedCount) ? parseInt(storedCount, 10) + 5 : 1;
    localStorage.setItem("visitorCount", count);
    setVisitorCount(count);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", comment: "" });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-2">Visition</h2>
            <p className="text-gray-400">
              This is a great platform to unite all like-minded Ghosi people at one station.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/courses" className="hover:text-blue-400">Posts</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
            </ul>
          </div>

          {/* Comment Form */}
          <div>
            <h2 className="text-xl font-bold mb-2">Leave a Comment</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="comment"
                placeholder="Your Comment"
                rows="3"
                value={formData.comment}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-500">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><FaLinkedin /></a>
          </div>

          {/* Visitor Count */}
          <div className="text-gray-400 mt-4 md:mt-0">
            <p>Visitor Count: <span className="font-bold text-white">{visitorCount}</span></p>
          </div>

          {/* Copyright */}
          <p className="mt-4 md:mt-0">© 2025 Ghoshi Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
