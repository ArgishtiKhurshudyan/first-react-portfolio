import React from "react";
import { useState } from "react";
import "./Contact.scss";
export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="./assets/img/shake.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Messages"></textarea>
          <button type="input">Send</button>
          {message && <span>Thank I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
