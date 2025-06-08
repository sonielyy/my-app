// src/pages/ContactPage.jsx
import './ContactPage.css';
import { useState } from 'react';
import locationIcon from '../assets/location.svg';
import phoneIcon from '../assets/phone.svg';
import mailIcon from '../assets/mail.svg';

function ContactPage() {
   const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      nationality: '',
      service: '',
      country: '',
      message: ''
    });

  const [errors, setErrors] = useState({});


  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
  const { name, value } = e.target;
  let message = "";

  switch (name) {
    case "fullName":
      if (!/^[a-zA-Z\s]{3,}$/.test(value)) {
        message = "Please enter a valid full name (min 3 letters).";
      }
      break;
    case "email":
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = "Please enter a valid email address.";
      }
      break;
    case "phone":
      if (value && !/^[0-9]{10,}$/.test(value)) {
        message = "Phone number must be at least 10 digits.";
      }
      break;
    case "nationality":
      if (value && !/^[a-zA-Z\s]{2,}$/.test(value)) {
        message = "Nationality must contain only letters.";
      }
      break;
    default:
      break;
  }

  setErrors(prev => ({ ...prev, [name]: message }));
};

  
  const validate = () => {
      const newErrors = {};
      const nameRegex = /^[a-zA-Z\s]{3,}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10,}$/;
      const nationalityRegex = /^[a-zA-Z\s]{2,}$/;

      if (!nameRegex.test(formData.fullName)) {
        newErrors.fullName = 'Please enter a valid full name (min 3 letters).';
      }

      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }

      if (formData.phone && !phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Phone number must be at least 10 digits.';
      }

      if (formData.nationality && !nationalityRegex.test(formData.nationality)) {
        newErrors.nationality = 'Nationality must contain only letters.';
      }

      return newErrors;
    };

const handleSubmit = e => {
  e.preventDefault();
  const formErrors = validate();
  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
  } else {
    setErrors({});
    console.log('Form submitted:', formData);
    // Buraya API bağlantısı vs.
  }
};


  return (
    <div className="contact-container">
      {/* Left Side - Info Cards */}
      <div className="contact-info">
        <div className="info-card">
          <img src={locationIcon} className="icon" alt="Location" />
          <div>
            <h3>Address</h3>
            <p>123 EU Street, Brussels, Belgium</p>
          </div>
        </div>
        <div className="info-card">
          <img src={phoneIcon} className="icon" alt="Phone" />
          <div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="info-card">
          <img src={mailIcon} className="icon" alt="Email" />
          <div>
            <h3>Email</h3>
            <p>info@eupassport.com</p>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <input type="text" name="fullName" placeholder="Full Name" onBlur={handleBlur}
 onChange={handleChange} required />
        {errors.fullName && <span className="error">{errors.fullName}</span>}
        <input type="email" name="email" placeholder="Email"  onBlur={handleBlur}
onChange={handleChange} required />
        {errors.email && <span className="error">{errors.email}</span>}

        <input type="tel" name="phone" placeholder="Phone Number" onBlur={handleBlur}
 onChange={handleChange} />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <input type="text" name="nationality" placeholder="Nationality" onBlur={handleBlur}
 onChange={handleChange} />
        {errors.nationality && <span className="error">{errors.nationality}</span>}

        <select name="service" onChange={handleChange} required>
          <option value="">Select Service</option>
          <option value="university">University Path</option>
          <option value="investment">Investment</option>
          <option value="entrepreneurship">Entrepreneurship</option>
        </select>

        <select name="country" onChange={handleChange} required>
          <option value="">Select Country</option>
          <option value="ireland">Ireland</option>
          <option value="portugal">Portugal</option>
          <option value="spain">Spain</option>
        </select>

        <textarea name="message" placeholder="Your Message" rows="5" onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
