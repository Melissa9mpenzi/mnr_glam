const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="flex justify-between items-center">
        <p>&copy; 2024 M&R Glam. All rights reserved.</p>
        <div className="flex space-x-2">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Twitter">TW</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
