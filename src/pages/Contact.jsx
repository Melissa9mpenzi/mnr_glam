import  { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send the form data
    console.log({ name, email, message });
    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#793b51]">Reach Out to Us – M&R Glam Fashion</h1>
      </div>



      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-[50%]">
        <h2 className="text-lg font-medium mb-4 text-[#793b51]">Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#793b51]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#793b51]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#793b51]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-1/4 bg-[#793b51] text-white rounded-full py-2 hover:bg-[#5d2c3d] transition-colors ml-52"
          >
            Send Message
          </button>
        </form>
      </div>





      {/* Contact Details */}
      <div className="flex justify-between mb-8">
        <div className="text-center">
          <h3 className="text-lg font-medium">📧 Email</h3>
          <p className="text-gray-500">info@mrglamfashion.com</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium">📞 Phone</h3>
          <p className="text-gray-500">+256-123-456-789</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium">📍 Location</h3>
          <p className="text-gray-500">Seeta, Mukono, Uganda</p>
        </div>
      </div>

      {/* Map */}
      <div className="mb-8">
        <iframe
          title="M&R Glam Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7978.737229740938!2d32.73291753361961!3d0.3536112598525806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d8e3e1d9dbf5d%3A0x8d9a5f2f1e6cd02a!2sSeeta%2C%20Mukono%20District!5e0!3m2!1sen!2sug!4v1700000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    
    </div>
  );
};

export default ContactPage;
