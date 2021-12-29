import React from "react";

import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Get A Free Preview</h1>
      <p>
        Sign up to get a free preview of the book. You can offer visitors free
        book previews to generate leads.
      </p>
      <div>
        <span>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </span>
      </div>
    </div>
  );
};

export default Contact;
