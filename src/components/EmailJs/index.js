import React from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import { Icon } from '../SignIn/SigninElements.js';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ke20yf5',
        'template_fjqtv0l',
        e.target,
        'user_dozIEBx1SgevhKhwr9IUJ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <Icon className="home" to="/">
        Woodland
      </Icon>

      <form className="contact-form" onSubmit={sendEmail}>
        <div className="wrap">
          <input className="input1" type="hidden" name="contact_number" />
          <label className="label1">Name</label>
          <input className="input1" type="text" name="user_name" />
        </div>
        <div className="wrap">
          <label className="label1">Email</label>
          <input className="input1" type="email" name="user_email" />
        </div>
        <div className="wrap">
          <label className="label1">Message</label>
          <textarea className="input2" name="message" />
        </div>
        <input className="btn" type="submit" value="Send" />
      </form>
    </>
  );
}
