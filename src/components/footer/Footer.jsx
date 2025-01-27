import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-2   ">
      <div className=" mx-4 px-1 ">
        <div className="grid  grid-cols-3  md:grid-cols-3 gap-4 ">


          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm mb-2">Email: support@areopark.com</p>
            <p className="text-sm mb-2">Phone: +1 (123) 456-7890</p>
            <p className="text-sm">Address: 123 Aviation Lane, Sky City</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex flex-wrap space-x-4 justify-end md:justify-center gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-blue-600"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-blue-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-pink-500"
              >
                <FaInstagram size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-blue-700"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 m-2 pt-4 text-start text-sm">
          <p>© {new Date().getFullYear()} Areopark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
