import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form id="contactForm" className="row">
      <div className="col-md-6 mb-3">
        <input type="text" className="form-control" placeholder="Your Name" required />
      </div>
      <div className="col-md-6 mb-3">
        <input type="email" className="form-control" placeholder="Your Email" required />
      </div>
      <div className="col-md-12 mb-3">
        <textarea className="form-control" placeholder="Your Message" required></textarea>
      </div>
      <div className="col-md-12">
        <button type="submit" className="btn-primary">Send Message</button>
      </div>
    </form>
  </section>
);
}

export default Contact;
