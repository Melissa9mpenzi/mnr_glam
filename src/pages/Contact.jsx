const Contact = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <form className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 w-full rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="border p-2 w-full rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
