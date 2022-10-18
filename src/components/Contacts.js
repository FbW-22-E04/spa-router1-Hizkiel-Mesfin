import { useState } from "react";
import "../App.css";

const Contacts = () => {
  const [init, setInit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameVal = e.target.elements.name.value;
    const emailVal = e.target.elements.email.value;
    const textVal = e.target.elements.text.value;
    console.log(!textVal);

    if (!nameVal || !emailVal || !textVal) {
      setInit("Please fill in every input");
    } else {
      setInit("Thank you for you message!!");
      e.target.elements.name.value = "";
      e.target.elements.email.value = "";
      e.target.elements.text.value = "";
    }
  };

  return (
    <div className="contacts-container">
      <h2 className="contact-me">Contact Me</h2>
      <h3 className="info"> {init} </h3>

      <div className="details">
        <form action="" onSubmit={handleSubmit}>
          <input
            className="contact-name"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="contact-email"
            type="text"
            name="email"
            placeholder="Email"
          />
          <textarea
            placeholder="Message"
            className="contact-message"
            name="text"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="send-message">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
