import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  PhoneCall,
  Mail,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-amber-400">Gold</span>Ride
            </h3>
            <p className="text-gray-400 mb-6">
              Premium taxi service providing comfortable, reliable and prompt
              transportation services throughout the metropolitan area.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-400 hover:text-black p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-400 hover:text-black p-2 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-400 hover:text-black p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-400 hover:text-black p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#home"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#fleet"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Airport Transfer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Corporate Travel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Event Transportation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Hourly Hire
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Special Occasions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Long Distance Travel
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-400">+1 (555) 987-6543</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">info@goldride.com</p>
                  <p className="text-gray-400">booking@goldride.com</p>
                </div>
              </li>
              <li>
                <h4 className="font-semibold text-white mb-2">
                  Download Our App
                </h4>
                <div className="flex space-x-2">
                  <a href="#" className="block">
                    <img
                      src="https://www.transparentpng.com/thumb/apple-app-store/apple-app-store-kit-logo-clipart-transparent-9.png"
                      alt="App Store"
                      className="h-10"
                    />
                  </a>
                  <a href="#" className="block">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className="h-10"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} Taxi Gagi Taxi Services. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="text-gray-500 hover:text-amber-400 transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-amber-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-amber-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
