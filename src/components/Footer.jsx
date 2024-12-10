import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#82442b] text-white py-4 shadow-md">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="/help-center" className="hover:text-gray-400">Help Center</a></li>
            <li><a href="/terms" className="hover:text-gray-400">Terms and Conditions</a></li>
            <li><a href="/feedback" className="hover:text-gray-400">Take our feedback survey</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Shopping with Us</h3>
          <ul className="space-y-2">
            <li><a href="/payments" className="hover:text-gray-400">Making Payments</a></li>
            <li><a href="/delivery" className="hover:text-gray-400">Delivery Options</a></li>
            <li><a href="/buyer-protection" className="hover:text-gray-400">Buyer Protection</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Collaborate with Us</h3>
          <ul className="space-y-2">
            <li><a href="/partnerships" className="hover:text-gray-400">Partnerships</a></li>
            <li><a href="/affiliates" className="hover:text-gray-400">Affiliate Program</a></li>
            <li><a href="/seller-login" className="hover:text-gray-400">Seller Log In</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">PAYMENT METHODS</h3>
          <div className="flex flex-wrap gap-2">
            <img src="/visa.png" alt="Visa" className="h-8 w-8" />
            <img src="/mastercard.png" alt="MasterCard" className="h-8 w-8" />
            <img src="/paypal.png" alt="PayPal" className="h-8 w-8" />
            <img src="/apple_pay.png" alt="Apple Pay" className="h-8 w-8" />
            <img src="/airtel_momo.png" alt="Airtel Pay" className="h-8 w-8" />
            <img src="/mtn_momo.png" alt="MTN Pay" className="h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p>&copy; 2024 M&R Glam. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <FaFacebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
