import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // You can handle form submission here, like sending data to an API

    setTimeout(() => {
      alert("Form submitted successfully!");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className=" flex items-center justify-center bg-gray-800 text-white overflow-hidden hover:scale-105 transform transition-all duration-300">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-gray-900 p-10 rounded-lg shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-[rgb(54,188,195)]">Contact Me</h2>
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-700 border-2 border-gray-600 focus:border-[rgb(54,188,195)] outline-none text-white"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-lg mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-700 border-2 border-gray-600 focus:border-[rgb(54,188,195)] outline-none text-white"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-lg mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-700 border-2 border-gray-600 focus:border-[rgb(54,188,195)] outline-none text-white"
            placeholder="Write your message here"
            rows="5"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg text-lg font-semibold transition-all duration-300 ${
              isSubmitting
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[rgb(54,188,195)] hover:bg-[rgb(41,150,165)] text-black"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
