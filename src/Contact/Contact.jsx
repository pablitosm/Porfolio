import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <div className='container-contact'>
        <h2>Contact</h2>
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
          <input type="hidden" name="apikey" value="0761ef7d-af07-4a95-aff0-4ba8b5473cc7" />
          <input type="hidden" name="subject" value="New Submission from Web3Forms" />

          <div className="input-container">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">Send</button>
          </div>
      </form>
    </div>
  );
}

export default Contact;