import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <div>
        <h2>Contact</h2>
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
            <input type="hidden" name="apikey" value="0761ef7d-af07-4a95-aff0-4ba8b5473cc7" />
            <input type="hidden" name="subject" value="New Submission from Web3Forms" />

            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">submit</button>
        </form>
    </div>
  );
}

export default Contact;