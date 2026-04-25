import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-md p-6 rounded shadow text-center">

        <h1 className="text-xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-gray-700 mb-2">
          Email: support@coursefinder.com
        </p>

        <p className="text-gray-700 mb-2">
           Phone: +91 98765 43210
        </p>

        <p className="text-gray-700 mb-2">
           Location: India
        </p>

        <p className="text-gray-500 text-sm mt-4">
          We usually respond within 24 hours.

        </p>

      </div>

    </div>
  );
}

export default Contact;