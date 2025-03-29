import React from "react";
import "./ContactForm.css";
export const ContactForm = () => {
  return (
    <section className="p-13">

    <div className="bg-violet-300 border-2 border-violet-900 rounded-[10px] w-2xl mx-auto p-12">
      <h1 className="text-2xl mb-8 mx-auto">Get in touch with us!</h1>
      <form className="mx-auto mb-10">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
          required
        />
        <br />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          required
          />
        <br />
        <label for="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="1111111111"
          required
          />
        <br />
        <label for="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          placeholder="Products are Great want to get in touch"
          required
          />
        <br />

        <button
          type="submit"
          value="Send"
          className="relative flex items-center px-6 py-3 w-xs overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
          >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-violet-300" />
          </span>
          <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-violet-300" />
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Send Message
          </span>
        </button>
      </form>
    </div>
  </section>
  );
};

export default ContactForm;
